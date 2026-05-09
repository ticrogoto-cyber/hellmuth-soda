"""
Render Klarheitskarten card fronts as print-ready PNGs.
- Card size with 3mm bleed: 69.5 x 94.9 mm
- 300 DPI -> 821 x 1121 px
- Trim: 63.5 x 88.9 mm (750 x 1050 px), centered
- Safe zone: 3 mm inside trim
- Black on white, Printvetica + Fournier MT Pro per briefing 9.2
"""
import csv
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
CSV_PATH = ROOT / "01_text" / "klarheitskarten_001_master.csv"
OUT_DIR = ROOT / "03_exports" / "cards_front"
OUT_DIR.mkdir(parents=True, exist_ok=True)

FONT_DIR = ROOT.parent / "fonts"
F_DISPLAY = str(FONT_DIR / "PRINTVETICA.OTF")
F_SERIF = str(FONT_DIR / "FOURNIERMTPRO-REGULAR.TTF")
F_ITALIC = str(FONT_DIR / "FOURNIERMTPRO-ITALIC.TTF")

DPI = 300
MM = DPI / 25.4
W = round(69.5 * MM)
H = round(94.9 * MM)
BLEED = round(3 * MM)
SAFE = BLEED * 2
CONTENT_X0 = SAFE
CONTENT_X1 = W - SAFE
CONTENT_Y0 = SAFE
CONTENT_Y1 = H - SAFE
CONTENT_W = CONTENT_X1 - CONTENT_X0

QUARTETT_LABEL = {
    "Aufschub": "AUFSCHUB",
    "Kontrollillusion": "KONTROLLILLUSION",
    "Entlastungsluegen": "ENTLASTUNGSLÜGEN",
    "Identitaetsluegen": "IDENTITÄTSLÜGEN",
    "Leistungsmythen": "LEISTUNGSMYTHEN",
    "Entzug_Rueckfall": "ENTZUG & RÜCKFALL",
    "Ersatzhandlungen": "ERSATZHANDLUNGEN",
    "Recherche_Ablenkung": "RECHERCHE & ABLENKUNG",
    "Opfergeschichten": "OPFERGESCHICHTEN",
    "Moralische_Ausreden": "MORALISCHE AUSREDEN",
    "Koerperluegen": "KÖRPERLÜGEN",
    "Beziehung_Milieu": "BEZIEHUNG & MILIEU",
    "Kreativitaet_Autor": "KREATIVITÄT & AUTOR-MYTHEN",
}

VALUES = [
    ("Sofortentlastung", "sofortentlastung"),
    ("Tarnung", "tarnung"),
    ("Rückfallkraft", "rueckfallkraft"),
    ("Folgekosten", "folgekosten"),
    ("Klarheitsschmerz", "klarheitsschmerz"),
]


def load(path):
    out = {}
    with open(path, encoding="utf-8") as f:
        for row in csv.DictReader(f, delimiter=";"):
            out[row["id"]] = row
    return out


def font(path, size):
    return ImageFont.truetype(path, size)


def measure(draw, text, fnt):
    box = draw.textbbox((0, 0), text, font=fnt)
    return box[2] - box[0], box[3] - box[1]


def fit_size(draw, text, font_path, max_w, start_size, min_size=20):
    s = start_size
    while s > min_size:
        f = font(font_path, s)
        w, _ = measure(draw, text, f)
        if w <= max_w:
            return f, s
        s -= 2
    return font(font_path, min_size), min_size


def wrap(draw, text, fnt, max_w):
    words = text.split()
    lines, cur = [], ""
    for w in words:
        test = (cur + " " + w).strip()
        if measure(draw, test, fnt)[0] <= max_w:
            cur = test
        else:
            if cur:
                lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines


