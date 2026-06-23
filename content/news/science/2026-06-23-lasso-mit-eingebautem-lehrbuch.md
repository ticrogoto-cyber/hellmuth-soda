---
title: "LASSO mit eingebautem Lehrbuch"
date: "2026-06-23"
created: "2026-06-23T23:35:04.385Z"
slug: "lasso-mit-eingebautem-lehrbuch"
rubrik: "science"
source_url: "https://www.medrxiv.org/content/10.64898/2026.06.18.26355841v1?rss=1"
source_name: "medRxiv Psychiatry"
lead: "Ein Preprint aus Houston rüstet die statistische Variablenauswahl mit kuratiertem Vorwissen aus und sagt damit Suizidgedanken bei bipolaren Jugendlichen schärfer voraus als der Standardansatz."
doi: null
preprint: true
press_review: false
relevance: 7
---

Klassische Vorhersagemodelle in der Psychiatrie wählen ihre Prädiktoren rein datengetrieben und produzieren in kleinen Stichproben instabile, klinisch schwer lesbare Variablensets. Das noch nicht begutachtete Preprint auf medRxiv schlägt einen Umweg vor: Vierzig höherrangige Evidenzdokumente zu Suizidalität werden indexiert, ein offenes Sprachmodell vergibt nach festem Rubrum Strafgewichte für jede der zwanzig Kandidatenvariablen, und diese Gewichte fließen in ein gewichtetes LASSO. Getestet an 136 Jugendlichen aus dem Greater Houston Area Bipolar Registry, erreichte das evidenzgeführte Modell für Suizidideation eine AUROC von 0,768 bei ausbalancierter Sensitivität und Spezifität um 0,76, während die evidenzfreie Variante zurückblieb. Auffällig ist weniger die Zahl als die Bauweise, denn der LLM-Beitrag liegt nicht in der Vorhersage selbst, sondern davor, in der Gewichtung der Hypothese. Das verschiebt die Debatte um KI in der Klinik von der Black-Box-Prognose hin zur prüfbaren Vorab-Annahme.

Wer das Vorwissen ins Modell hineinschreibt, muss es auch verantworten. Die Strafe für jede Variable wird zur dokumentierten Entscheidung, nicht zum statistischen Zufall.
