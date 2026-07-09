# RAKHIR 25/26 — React Version

Konversi dari static HTML/CSS ke React (Vite + react-router-dom).

## Menjalankan lokal
```
npm install
npm run dev
```
Buka http://localhost:5173

## Build untuk production (mis. deploy ke Vercel)
```
npm run build
```
Hasil ada di folder `dist/`.

## Struktur
- `src/slides/*.jsx` — satu file per slide
- `src/components/Layout.jsx` — "chrome" bersama tiap slide (bracket, radar, telemetry, dll) + logic scale layar (cover/contain otomatis)
- `src/components/ProkerModalGrid.jsx` — kartu + modal detail (dipakai di Bonding/Orbul/PPS)
- `src/components/TeamCard.jsx` — kartu foto tim (dipakai di Team KWK/Fungsio/Intern)
- `src/data/*.js` — data konten (nama, tanggal, dsb) — edit di sini kalau mau ubah isi tanpa sentuh JSX
- `src/hooks/useStageFit.js` — hook scale layar (cover kalau rasio dekat 16:9, contain kalau jauh)

## Routing
Pakai HashRouter (URL pakai `#/nama-slide`) supaya gampang di-deploy ke static hosting (Vercel/Netlify) tanpa konfigurasi rewrite server.

Urutan: `/` → `/team-kwk` → `/team-fungsio` → `/team-intern` → `/who-we-are` → `/proker` → `/bonding` → `/orbul` → `/pps` → `/closing`

## Catatan
- 2 file tanda tangan di slide Closing tidak ada di project asli: `ttd-kenenza.png` dan `ttd-stefani.png`. Tinggal taruh di `public/assets/ttd/` dengan nama yang sama.
- Font Chakra Petch & Space Mono sudah di-hosting lokal di `public/fonts/` (tidak bergantung internet).
