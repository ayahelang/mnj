# PT Mitra Nayla Jaya — Website Modern (mnj.my.id)

Website logistics + mining supplier yang modern, fully responsive, dengan fitur tracking cargo, order form, admin panel & driver app.

## Fitur Utama
- Desain kekinian (navy + gold) inspired Maersk / Flexport / DHL + mining companies
- Fully responsive (desktop / tablet / mobile)
- Tracking page dengan peta Leaflet (OpenStreetMap)
- Form order → simpan ke localStorage (demo) / siap hubungkan Supabase
- Floating WhatsApp Teddy Mulyana (0851588222803)
- Admin panel (dashboard shipment, drivers, generate QR)
- Driver app (login Google, QR, confirm pickup + GPS check)
- Favicon custom mountain logo

## Struktur
```
mnj-new/
├── index.html          # Homepage
├── track.html          # Lacak kiriman + map
├── admin/index.html    # Admin panel
├── driver/index.html   # Driver interface
├── css/style.css
├── js/main.js
├── img/                # Logo, produk, favicon
└── README.md
```

## Deploy ke GitHub Pages
1. Buat repo baru di GitHub (misal `mnj-website`)
2. Upload seluruh isi folder `mnj-new`
3. Settings → Pages → Source: main branch / root
4. Custom domain: `mnj.my.id` (tambah CNAME file berisi `mnj.my.id`)
5. Di DNS domain, arahkan A/CNAME ke GitHub Pages

## Setup Backend (Supabase — Gratis)
Agar tracking, Google login, GPS matching, real-time jalan penuh:

1. Buat project di [supabase.com](https://supabase.com)
2. Enable Auth → Google provider
3. Tambah email `admin@silverhawk.web.id` sebagai admin (via table `profiles` atau RLS)
4. Buat tabel:
   - `shipments` (id, tracking_id, product, driver_id, status, origin_lat, origin_lng, dest_..., current_lat, current_lng, timeline jsonb, ...)
   - `drivers` (id, user_id, name, email, qr_code, status)
   - `orders` (id, nama, wa, email, perusahaan, produk, budget, lokasi, created_at)
5. Realtime enable pada `shipments`
6. Ganti di frontend: inisialisasi Supabase client dengan URL + anon key
7. Di driver page: `navigator.geolocation` → update `current_lat/lng` + cek jarak ke origin (Haversine)

## Brand Colors
- Navy: `#0A2540`
- Gold: `#D4AF37`
- Off-white: `#F8FAFC`

## Kontak Marketing
Teddy Mulyana — WA 0851588222803

© PT Mitra Nayla Jaya

## SEO Files Included
- `robots.txt` — Allow all, sitemap pointer, disallow /admin & /driver
- `sitemap.xml` — Main pages with priority & changefreq
- Open Graph + Twitter Card meta tags
- Canonical URLs
- JSON-LD Structured Data (Organization)
- Proper lang="id", geo meta, robots meta
