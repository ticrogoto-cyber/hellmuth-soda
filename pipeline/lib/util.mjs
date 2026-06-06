// Gemeinsame, abhängigkeitsfreie Helfer.
import { createHash } from 'node:crypto';

// Slug wie im Vokabular (Umlaute -> ASCII), für Dateinamen und URLs.
export const slug = (s) =>
  String(s || '')
    .toLowerCase()
    .replace(/[äöüß]/g, (c) => ({ ä: 'a', ö: 'o', ü: 'u', ß: 'ss' }[c]))
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 80);

// SHA-256 hex der Original-URL: stabiler Dedup-Schlüssel.
export const hashUrl = (url) =>
  createHash('sha256').update(String(url || '').trim()).digest('hex');

// YYYY-MM-DD in UTC.
export const isoDate = (d = new Date()) => d.toISOString().slice(0, 10);

// Whitespace normalisieren, HTML-Tags grob entfernen (für Lead/Body aus Feeds).
export const stripHtml = (s) =>
  String(s || '')
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();

// Auf n Zeichen kürzen, an Wortgrenze.
export const clip = (s, n) => {
  const t = String(s || '').trim();
  if (t.length <= n) return t;
  return t.slice(0, n).replace(/\s+\S*$/, '').trim() + '…';
};

// Kleiner Sleep-Helfer (für höfliche Intervalle zwischen Requests).
export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
