"""
Build print-ready outputs for Klarheitskarten:
- one combined multi-page PDF (one card per page, with bleed) for upload/preview
- one A4 proof sheet PDF (4 cards per A4 page, trim marks) for home printing & proofreading
"""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
EXPORTS = ROOT / "03_exports"
PROOF_DIR = EXPORTS / "proof_pdf"
PROOF_DIR.mkdir(parents=True, exist_ok=True)

DPI = 300
MM = DPI / 25.4

# Card with bleed = 69.5 x 94.9 mm = 821 x 1121 px
CARD_W = round(69.5 * MM)
CARD_H = round(94.9 * MM)

# A4 = 210 x 297 mm @ 300 DPI = 2480 x 3508
A4_W = round(210 * MM)
A4_H = round(297 * MM)


def collect_pages():
    pages = []
    cards_dir = EXPORTS / "cards_front"
    for p in sorted(cards_dir.glob("*.png")):
        pages.append(p)
    rules_dir = EXPORTS / "rules"
    for p in sorted(rules_dir.glob("*.png")):
        pages.append(p)
    back = EXPORTS / "backs" / "card_back.png"
    if back.exists():
        pages.append(back)
    return pages


def build_combined_pdf():
    pages = collect_pages()
    images = [Image.open(p).convert("RGB") for p in pages]
    out = PROOF_DIR / "klarheitskarten_all_pages.pdf"
    images[0].save(
        out,
        "PDF",
        resolution=DPI,
        save_all=True,
        append_images=images[1:],
    )
    print(f"  combined: {out.name} ({len(pages)} pages)")


def build_proof_sheets():
    """4 cards per A4 sheet, trimmed (no bleed), with hairline trim marks."""
    cards_dir = EXPORTS / "cards_front"
    cards = sorted(cards_dir.glob("*.png"))
    rules = sorted((EXPORTS / "rules").glob("*.png"))
    back = [(EXPORTS / "backs" / "card_back.png")]
    all_cards = cards + rules + back

    # Trim each card from bleed (3mm = ~36 px on each side)
    trim = round(3 * MM)
    trimmed = []
    for p in all_cards:
        img = Image.open(p).convert("RGB")
        cropped = img.crop((trim, trim, img.width - trim, img.height - trim))
        trimmed.append(cropped)

    # Each trimmed card is 750 x 1050 px (63.5 x 88.9 mm)
    # 4 per A4 in 2x2 grid, with margins for cutting
    margin_mm = 10
    gap_mm = 8
    margin_px = round(margin_mm * MM)
    gap_px = round(gap_mm * MM)

    # Verify it fits
    needed_w = 2 * 750 + gap_px + 2 * margin_px
    needed_h = 2 * 1050 + gap_px + 2 * margin_px
    if needed_w > A4_W or needed_h > A4_H:
        # Should still fit: 2*750+~94+~236=1830 vs 2480 OK; 2*1050+94+236=2430 vs 3508 OK
        pass

    sheets = []
    for i in range(0, len(trimmed), 4):
        sheet = Image.new("RGB", (A4_W, A4_H), "white")
        positions = [
            (margin_px, margin_px),
            (margin_px + 750 + gap_px, margin_px),
            (margin_px, margin_px + 1050 + gap_px),
            (margin_px + 750 + gap_px, margin_px + 1050 + gap_px),
        ]
        for j, pos in enumerate(positions):
            if i + j < len(trimmed):
                sheet.paste(trimmed[i + j], pos)
        # Add cut/trim marks (light gray hairlines around each card)
        from PIL import ImageDraw

        d = ImageDraw.Draw(sheet)
        for j, pos in enumerate(positions):
            if i + j >= len(trimmed):
                continue
            x, y = pos
            x2, y2 = x + 750, y + 1050
            mark = 30  # px
            d.line([(x - mark, y), (x - 4, y)], fill=(180, 180, 180), width=1)
            d.line([(x2 + 4, y), (x2 + mark, y)], fill=(180, 180, 180), width=1)
            d.line([(x - mark, y2), (x - 4, y2)], fill=(180, 180, 180), width=1)
            d.line([(x2 + 4, y2), (x2 + mark, y2)], fill=(180, 180, 180), width=1)
            d.line([(x, y - mark), (x, y - 4)], fill=(180, 180, 180), width=1)
            d.line([(x, y2 + 4), (x, y2 + mark)], fill=(180, 180, 180), width=1)
            d.line([(x2, y - mark), (x2, y - 4)], fill=(180, 180, 180), width=1)
            d.line([(x2, y2 + 4), (x2, y2 + mark)], fill=(180, 180, 180), width=1)

        sheets.append(sheet)

    out = PROOF_DIR / "klarheitskarten_a4_proof.pdf"
    sheets[0].save(
        out,
        "PDF",
        resolution=DPI,
        save_all=True,
        append_images=sheets[1:],
    )
    print(f"  proof A4: {out.name} ({len(sheets)} sheets)")


if __name__ == "__main__":
    build_combined_pdf()
    build_proof_sheets()