def render_card(row, out_path):
    img = Image.new("RGB", (W, H), "white")
    d = ImageDraw.Draw(img)

    # Trim guideline (only for proof renders; remove for production)
    # (kept off; QPMN expects clean art with bleed)

    cx = W // 2

    # 1) Header line: KLARHEITSKARTEN I
    f_head = font(F_DISPLAY, 28)
    head = "KLARHEITSKARTEN I"
    hw, hh = measure(d, head, f_head)
    y = CONTENT_Y0
    d.text((cx - hw // 2, y), head, fill="black", font=f_head)
    y += hh + 12

    # 2) Quartett label
    f_quart = font(F_DISPLAY, 36)
    quart = QUARTETT_LABEL.get(row["quartett"], row["quartett"].upper())
    qw, qh = measure(d, quart, f_quart)
    if qw > CONTENT_W:
        f_quart, _ = fit_size(d, quart, F_DISPLAY, CONTENT_W, 36, 22)
        qw, qh = measure(d, quart, f_quart)
    d.text((cx - qw // 2, y), quart, fill="black", font=f_quart)
    y += qh + 36

    # Hairline divider
    d.line([(CONTENT_X0 + 60, y), (CONTENT_X1 - 60, y)], fill="black", width=2)
    y += 36

    # 3) Title (multi-line, fit-to-width per line)
    title = row["titel"].upper()
    f_title = font(F_DISPLAY, 92)
    lines = wrap(d, title, f_title, CONTENT_W)
    # If a single line still too wide, shrink
    while any(measure(d, l, f_title)[0] > CONTENT_W for l in lines) and f_title.size > 50:
        f_title = font(F_DISPLAY, f_title.size - 4)
        lines = wrap(d, title, f_title, CONTENT_W)
    line_h = int(f_title.size * 1.05)
    block_h = line_h * len(lines)
    title_y = y
    for i, line in enumerate(lines):
        lw, _ = measure(d, line, f_title)
        d.text((cx - lw // 2, title_y + i * line_h), line, fill="black", font=f_title)
    y = title_y + block_h + 24

    # 4) Mechanismus
    f_mech = font(F_DISPLAY, 24)
    mech = row["mechanismus"].upper()
    mw, mh = measure(d, mech, f_mech)
    if mw > CONTENT_W:
        f_mech, _ = fit_size(d, mech, F_DISPLAY, CONTENT_W, 24, 16)
        mw, mh = measure(d, mech, f_mech)
    d.text((cx - mw // 2, y), mech, fill="black", font=f_mech)
    y += mh + 28

    # Hairline divider
    d.line([(CONTENT_X0 + 60, y), (CONTENT_X1 - 60, y)], fill="black", width=2)
    y += 22

    # 5) Values
    f_val_label = font(F_DISPLAY, 26)
    f_val_num = font(F_DISPLAY, 28)
    row_h = 38
    for label, key in VALUES:
        val = row[key]
        d.text((CONTENT_X0 + 8, y), label, fill="black", font=f_val_label)
        nw, _ = measure(d, val, f_val_num)
        d.text((CONTENT_X1 - 8 - nw, y - 2), val, fill="black", font=f_val_num)
        y += row_h

    y += 12
    d.line([(CONTENT_X0 + 60, y), (CONTENT_X1 - 60, y)], fill="black", width=2)
    y += 22

    # 6) Diagnose (italic serif)
    f_diag = font(F_ITALIC, 30)
    diag_lines = wrap(d, row["diagnose"], f_diag, CONTENT_W)
    while sum(measure(d, l, f_diag)[1] for l in diag_lines) > 110 and f_diag.size > 22:
        f_diag = font(F_ITALIC, f_diag.size - 2)
        diag_lines = wrap(d, row["diagnose"], f_diag, CONTENT_W)
    dlh = int(f_diag.size * 1.25)
    for i, line in enumerate(diag_lines):
        lw, _ = measure(d, line, f_diag)
        d.text((cx - lw // 2, y + i * dlh), line, fill="black", font=f_diag)
    y += dlh * len(diag_lines) + 18

    # 7) Falltürfrage (regular serif)
    f_q = font(F_SERIF, 28)
    q_lines = wrap(d, row["falltuerfrage"], f_q, CONTENT_W)
    while sum(measure(d, l, f_q)[1] for l in q_lines) > 110 and f_q.size > 20:
        f_q = font(F_SERIF, f_q.size - 2)
        q_lines = wrap(d, row["falltuerfrage"], f_q, CONTENT_W)
    qlh = int(f_q.size * 1.25)
    for i, line in enumerate(q_lines):
        lw, _ = measure(d, line, f_q)
        d.text((cx - lw // 2, y + i * qlh), line, fill="black", font=f_q)

    # 8) Footer: ID bottom-left, Selbstbetrug bottom-right
    f_foot = font(F_DISPLAY, 20)
    foot_y = CONTENT_Y1 - 24
    d.text((CONTENT_X0, foot_y), row["id"], fill="black", font=f_foot)
    rt = "SELBSTBETRUG"
    rw, _ = measure(d, rt, f_foot)
    d.text((CONTENT_X1 - rw, foot_y), rt, fill="black", font=f_foot)

    img.save(out_path, "PNG", dpi=(DPI, DPI))


def render_back(out_path):
    img = Image.new("RGB", (W, H), "white")
    d = ImageDraw.Draw(img)
    pad = 80
    d.rectangle([pad, pad, W - pad, H - pad], outline="black", width=3)
    inner = 14
    d.rectangle(
        [pad + inner, pad + inner, W - pad - inner, H - pad - inner],
        outline="black",
        width=1,
    )
    f_top = font(F_DISPLAY, 38)
    f_mid = font(F_ITALIC, 34)
    cx = W // 2
    cy = H // 2
    text_top = "KLARHEITSKARTEN"
    tw, th = measure(d, text_top, f_top)
    d.text((cx - tw // 2, cy - th - 30), text_top, fill="black", font=f_top)
    text_mid = "Selbstbetrug"
    mw, mh = measure(d, text_mid, f_mid)
    d.text((cx - mw // 2, cy + 14), text_mid, fill="black", font=f_mid)
    img.save(out_path, "PNG", dpi=(DPI, DPI))


def render_rule_card(title, body_lines, footer, out_path):
    img = Image.new("RGB", (W, H), "white")
    d = ImageDraw.Draw(img)
    cx = W // 2

    f_head = font(F_DISPLAY, 28)
    f_title = font(F_DISPLAY, 50)
    f_body = font(F_SERIF, 26)
    f_foot = font(F_ITALIC, 24)

    y = CONTENT_Y0
    head = "KLARHEITSKARTEN I"
    hw, hh = measure(d, head, f_head)
    d.text((cx - hw // 2, y), head, fill="black", font=f_head)
    y += hh + 24

    tw, th = measure(d, title.upper(), f_title)
    d.text((cx - tw // 2, y), title.upper(), fill="black", font=f_title)
    y += th + 28

    d.line([(CONTENT_X0 + 60, y), (CONTENT_X1 - 60, y)], fill="black", width=2)
    y += 26

    for line in body_lines:
        wrapped = wrap(d, line, f_body, CONTENT_W)
        for w_line in wrapped:
            d.text((CONTENT_X0, y), w_line, fill="black", font=f_body)
            y += int(f_body.size * 1.35)
        y += 6

    if footer:
        y = CONTENT_Y1 - 120
        d.line([(CONTENT_X0 + 60, y), (CONTENT_X1 - 60, y)], fill="black", width=2)
        y += 18
        for w_line in wrap(d, footer, f_foot, CONTENT_W):
            lw, _ = measure(d, w_line, f_foot)
            d.text((cx - lw // 2, y), w_line, fill="black", font=f_foot)
            y += int(f_foot.size * 1.3)

    img.save(out_path, "PNG", dpi=(DPI, DPI))


def render_all():
    rows = load(CSV_PATH)
    for cid, row in rows.items():
        out = OUT_DIR / f"{cid}.png"
        render_card(row, out)
        print(f"  {cid}.png")
    back_dir = ROOT / "03_exports" / "backs"
    back_dir.mkdir(parents=True, exist_ok=True)
    render_back(back_dir / "card_back.png")
    print("  card_back.png")

    rules_dir = ROOT / "03_exports" / "rules"
    rules_dir.mkdir(parents=True, exist_ok=True)

    render_rule_card(
        "Trumpfquartett",
        [
            "1. Mischt alle Karten.",
            "2. Verteilt sie gleichmäßig.",
            "3. Alle halten ihren Stapel verdeckt.",
            "4. Startspieler deckt eine Karte auf und wählt einen Wert.",
            "5. Alle anderen decken ihre oberste Karte auf.",
            "6. Höchster Wert gewinnt alle aufgedeckten Karten.",
            "7. Bei Gleichstand: Stechen.",
            "8. Wer am Ende die meisten Karten hat, gewinnt.",
        ],
        "Gewonnen hat nicht, wer recht hat.",
        rules_dir / "R01_trumpfquartett.png",
    )
    render_rule_card(
        "Falltür",
        [
            "1. Eine Karte offen in die Mitte.",
            "2. Titel, Diagnose und Falltürfrage vorlesen.",
            "3. Jeder antwortet in einem Satz.",
            "4. Die Gruppe wählt die klarste Antwort.",
            "5. Diese Person erhält die Karte.",
        ],
        "Keine Lebensgeschichte. Ein Satz.",
        rules_dir / "R02_falltuer.png",
    )
    render_rule_card(
        "Solo-Diagnose",
        [
            "1. Ziehe drei Karten.",
            "2. Wähle die Karte, die am unangenehmsten trifft.",
            "3. Schreibe die Falltürfrage ab.",
            "4. Beantworte sie ohne Erklärung.",
            "5. Lege einen konkreten nächsten Schritt fest.",
        ],
        "Ausrede – Funktion – Kosten – Handlung.",
        rules_dir / "R03_solo.png",
    )
    render_rule_card(
        "Hinweis",
        [
            "Für Erwachsene. 18+.",
            "Selbstreflexion und Gesprächsanregung.",
            "Kein medizinisches, psychotherapeutisches",
            "oder suchttherapeutisches Produkt.",
            "",
            "Inverkehrbringer / EU-Kontakt:",
            "Ticro Goto",
            "[Strasse, PLZ Ort, Land]",
            "kontakt@kokos-und-zitrone.de",
            "",
            "SKU: KK-001-SELBSTBETRUG-DE",
        ],
        "Ein Kartenspiel ist ein Kartenspiel.",
        rules_dir / "R04_hinweis.png",
    )
    print("  rule cards")


if __name__ == "__main__":
    render_all()
