:root{
  --bg:#0b1020; --card:#0c1327; --text:#e5e7eb; --muted:#9ca3af;
  --line:#243041; --brand:#7c3aed; --brand2:#a78bfa;
}
*{box-sizing:border-box}
body{margin:0;font-family:system-ui,-apple-system,Inter,Roboto,sans-serif;background:var(--bg);color:var(--text)}
.container{max-width:1100px;margin-inline:auto;padding:20px}

/* Header */
.site-header{position:sticky;top:0;background:rgba(11,16,32,.7);backdrop-filter:saturate(140%) blur(10px);border-bottom:1px solid var(--line);z-index:10}
.site-header .container{display:flex;align-items:center;justify-content:space-between}
.brand{font-weight:700;letter-spacing:.3px}
.brand span{color:var(--brand)}
nav a{color:var(--text);text-decoration:none;margin-left:14px;border:1px solid transparent;padding:8px 10px;border-radius:10px}
nav a:hover{border-color:var(--line)}

/* Hero */
.hero{padding:40px 0}
.hero-grid{display:grid;grid-template-columns:1fr;gap:20px;align-items:center}
.avatar{width:120px;height:120px;border-radius:50%;border:2px solid var(--line);object-fit:cover}
h1{margin:0 0 6px;font-size:clamp(28px,4vw,40px)}
.subtitle{margin:0 0 8px;color:var(--muted);font-weight:600}
.lede{margin:0 0 14px;color:var(--muted)}
.actions{display:flex;gap:10px}
.btn{display:inline-block;padding:10px 14px;border:1px solid var(--line);border-radius:12px;color:var(--text);text-decoration:none;background:#121a33}
.btn.primary{background:linear-gradient(135deg,var(--brand),var(--brand2));border:none}

/* Sections */
.section{padding:30px 0}
.section.alt{background:#0d142a;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
h2{margin:0 0 14px}
.bullets{margin:8px 0 0;padding-left:18px;color:var(--muted)}
.bullets li{margin:6px 0}

/* Chips */
.chips{display:flex;gap:8px;flex-wrap:wrap}
.chips span{background:#162037;border:1px solid var(--line);padding:6px 10px;border-radius:999px;font-size:13px}

/* Cards (Projects) */
.cards{display:grid;grid-template-columns:1fr;gap:14px}
.card{border:1px solid var(--line);background:var(--card);border-radius:16px;padding:16px;display:grid;gap:8px}
.card h3{margin:0}
.card p{margin:0;color:var(--muted)}
.stack{display:flex;gap:8px;flex-wrap:wrap;margin:0;padding:0;list-style:none}
.stack li{font-size:12px;background:#162037;border:1px solid var(--line);border-radius:999px;padding:4px 8px}
.btn.small{padding:8px 12px}

/* Contact */
.contact{list-style:none;margin:0;padding:0}
.contact li{margin:6px 0}
.contact a{color:#cbd5ff}

/* Footer */
.site-footer{border-top:1px solid var(--line);padding:16px 0;margin-top:10px;color:var(--muted);font-size:14px}

/* Layout on wider screens */
@media (min-width:760px){
  .hero-grid{grid-template-columns:.9fr 1.1fr}
  .cards{grid-template-columns:repeat(3,1fr)}
}
