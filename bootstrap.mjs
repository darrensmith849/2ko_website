<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta
      name="description"
      content="2KO Group — Accreditation (2KO Africa), Training & Advisory (Six Sigma South Africa™), and Systems Delivery (Impart Agency)."
    />
    <title>2KO Group — Accreditation • Delivery • Systems</title>

    <style>
      :root{
        --bg: #070A12;
        --panel: rgba(255,255,255,0.06);
        --panel2: rgba(255,255,255,0.08);
        --border: rgba(255,255,255,0.14);
        --text: rgba(255,255,255,0.92);
        --muted: rgba(255,255,255,0.70);
        --muted2: rgba(255,255,255,0.56);

        /* premium green gradient */
        --accent: #16A34A;
        --accent2: #22C55E;
        --good: #30D158;

        --shadow: 0 18px 50px rgba(0,0,0,0.45);
        --shadow2: 0 10px 30px rgba(0,0,0,0.35);

        --radius: 18px;
        --radius2: 24px;

        --max: 1120px;
      }

      *{ box-sizing: border-box; }
      html, body{ height:100%; }

      body{
        margin:0;
        font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji";
        color: var(--text);
        background:
          radial-gradient(1100px 700px at 15% 10%, rgba(22,163,74,0.16), transparent 62%),
          radial-gradient(900px 600px at 85% 18%, rgba(34,197,94,0.12), transparent 60%),
          radial-gradient(900px 600px at 60% 90%, rgba(48,209,88,0.10), transparent 62%),
          linear-gradient(180deg, #050713 0%, #070A12 55%, #060815 100%);
        overflow-x: hidden;
        position: relative;
      }

      a{ color: inherit; text-decoration: none; }

      .wrap{
        max-width: var(--max);
        margin: 0 auto;
        padding: 0 18px;
        position: relative;
        z-index: 1; /* keeps glows behind content */
      }

      .blur-orb{
        position:absolute; inset:auto;
        width: 560px; height: 560px; border-radius: 999px;
        filter: blur(58px);
        opacity: 0.18;
        pointer-events:none;
        z-index: 0;
      }
      .orb1{ background: rgba(22,163,74,0.60); left:-240px; top: 120px; }
      .orb2{ background: rgba(34,197,94,0.55); right:-260px; top: 180px; }
      .orb3{ background: rgba(48,209,88,0.45); left: 30%; bottom: -340px; }

      /* Header */
      .header{
        position: sticky;
        top: 0;
        z-index: 50;
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);
        background: rgba(7,10,18,0.55);
        border-bottom: 1px solid rgba(255,255,255,0.10);
      }
      .header-inner{
        display:flex; align-items:center; justify-content:space-between;
        padding: 14px 0;
        gap: 14px;
      }
      .brand{
        display:flex; align-items:center; gap: 12px;
        min-width: 230px;
      }
      .brand img{
        height: 34px; width:auto;
        object-fit: contain;
        filter: drop-shadow(0 8px 18px rgba(0,0,0,0.35));
      }
      .brand .wordmark{
        display:flex; flex-direction:column; line-height:1.1;
      }
      .brand .wordmark b{ font-size: 14px; letter-spacing: 0.3px; }
      .brand .wordmark span{ font-size: 12px; color: var(--muted2); }

      .nav{
        display:flex; align-items:center; gap: 18px;
      }
      .nav a{
        font-size: 13px;
        color: var(--muted);
        padding: 10px 10px;
        border-radius: 12px;
        transition: all 180ms ease;
      }
      .nav a:hover{ background: rgba(255,255,255,0.06); color: var(--text); }

      .btn{
        display:inline-flex; align-items:center; justify-content:center;
        gap: 10px;
        border-radius: 14px;
        padding: 12px 14px;
        font-weight: 650;
        font-size: 13px;
        border: 1px solid rgba(255,255,255,0.14);
        background: rgba(255,255,255,0.06);
        box-shadow: var(--shadow2);
        transition: transform 160ms ease, background 160ms ease, border 160ms ease, opacity 160ms ease;
        cursor:pointer;
      }
      .btn:hover{ transform: translateY(-1px); background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.18); }
      .btn.primary{
        background: linear-gradient(135deg, rgba(22,163,74,0.95), rgba(34,197,94,0.78));
        border-color: rgba(34,197,94,0.28);
      }
      .btn.primary:hover{ opacity: 0.96; }
      .btn.ghost{
        background: transparent;
      }

      .mobile-toggle{
        display:none;
        width: 44px; height: 44px;
        border-radius: 14px;
        border: 1px solid rgba(255,255,255,0.14);
        background: rgba(255,255,255,0.06);
        color: var(--text);
        cursor:pointer;
      }
      .mobile-menu{
        display:none;
        padding: 10px 0 16px;
        border-top: 1px solid rgba(255,255,255,0.10);
      }
      .mobile-menu a{
        display:block;
        padding: 12px 10px;
        margin: 6px 0;
        border-radius: 14px;
        background: rgba(255,255,255,0.04);
        color: var(--muted);
      }
      .mobile-menu a:hover{ background: rgba(255,255,255,0.06); color: var(--text); }

      /* Hero */
      .hero{
        position:relative;
        padding: 64px 0 18px;
        z-index: 1;
      }
      .kicker{
        display:inline-flex; align-items:center; gap:10px;
        padding: 8px 12px;
        border-radius: 999px;
        border: 1px solid rgba(255,255,255,0.12);
        background: rgba(255,255,255,0.04);
        color: var(--muted);
        font-size: 12px;
      }
      .kicker .dot{
        width: 9px; height: 9px; border-radius: 999px;
        background: linear-gradient(135deg, var(--accent), var(--accent2));
        box-shadow: 0 0 0 6px rgba(22,163,74,0.12);
      }
      h1{
        margin: 16px 0 0;
        font-size: 44px;
        letter-spacing: -0.9px;
        line-height: 1.05;
      }
      .subhead{
        margin: 14px 0 0;
        max-width: 760px;
        color: var(--muted);
        font-size: 16px;
        line-height: 1.7;
      }
      .hero-ctas{ display:flex; gap: 12px; flex-wrap: wrap; margin-top: 22px; }

      .hero-grid{
        display:grid;
        grid-template-columns: 1.2fr 0.8fr;
        gap: 18px;
        margin-top: 26px;
        align-items: stretch;
      }

      .panel{
        background: rgba(255,255,255,0.06);
        border: 1px solid rgba(255,255,255,0.10);
        border-radius: var(--radius2);
        box-shadow: var(--shadow);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        position: relative;
        z-index: 1;
      }
      .panel.pad{ padding: 18px; }
      .panel h3{ margin:0; font-size: 15px; letter-spacing: -0.1px; }
      .panel p{ margin: 8px 0 0; color: var(--muted); font-size: 13px; line-height: 1.7; }

      .mini-metric{
        display:grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
        margin-top: 14px;
      }
      .metric{
        border-radius: 16px;
        padding: 14px;
        border: 1px solid rgba(255,255,255,0.12);
        background: rgba(255,255,255,0.04);
      }
      .metric b{ font-size: 20px; letter-spacing: -0.3px; display:block; }
      .metric span{ color: var(--muted2); font-size: 12px; display:block; margin-top: 4px; }

      .right-stack{
        display:flex;
        flex-direction: column;
        gap: 18px;
      }

      .chips{
        display:flex; flex-wrap: wrap; gap: 8px;
        margin-top: 10px;
      }
      .chip{
        font-size: 12px;
        padding: 8px 10px;
        border-radius: 999px;
        border: 1px solid rgba(255,255,255,0.12);
        background: rgba(255,255,255,0.04);
        color: var(--muted);
      }

      /* Sections */
      section{ padding: 36px 0; position: relative; z-index: 1; }
      .section-title{
        display:flex; align-items:flex-end; justify-content:space-between;
        gap: 14px;
      }
      .section-title h2{
        margin:0;
        font-size: 24px;
        letter-spacing: -0.5px;
      }
      .section-title p{
        margin:0;
        color: var(--muted2);
        font-size: 13px;
        line-height: 1.6;
        max-width: 520px;
      }

      /* Cards */
      .cards{
        display:grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 14px;
        margin-top: 16px;
      }
      .card{
        border-radius: var(--radius2);
        padding: 18px;
        border: 1px solid rgba(255,255,255,0.12);
        background: rgba(255,255,255,0.06);
        box-shadow: var(--shadow2);
        transition: transform 160ms ease, border 160ms ease, background 160ms ease;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        position: relative;
        z-index: 1;
      }
      .card:hover{
        transform: translateY(-2px);
        border-color: rgba(255,255,255,0.18);
        background: rgba(255,255,255,0.07);
      }
      .card-top{
        display:flex; align-items:center; justify-content:space-between; gap: 12px;
      }
      .badge{
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.3px;
        padding: 8px 10px;
        border-radius: 999px;
        border: 1px solid rgba(255,255,255,0.14);
        background: rgba(255,255,255,0.04);
        color: var(--muted);
      }
      .card h3{ margin: 12px 0 0; font-size: 17px; letter-spacing: -0.3px; }
      .card p{ margin: 10px 0 0; color: var(--muted); font-size: 13px; line-height: 1.75; }
      .list{
        margin: 12px 0 0;
        padding-left: 18px;
        color: var(--muted);
        font-size: 13px;
        line-height: 1.8;
      }
      .card-actions{
        display:flex; gap: 10px; flex-wrap: wrap;
        margin-top: 14px;
      }
      .card-actions a{ flex: 1 1 auto; }

      /* Relationship diagram */
      .relationship{
        margin-top: 16px;
        display:grid;
        grid-template-columns: 1fr 1fr;
        gap: 14px;
      }
      .flow{
        padding: 18px;
        border-radius: var(--radius2);
        border: 1px solid rgba(255,255,255,0.12);
        background: rgba(255,255,255,0.06);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        position: relative;
        z-index: 1;
      }
      .flow h3{ margin:0; font-size: 15px; }
      .flow p{ margin: 8px 0 0; color: var(--muted); font-size: 13px; line-height: 1.7; }
      .steps{
        margin-top: 12px;
        display:grid;
        gap: 10px;
      }
      .step{
        display:flex; gap: 12px; align-items:flex-start;
        padding: 12px;
        border-radius: 16px;
        border: 1px solid rgba(255,255,255,0.12);
        background: rgba(255,255,255,0.04);
      }
      .step .n{
        width: 28px; height: 28px; border-radius: 10px;
        display:flex; align-items:center; justify-content:center;
        font-weight: 800;
        background: linear-gradient(135deg, rgba(22,163,74,0.90), rgba(34,197,94,0.62));
        border: 1px solid rgba(255,255,255,0.12);
      }
      .step b{ display:block; font-size: 13px; }
      .step span{ display:block; color: var(--muted2); font-size: 12px; margin-top: 4px; line-height: 1.55; }

      /* Proof logos (swap pills -> transparent logos) */
      .logos{
        margin-top: 14px;
        display:flex;
        flex-wrap: wrap;
        gap: 18px;
        align-items: center;
      }
      .client-logo{
        height: 34px;
        width: auto;
        display:block;
        opacity: 0.78;
        filter: grayscale(1) brightness(1.55) contrast(1.1);
        transition: opacity 160ms ease, transform 160ms ease;
      }
      .client-logo:hover{
        opacity: 1;
        transform: translateY(-1px);
      }

      /* CTA band */
      .cta{
        margin-top: 10px;
        padding: 18px;
        border-radius: var(--radius2);
        border: 1px solid rgba(255,255,255,0.12);
        background:
          radial-gradient(900px 320px at 10% 10%, rgba(22,163,74,0.16), transparent 58%),
          radial-gradient(900px 320px at 90% 30%, rgba(34,197,94,0.12), transparent 60%),
          rgba(255,255,255,0.05);
        box-shadow: var(--shadow);
        display:flex; align-items:center; justify-content:space-between; gap: 14px;
        flex-wrap: wrap;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        position: relative;
        z-index: 1;
      }
      .cta h3{ margin:0; font-size: 16px; }
      .cta p{ margin: 6px 0 0; color: var(--muted); font-size: 13px; line-height: 1.7; max-width: 640px; }

      /* Contact */
      .contact-grid{
        margin-top: 14px;
        display:grid;
        grid-template-columns: 1fr 1fr;
        gap: 14px;
      }
      .field{
        display:flex; flex-direction:column; gap: 8px;
        margin-bottom: 12px;
      }
      label{ font-size: 12px; color: var(--muted2); font-weight: 650; }
      input, select, textarea{
        border-radius: 14px;
        padding: 12px 12px;
        border: 1px solid rgba(255,255,255,0.14);
        background: rgba(255,255,255,0.04);
        color: var(--text);
        outline: none;
        font-size: 13px;
      }
      textarea{ min-height: 120px; resize: vertical; }
      input::placeholder, textarea::placeholder{ color: rgba(255,255,255,0.38); }

      .small{ font-size: 12px; color: var(--muted2); line-height: 1.6; }

      /* Footer */
      footer{
        padding: 26px 0 40px;
        border-top: 1px solid rgba(255,255,255,0.10);
        margin-top: 20px;
        position: relative;
        z-index: 1;
      }
      .footer-grid{
        display:grid;
        grid-template-columns: 1.2fr 0.8fr;
        gap: 18px;
        align-items:flex-start;
      }
      .footlinks{ display:flex; gap: 10px; flex-wrap: wrap; justify-content:flex-end; }
      .footlinks a{
        color: var(--muted2);
        font-size: 12px;
        padding: 8px 10px;
        border-radius: 999px;
        border: 1px solid rgba(255,255,255,0.12);
        background: rgba(255,255,255,0.03);
      }
      .footlinks a:hover{ color: var(--text); background: rgba(255,255,255,0.05); }

      /* Responsive */
      @media (max-width: 980px){
        .hero-grid{ grid-template-columns: 1fr; }
        .cards{ grid-template-columns: 1fr; }
        .relationship{ grid-template-columns: 1fr; }
        .contact-grid{ grid-template-columns: 1fr; }
        .nav{ display:none; }
        .mobile-toggle{ display:inline-flex; align-items:center; justify-content:center; }
        .brand{ min-width: 0; }
      }

      @media (max-width: 520px){
        h1{ font-size: 36px; }
        .subhead{ font-size: 15px; }
      }
    </style>
  </head>

  <body>
    <div class="blur-orb orb1"></div>
    <div class="blur-orb orb2"></div>
    <div class="blur-orb orb3"></div>

    <!-- Header -->
    <header class="header">
      <div class="wrap">
        <div class="header-inner">
          <a class="brand" href="#top" aria-label="2KO Group home">
            <img
              src="https://2ko.co.za/wp-content/uploads/2022/01/009-2KO-Logo-dragg2ed.png"
              alt="2KO"
              onerror="this.style.display='none'; document.getElementById('brandFallback').style.display='block';"
            />
            <div class="wordmark" id="brandFallback" style="display:none;">
              <b>2KO Group</b>
              <span>Accreditation • Delivery • Systems</span>
            </div>
          </a>

          <nav class="nav" aria-label="Primary">
            <a href="#model">Group model</a>
            <a href="#entities">Entities</a>
            <a href="#proof">Proof</a>
            <a href="#how">How it works</a>
            <a href="#contact">Contact</a>
          </nav>

          <div style="display:flex; gap:10px; align-items:center;">
            <button class="mobile-toggle" id="menuBtn" aria-label="Open menu">☰</button>
            <a class="btn primary" href="#contact">Talk to us →</a>
          </div>
        </div>

        <div class="mobile-menu" id="mobileMenu" aria-label="Mobile">
          <a href="#model">Group model</a>
          <a href="#entities">Entities</a>
          <a href="#proof">Proof</a>
          <a href="#how">How it works</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </header>

    <!-- Hero -->
    <main id="top" class="hero">
      <div class="wrap">
        <div class="kicker">
          <span class="dot" aria-hidden="true"></span>
          Accreditation • Delivery • Systems
        </div>

        <h1>
          One group.<br />
          Three specialised engines.
        </h1>

        <p class="subhead">
          2KO Africa sets the accreditation standard. Six Sigma South Africa™ delivers training and business advisory aligned to that standard.
          Impart Agency builds the systems and software that make operational improvements stick.
        </p>

        <div class="hero-ctas">
          <a class="btn primary" href="#entities">See the structure →</a>
          <a class="btn ghost" href="#proof">View credibility ↓</a>
        </div>

        <div class="hero-grid">
          <div class="panel pad">
            <h3>Clarity by design</h3>
            <p>
              Standards are separate from delivery, and both are strengthened by systems. That separation keeps the group credible, scalable and consistent.
            </p>

            <div class="mini-metric" aria-label="Key outcomes">
              <div class="metric">
                <b>1,000+</b>
                <span>Companies served</span>
              </div>
              <div class="metric">
                <b>Since 1998</b>
                <span>Continuous improvement track record</span>
              </div>
              <div class="metric">
                <b>Across Africa</b>
                <span>Multi-city delivery footprint</span>
              </div>
              <div class="metric">
                <b>Evidence-led</b>
                <span>Certification + real application</span>
              </div>
            </div>

            <div class="chips" aria-label="Focus tags">
              <span class="chip">Lean & Six Sigma</span>
              <span class="chip">Accreditation & RPL</span>
              <span class="chip">Training & Advisory</span>
              <span class="chip">Systems & Automation</span>
            </div>
          </div>

          <div class="right-stack">
            <div class="panel pad">
              <h3>Fast routing</h3>
              <p>Choose your starting point.</p>
              <div class="card-actions" style="margin-top:12px;">
                <a class="btn" href="#entity-2ko">Accreditation</a>
                <a class="btn" href="#entity-sssa">Training</a>
                <a class="btn" href="#entity-impart">Systems</a>
              </div>
            </div>

            <div class="panel pad">
              <h3>Execution-focused</h3>
              <p>Accreditation you can defend. Delivery you can measure. Systems you can run.</p>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Group Model -->
    <section id="model">
      <div class="wrap">
        <div class="section-title">
          <div>
            <h2>Group model</h2>
          </div>
          <p>Independent standards + specialist delivery + the systems layer that locks outcomes in.</p>
        </div>

        <div class="relationship">
          <div class="flow">
            <h3>How the ecosystem fits</h3>
            <p>Clear roles keep quality high and outcomes repeatable.</p>

            <div class="steps">
              <div class="step">
                <div class="n">1</div>
                <div>
                  <b>2KO Africa → Standards</b>
                  <span>Accreditation, recognition pathways, governance.</span>
                </div>
              </div>

              <div class="step">
                <div class="n">2</div>
                <div>
                  <b>Six Sigma South Africa™ → Delivery</b>
                  <span>Training + business advisory aligned to the standard.</span>
                </div>
              </div>

              <div class="step">
                <div class="n">3</div>
                <div>
                  <b>Impart Agency → Systems</b>
                  <span>Portals, dashboards, automation, software delivery.</span>
                </div>
              </div>
            </div>
          </div>

          <div class="flow">
            <h3>Typical outcomes</h3>
            <p>Outcomes-first improvement across people, process and systems.</p>

            <div class="steps">
              <div class="step">
                <div class="n">✓</div>
                <div>
                  <b>Credible capability</b>
                  <span>Certification linked to real application and evidence.</span>
                </div>
              </div>
              <div class="step">
                <div class="n">✓</div>
                <div>
                  <b>Improvement delivered</b>
                  <span>Training, coaching and advisory that drives measurable operational change.</span>
                </div>
              </div>
              <div class="step">
                <div class="n">✓</div>
                <div>
                  <b>Sustained performance</b>
                  <span>Systems that keep the work alive: tracking, workflow, reporting, adoption.</span>
                </div>
              </div>
            </div>

            <div class="cta" style="margin-top:14px;">
              <div>
                <h3>Route your enquiry</h3>
                <p>Select an area and we’ll route you to the right team immediately.</p>
              </div>
              <div style="display:flex; gap:10px; flex-wrap:wrap;">
                <a class="btn primary" href="#contact">Contact →</a>
                <a class="btn" href="#entities">Entities ↓</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Entities -->
    <section id="entities">
      <div class="wrap">
        <div class="section-title">
          <div>
            <h2>Entities (who does what)</h2>
          </div>
          <p>Clear responsibilities. One cohesive delivery model.</p>
        </div>

        <div class="cards">
          <article class="card" id="entity-2ko">
            <div class="card-top">
              <span class="badge">Accreditation body</span>
              <span class="badge" style="border-color: rgba(22,163,74,0.35);">2KO Africa</span>
            </div>
            <h3>2KO Africa — standards, accreditation & recognition</h3>
            <p>
              The governance layer that defines the benchmark for Lean & Six Sigma accreditation.
            </p>
            <ul class="list">
              <li>Accreditation & recognition pathways (including RPL)</li>
              <li>Evidence-led certification approach</li>
              <li>Quality oversight and standard setting</li>
            </ul>
            <div class="card-actions">
              <a class="btn primary" href="#contact">Accreditation enquiry →</a>
              <a class="btn" href="#how">How it works ↓</a>
            </div>
          </article>

          <article class="card" id="entity-sssa">
            <div class="card-top">
              <span class="badge">Delivery partner</span>
              <span class="badge" style="border-color: rgba(34,197,94,0.28);">Six Sigma South Africa™</span>
            </div>
            <h3>Six Sigma South Africa™ — training & advisory delivery</h3>
            <p>
              Training pathways, coaching and business advisory delivered in alignment with 2KO Africa’s standard.
            </p>
            <ul class="list">
              <li>Belt pathways (White → Black)</li>
              <li>Enterprise enablement & coaching</li>
              <li>Continuous improvement advisory</li>
            </ul>
            <div class="card-actions">
              <a class="btn primary" href="#contact">Training / advisory enquiry →</a>
              <a class="btn" href="#proof">Credibility ↓</a>
            </div>
          </article>

          <article class="card" id="entity-impart">
            <div class="card-top">
              <span class="badge">Subsidiary</span>
              <span class="badge" style="border-color: rgba(48,209,88,0.28);">Impart Agency</span>
            </div>
            <h3>Impart Agency — systems, software & automation</h3>
            <p>
              The systems layer that embeds improvement into day-to-day work.
            </p>
            <ul class="list">
              <li>Internal tools, portals and dashboards</li>
              <li>Automation + reporting</li>
              <li>Design + implementation support</li>
            </ul>
            <div class="card-actions">
              <a class="btn primary" href="#contact">Systems / software enquiry →</a>
              <a class="btn" href="#how">Delivery model ↓</a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Proof -->
    <section id="proof">
      <div class="wrap">
        <div class="section-title">
          <div>
            <h2>Proof</h2>
          </div>
          <p>Selected organisations supported across the group ecosystem.</p>
        </div>

        <div class="panel pad" style="margin-top:16px;">
          <h3>Selected clients</h3>

          <div class="logos" aria-label="Selected clients">
            <!-- Replace src values with your transparent logo files (recommended: SVG/PNG with alpha). -->
            <img class="client-logo" src="assets/logos/standard-bank.png" alt="Standard Bank" onerror="this.style.display='none'" />
            <img class="client-logo" src="assets/logos/sappi.png" alt="Sappi" onerror="this.style.display='none'" />
            <img class="client-logo" src="assets/logos/dhl.png" alt="DHL" onerror="this.style.display='none'" />
            <img class="client-logo" src="assets/logos/toyota.png" alt="Toyota" onerror="this.style.display='none'" />
            <img class="client-logo" src="assets/logos/sars.png" alt="SARS" onerror="this.style.display='none'" />
            <img class="client-logo" src="assets/logos/transnet.png" alt="Transnet" onerror="this.style.display='none'" />
            <img class="client-logo" src="assets/logos/chevron.png" alt="Chevron" onerror="this.style.display='none'" />
            <img class="client-logo" src="assets/logos/nedbank.png" alt="Nedbank" onerror="this.style.display='none'" />
            <img class="client-logo" src="assets/logos/denel.png" alt="Denel" onerror="this.style.display='none'" />
            <img class="client-logo" src="assets/logos/john-deere.png" alt="John Deere" onerror="this.style.display='none'" />
            <img class="client-logo" src="assets/logos/anglo-american.png" alt="Anglo American" onerror="this.style.display='none'" />
          </div>

          <div class="mini-metric" style="margin-top:16px;">
            <div class="metric">
              <b>2,500+</b>
              <span>Case study count</span>
            </div>
            <div class="metric">
              <b>30,000</b>
              <span>Total delegates trained</span>
            </div>
            <div class="metric">
              <b>20+</b>
              <span>Certified practitioners</span>
            </div>
            <div class="metric">
              <b>9.6 / 10</b>
              <span>Average satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How it works -->
    <section id="how">
      <div class="wrap">
        <div class="section-title">
          <div>
            <h2>How engagement works</h2>
          </div>
          <p>Diagnose → route → deliver → embed.</p>
        </div>

        <div class="relationship" style="margin-top:16px;">
          <div class="flow">
            <h3>Engagement flow</h3>
            <p>A clean, repeatable approach.</p>

            <div class="steps">
              <div class="step">
                <div class="n">1</div>
                <div>
                  <b>Diagnose</b>
                  <span>Clarify the objective: accreditation, delivery, or systems.</span>
                </div>
              </div>
              <div class="step">
                <div class="n">2</div>
                <div>
                  <b>Route</b>
                  <span>2KO Africa for standards. Six Sigma South Africa for delivery. Impart for systems.</span>
                </div>
              </div>
              <div class="step">
                <div class="n">3</div>
                <div>
                  <b>Deliver</b>
                  <span>Aligned delivery with measurable outcomes.</span>
                </div>
              </div>
              <div class="step">
                <div class="n">4</div>
                <div>
                  <b>Embed</b>
                  <span>Systems and reporting so results persist and scale.</span>
                </div>
              </div>
            </div>
          </div>

          <div class="flow">
            <h3>When to contact which entity</h3>
            <p>Route to the right team.</p>

            <div class="steps">
              <div class="step">
                <div class="n">🎓</div>
                <div>
                  <b>2KO Africa</b>
                  <span>Accreditation, recognition, standards, certification governance.</span>
                </div>
              </div>
              <div class="step">
                <div class="n">🏅</div>
                <div>
                  <b>Six Sigma South Africa™</b>
                  <span>Training, coaching, advisory, deployment support, upskilling pathways.</span>
                </div>
              </div>
              <div class="step">
                <div class="n">⚙️</div>
                <div>
                  <b>Impart Agency</b>
                  <span>Portals, automation, dashboards, tooling, software delivery.</span>
                </div>
              </div>
            </div>

            <div class="cta" style="margin-top:14px;">
              <div>
                <h3>Ready?</h3>
                <p>Send your enquiry and select the area.</p>
              </div>
              <div style="display:flex; gap:10px; flex-wrap:wrap;">
                <a class="btn primary" href="#contact">Contact →</a>
                <a class="btn" href="#top">Top ↑</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact">
      <div class="wrap">
        <div class="section-title">
          <div>
            <h2>Contact</h2>
          </div>
          <p>Send an enquiry and we’ll route it correctly.</p>
        </div>

        <div class="contact-grid">
          <div class="panel pad">
            <h3>Send an enquiry</h3>

            <form id="contactForm">
              <div class="field">
                <label for="name">Name</label>
                <input id="name" name="name" required />
              </div>

              <div class="field">
                <label for="email">Email</label>
                <input id="email" name="email" type="email" required />
              </div>

              <div class="field">
                <label for="type">Enquiry type</label>
                <select id="type" name="type" required>
                  <option value="Accreditation (2KO Africa)">Accreditation (2KO Africa)</option>
                  <option value="Training / Advisory (Six Sigma South Africa™)">Training / Advisory (Six Sigma South Africa™)</option>
                  <option value="Systems / Software (Impart Agency)">Systems / Software (Impart Agency)</option>
                  <option value="Partnership / Collaboration">Partnership / Collaboration</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div class="field">
                <label for="message">Message</label>
                <textarea id="message" name="message" required></textarea>
              </div>

              <button class="btn primary" type="submit">Send enquiry →</button>
            </form>
          </div>

          <div class="panel pad">
            <h3>Entity quick links</h3>

            <div style="display:flex; gap:12px; align-items:center; margin-top:12px;">
              <div style="width:44px; height:44px; border-radius:16px; border:1px solid rgba(255,255,255,0.14); background:rgba(255,255,255,0.04); display:flex; align-items:center; justify-content:center;">🎓</div>
              <div>
                <b>2KO Africa</b><br />
                <span class="small">Accreditation, standards, recognition pathways.</span>
              </div>
            </div>

            <div style="display:flex; gap:12px; align-items:center; margin-top:12px;">
              <div style="width:44px; height:44px; border-radius:16px; border:1px solid rgba(255,255,255,0.14); background:rgba(255,255,255,0.04); display:flex; align-items:center; justify-content:center;">🏅</div>
              <div>
                <b>Six Sigma South Africa™</b><br />
                <span class="small">Training pathways, coaching, advisory delivery.</span>
              </div>
            </div>

            <div style="display:flex; gap:12px; align-items:center; margin-top:12px;">
              <div style="width:44px; height:44px; border-radius:16px; border:1px solid rgba(255,255,255,0.14); background:rgba(255,255,255,0.04); display:flex; align-items:center; justify-content:center;">⚙️</div>
              <div>
                <b>Impart Agency</b><br />
                <span class="small">Systems, dashboards, portals, automation.</span>
              </div>
            </div>

            <div class="panel pad" style="margin-top:16px; background: rgba(255,255,255,0.04);">
              <h3 style="display:flex; align-items:center; justify-content:space-between; gap:12px;">
                Impart
                <img
                  src="https://impartagency.co.za/wp-content/uploads/2025/08/midnight-logo-transparent-scaled.png"
                  alt="Impart Agency"
                  style="height:40px; width:auto; border-radius:12px; border:1px solid rgba(255,255,255,0.08); background: rgba(0,0,0,0.15); padding:6px;"
                  onerror="this.style.display='none'"
                />
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer>
      <div class="wrap">
        <div class="footer-grid">
          <div>
            <div style="display:flex; align-items:center; gap:10px;">
              <b>2KO Group</b>
              <span class="chip">Accreditation • Delivery • Systems</span>
            </div>
            <p class="small" style="margin-top:10px;">
              2KO Group — standards, delivery, and systems working together.
            </p>
          </div>

          <div class="footlinks" aria-label="Footer links">
            <a href="#model">Group model</a>
            <a href="#entities">Entities</a>
            <a href="#proof">Proof</a>
            <a href="#contact">Contact</a>
            <a href="#top">Top ↑</a>
          </div>
        </div>
      </div>
    </footer>

    <script>
      // Mobile menu
      const menuBtn = document.getElementById("menuBtn");
      const mobileMenu = document.getElementById("mobileMenu");
      menuBtn?.addEventListener("click", () => {
        const open = mobileMenu.style.display === "block";
        mobileMenu.style.display = open ? "none" : "block";
        menuBtn.textContent = open ? "☰" : "✕";
      });

      // Smooth scroll for in-page anchors
      document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener("click", (e) => {
          const href = a.getAttribute("href");
          if (!href || href === "#") return;
          const el = document.querySelector(href);
          if (!el) return;

          e.preventDefault();
          mobileMenu.style.display = "none";
          if (menuBtn) menuBtn.textContent = "☰";
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      });

      // Mailto form submit
      const form = document.getElementById("contactForm");
      form?.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const type = document.getElementById("type").value;
        const message = document.getElementById("message").value.trim();

        const subject = encodeURIComponent(`[2KO Group Enquiry] ${type}`);
        const body = encodeURIComponent(
          `Enquiry type: ${type}\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`
        );

        const to = "info@2ko.co.za";
        window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
      });
    </script>
  </body>
</html>
