# hellmuth-counters — Aufruf-/Like-Zähler

Cloudflare Worker + KV als minimaler Zähldienst für das News-Modul. Kein Login,
keine Cookies, keine personenbezogenen Daten — nur Integer pro Artikel.

## Daten dieser Installation

- Worker-URL: `https://hellmuth-counters.ticro-goto.workers.dev`
- KV-Namespace-ID: `87e4647195c84fb3917f673758959d42`
- KV-Binding-Name: `HELLMUTH_COUNTERS`
- Erlaubter Origin (CORS): `https://hellmuth-soda.de`

## Deploy (Dashboard, Copy-Paste)

1. Cloudflare-Dashboard → **Workers & Pages** → `hellmuth-counters` → **Quick Edit**.
2. Inhalt von [`worker.js`](./worker.js) vollständig einfügen → **Deploy**.

## KV-Binding setzen (zwingend)

Ohne Binding antwortet der Worker mit HTTP 500.

1. `hellmuth-counters` → **Settings** → **Bindings** → **Add** → **KV Namespace**.
2. **Variable name:** `HELLMUTH_COUNTERS`
3. **KV namespace:** den Namespace mit ID `87e4647195c84fb3917f673758959d42` auswählen.
4. **Save** und neu deployen, falls verlangt.

## Optionale Custom Route (statt *.workers.dev)

`hellmuth-soda.de` liegt bereits auf Cloudflare, daher geht eine saubere
First-Party-Route (robuster gegen Adblocker):

1. `hellmuth-counters` → **Settings** → **Domains & Routes** → **Add** → **Route**.
2. **Zone:** `hellmuth-soda.de`
3. **Route:** `hellmuth-soda.de/api/*`
4. Speichern.
5. Im Frontend `news/counters.js` die Konstante umstellen:
   `const WORKER_BASE = '/api';` (Zeile ist dort markiert).

Der Worker akzeptiert Pfade mit und ohne `/api`-Präfix, also ist am Worker
selbst nichts zu ändern.

## Test

```
curl -X POST https://hellmuth-counters.ticro-goto.workers.dev/view \
  -H 'Content-Type: application/json' -d '{"id":"science/test"}'
# -> {"id":"science/test","views":1}

curl 'https://hellmuth-counters.ticro-goto.workers.dev/counts?ids=science/test'
# -> {"views":{"science/test":1},"likes":{"science/test":0}}
```

## API

| Methode | Pfad | Body | Antwort |
|---|---|---|---|
| GET | `/counts?ids=a,b,c` | – | `{ views:{id:n}, likes:{id:n} }` |
| POST | `/view` | `{"id":"rubrik/slug"}` | `{ id, views:n }` |
| POST | `/like` | `{"id":"rubrik/slug"}` | `{ id, likes:n }` |

IDs haben das Format `rubrik/slug` (z. B. `hellmuth/ginseng-als-alltagsware`).
