
📄 index.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Ledger — Budget Tracker</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700&family=JetBrains+Mono:wght@400;500&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js"></script>
  <link rel="stylesheet" href="style.css" />
</head>
<body data-theme="light">
  <div class="app-shell">

    <!-- Sidebar / Brand -->
    <aside class="sidebar">
      <div class="brand">
        <div class="brand-mark">
          <i class="fa-solid fa-feather"></i>
        </div>
        <div>
          <h1 class="brand-name">Ledger</h1>
          <p class="brand-tag">a quieter way to budget</p>
        </div>
      </div>

      <div class="sidebar-section">
        <label class="micro-label">Display currency</label>
        <select id="currencySelect" data-testid="currency-select" class="select">
          <option value="INR">₹  INR — Indian Rupee</option>
          <option value="USD">$  USD — US Dollar</option>
          <option value="EUR">€  EUR — Euro</option>
          <option value="GBP">£  GBP — Pound Sterling</option>
          <option value="JPY">¥  JPY — Japanese Yen</option>
          <option value="AUD">A$ AUD — Australian Dollar</option>
          <option value="CAD">C$ CAD — Canadian Dollar</option>
          <option value="SGD">S$ SGD — Singapore Dollar</option>
          <option value="AED">د.إ AED — UAE Dirham</option>
          <option value="CNY">¥  CNY — Chinese Yuan</option>
        </select>
      </div>

      <div class="sidebar-section theme-row">
        <label class="micro-label">Theme</label>
        <button id="themeToggle" data-testid="theme-toggle" class="theme-toggle" aria-label="Toggle theme">
          <span class="theme-track">
            <span class="theme-thumb">
              <i class="fa-solid fa-sun light-icon"></i>
              <i class="fa-solid fa-moon dark-icon"></i>
            </span>
          </span>
        </button>
      </div>

      <div class="sidebar-foot">
        <button id="clearAllBtn" data-testid="clear-all-btn" class="ghost-btn danger">
          <i class="fa-regular fa-trash-can"></i> Clear all data
        </button>
        <p class="footer-note">Your data lives in this browser only.</p>
      </div>
    </aside>

    <!-- Main -->
    <main class="main">

      <!-- Hero / Balance -->
      <section class="hero">
        <div class="hero-meta">
          <span class="dot"></span>
          <span class="hero-label">Current balance</span>
        </div>
        <h2 class="balance" data-testid="current-balance">
          <span class="balance-sign"></span><span class="balance-num">0.00</span>
        </h2>
        <div class="hero-stats">
          <div class="stat stat-income">
            <div class="stat-icon"><i class="fa-solid fa-arrow-trend-up"></i></div>
            <div>
              <p class="stat-label">Income</p>
              <p class="stat-value" data-testid="total-income">0.00</p>
            </div>
          </div>
          <div class="stat stat-expense">
            <div class="stat-icon"><i class="fa-solid fa-arrow-trend-down"></i></div>
            <div>
              <p class="stat-label">Expenses</p>
              <p class="stat-value" data-testid="total-expense">0.00</p>
            </div>
          </div>
          <div class="stat stat-count">
            <div class="stat-icon"><i class="fa-regular fa-file-lines"></i></div>
            <div>
              <p class="stat-label">Entries</p>
              <p class="stat-value" data-testid="total-count">0</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Form + Chart row -->
      <section class="grid-row">

        <!-- Add transaction -->
        <div class="card form-card">
          <header class="card-head">
            <h3>Add transaction</h3>
            <p>Log income or an expense in seconds.</p>
          </header>

          <form id="txForm" data-testid="transaction-form" class="form" autocomplete="off">
            <div class="type-switch">
              <input type="radio" id="typeIncome" name="type" value="income" data-testid="type-income">
              <label for="typeIncome" class="seg income"><i class="fa-solid fa-plus"></i> Income</label>

              <input type="radio" id="typeExpense" name="type" value="expense" checked data-testid="type-expense">
              <label for="typeExpense" class="seg expense"><i class="fa-solid fa-minus"></i> Expense</label>
            </div>

            <div class="field">
              <label for="desc">Description</label>
              <input type="text" id="desc" data-testid="desc-input" placeholder="e.g. Groceries at the market" required maxlength="60">
            </div>

            <div class="field-row">
              <div class="field">
                <label for="amount">Amount</label>
                <input type="number" id="amount" data-testid="amount-input" placeholder="0.00" step="0.01" min="0.01" required>
              </div>
              <div class="field">
                <label for="category">Category</label>
                <select id="category" data-testid="category-select" class="select">
                  <optgroup label="Expense">
                    <option value="Food">🍜 Food</option>
                    <option value="Rent">🏠 Rent</option>
                    <option value="Transport">🚌 Transport</option>
                    <option value="Utilities">💡 Utilities</option>
                    <option value="Shopping">🛍️ Shopping</option>
                    <option value="Health">⚕️ Health</option>
                    <option value="Entertainment">🎬 Entertainment</option>
                    <option value="Education">📚 Education</option>
                    <option value="Other Expense">📦 Other</option>
                  </optgroup>
                  <optgroup label="Income">
                    <option value="Salary">💼 Salary</option>
                    <option value="Freelance">💻 Freelance</option>
                    <option value="Investment">📈 Investment</option>
                    <option value="Gift">🎁 Gift</option>
                    <option value="Other Income">✨ Other Income</option>
                  </optgroup>
                </select>
              </div>
            </div>

            <div class="field">
              <label for="date">Date</label>
              <input type="date" id="date" data-testid="date-input" required>
            </div>

            <button type="submit" data-testid="submit-btn" class="primary-btn">
              <span>Add transaction</span>
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </form>
        </div>

        <!-- Chart -->
        <div class="card chart-card">
          <header class="card-head">
            <div>
              <h3>Monthly summary</h3>
              <p>Income vs expenses over time.</p>
            </div>
            <div class="chart-tabs">
              <button class="tab active" data-mode="bar" data-testid="chart-bar"><i class="fa-solid fa-chart-column"></i></button>
              <button class="tab" data-mode="line" data-testid="chart-line"><i class="fa-solid fa-chart-line"></i></button>
              <button class="tab" data-mode="doughnut" data-testid="chart-doughnut"><i class="fa-solid fa-chart-pie"></i></button>
            </div>
          </header>
          <div class="chart-wrap">
            <canvas id="summaryChart" data-testid="summary-chart"></canvas>
            <div id="chartEmpty" class="chart-empty hidden">
              <i class="fa-regular fa-chart-bar"></i>
              <p>Add a transaction to see your monthly trend.</p>
            </div>
          </div>
        </div>

      </section>

      <!-- History -->
      <section class="card history-card">
        <header class="card-head">
          <div>
            <h3>Transaction history</h3>
            <p>Most recent first. Tap the bin to remove.</p>
          </div>
          <div class="filter-bar">
            <div class="search">
              <i class="fa-solid fa-magnifying-glass"></i>
              <input id="searchInput" data-testid="search-input" type="text" placeholder="Search…">
            </div>
            <select id="filterSelect" data-testid="filter-select" class="select small">
              <option value="all">All</option>
              <option value="income">Income</option>
              <option value="expense">Expenses</option>
            </select>
          </div>
        </header>

        <ul id="txList" data-testid="tx-list" class="tx-list"></ul>

        <div id="emptyState" class="empty-state">
          <div class="empty-art">
            <i class="fa-regular fa-folder-open"></i>
          </div>
          <h4>No transactions yet</h4>
          <p>Add your first entry on the left to start tracking.</p>
        </div>
      </section>

    </main>
  </div>

  <!-- Toast -->
  <div id="toast" class="toast" role="status" aria-live="polite"></div>

  <script src="script.js"></script>
</body>
</html>
🎨 style.css
/* ==========================================================
   Ledger — Budget Tracker
   A quiet, editorial budgeting interface.
   ========================================================== */

:root {
  /* Light — warm paper */
  --bg: #f3efe6;
  --bg-grain: #ece6d8;
  --surface: #ffffff;
  --surface-2: #faf6ec;
  --ink: #1a1a1a;
  --ink-soft: #4b4a47;
  --ink-mute: #84827c;
  --line: #e2dccd;
  --line-strong: #c9c1ad;

  --accent: #2a5d4f;
  --accent-soft: #d8e6df;
  --income: #2a5d4f;
  --income-soft: #d8e6df;
  --expense: #b1432a;
  --expense-soft: #f3dccf;
  --warn: #b1432a;

  --shadow-sm: 0 1px 2px rgba(20, 18, 12, .04);
  --shadow-md: 0 12px 32px -16px rgba(40, 30, 10, .18);
  --radius: 14px;
  --radius-sm: 10px;

  --font-display: "Fraunces", "Times New Roman", serif;
  --font-body: "Manrope", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
}

[data-theme="dark"] {
  --bg: #15140f;
  --bg-grain: #1b1a14;
  --surface: #1f1d17;
  --surface-2: #25231c;
  --ink: #f3efe2;
  --ink-soft: #c9c4b3;
  --ink-mute: #8a8676;
  --line: #2e2c24;
  --line-strong: #3d3a30;

  --accent: #93c9b4;
  --accent-soft: #1f3a32;
  --income: #93c9b4;
  --income-soft: #1f3a32;
  --expense: #e69274;
  --expense-soft: #3a2218;
  --warn: #e69274;

  --shadow-md: 0 16px 36px -18px rgba(0, 0, 0, .55);
}

* { box-sizing: border-box; }

html, body {
  margin: 0;
  padding: 0;
  background: var(--bg);
  color: var(--ink);
  font-family: var(--font-body);
  font-size: 15px;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

body {
  background-image:
    radial-gradient(circle at 12% 8%, var(--bg-grain) 0, transparent 38%),
    radial-gradient(circle at 88% 92%, var(--bg-grain) 0, transparent 42%);
  min-height: 100vh;
}

::selection { background: var(--accent); color: var(--surface); }

/* Layout */
.app-shell {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 32px;
  max-width: 1320px;
  margin: 0 auto;
  padding: 36px 36px 80px;
  min-height: 100vh;
}
@media (max-width: 960px) {
  .app-shell { grid-template-columns: 1fr; padding: 20px; gap: 20px; }
}

/* Sidebar */
.sidebar {
  position: sticky; top: 36px; align-self: start;
  display: flex; flex-direction: column; gap: 28px;
  padding: 28px 24px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  box-shadow: var(--shadow-sm);
}
@media (max-width: 960px) { .sidebar { position: static; } }

.brand { display: flex; align-items: center; gap: 14px; }
.brand-mark {
  width: 44px; height: 44px;
  display: grid; place-items: center;
  background: var(--accent); color: var(--surface);
  border-radius: 12px; font-size: 18px;
  transform: rotate(-6deg);
  transition: transform .35s cubic-bezier(.34,1.56,.64,1);
}
.brand-mark:hover { transform: rotate(0deg) scale(1.05); }
.brand-name {
  font-family: var(--font-display); font-weight: 700;
  font-size: 28px; letter-spacing: -.02em;
  margin: 0; line-height: 1;
}
.brand-tag { margin: 4px 0 0; font-size: 12px; color: var(--ink-mute); font-style: italic; }

.sidebar-section { display: flex; flex-direction: column; gap: 8px; }
.theme-row { flex-direction: row; align-items: center; justify-content: space-between; }

.micro-label {
  font-size: 11px; text-transform: uppercase;
  letter-spacing: .14em; color: var(--ink-mute); font-weight: 600;
}

.select {
  width: 100%; appearance: none; -webkit-appearance: none;
  background: var(--surface-2);
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  color: var(--ink);
  padding: 11px 36px 11px 14px;
  font-family: var(--font-body); font-size: 14px; cursor: pointer;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2384827c' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'/></svg>");
  background-repeat: no-repeat; background-position: right 12px center; background-size: 14px;
  transition: border-color .2s, background-color .2s;
}
.select:hover, .select:focus { border-color: var(--line-strong); outline: none; }
.select.small { padding: 8px 32px 8px 12px; font-size: 13px; }

/* Theme toggle */
.theme-toggle { background: none; border: 0; padding: 0; cursor: pointer; }
.theme-track {
  width: 56px; height: 30px;
  background: var(--surface-2);
  border: 1px solid var(--line);
  border-radius: 999px; display: block; position: relative;
  transition: background .25s;
}
.theme-thumb {
  position: absolute; top: 2px; left: 2px;
  width: 24px; height: 24px;
  background: var(--accent); color: var(--surface);
  border-radius: 50%; display: grid; place-items: center;
  font-size: 11px;
  transition: transform .35s cubic-bezier(.34,1.56,.64,1), background .25s;
}
[data-theme="dark"] .theme-thumb { transform: translateX(26px); }
.light-icon { display: block; } .dark-icon { display: none; }
[data-theme="dark"] .light-icon { display: none; }
[data-theme="dark"] .dark-icon { display: block; }

.sidebar-foot { margin-top: auto; display: flex; flex-direction: column; gap: 8px; }
.ghost-btn {
  background: transparent; border: 1px dashed var(--line-strong);
  color: var(--ink-soft); padding: 10px 14px;
  border-radius: var(--radius-sm);
  font-family: var(--font-body); font-size: 13px; cursor: pointer;
  display: inline-flex; align-items: center; gap: 8px; justify-content: center;
  transition: color .2s, border-color .2s, background .2s;
}
.ghost-btn.danger:hover { color: var(--warn); border-color: var(--warn); background: var(--expense-soft); }
.footer-note { margin: 0; font-size: 11px; color: var(--ink-mute); text-align: center; }

/* Main */
.main { display: flex; flex-direction: column; gap: 28px; }

/* Hero */
.hero {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 38px 40px 32px;
  box-shadow: var(--shadow-md);
  position: relative; overflow: hidden;
}
.hero::after {
  content: ""; position: absolute;
  inset: auto -60px -100px auto;
  width: 280px; height: 280px;
  background: radial-gradient(circle, var(--accent-soft), transparent 65%);
  pointer-events: none; opacity: .7;
}
.hero-meta {
  display: inline-flex; align-items: center; gap: 8px;
  font-size: 12px; letter-spacing: .14em; text-transform: uppercase;
  color: var(--ink-mute); font-weight: 600;
}
.dot {
  width: 7px; height: 7px;
  background: var(--accent); border-radius: 50%;
  box-shadow: 0 0 0 4px var(--accent-soft);
  animation: pulse 2.4s ease-in-out infinite;
}
@keyframes pulse { 0%,100% {opacity:1;} 50% {opacity:.4;} }

.balance {
  font-family: var(--font-display); font-weight: 500;
  font-size: clamp(48px, 7vw, 84px);
  letter-spacing: -.03em; margin: 10px 0 28px;
  line-height: 1; color: var(--ink);
  display: flex; align-items: baseline; gap: 4px;
}
.balance.negative .balance-num { color: var(--expense); }
.balance-sign { font-size: .55em; opacity: .8; }

.hero-stats {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 16px; position: relative; z-index: 1;
}
@media (max-width: 600px) { .hero-stats { grid-template-columns: 1fr; } }

.stat {
  display: flex; align-items: center; gap: 14px;
  padding: 16px 18px;
  background: var(--surface-2);
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  transition: transform .25s ease, border-color .25s;
}
.stat:hover { transform: translateY(-2px); border-color: var(--line-strong); }
.stat-icon {
  width: 38px; height: 38px; border-radius: 10px;
  display: grid; place-items: center; font-size: 14px;
}
.stat-income .stat-icon { background: var(--income-soft); color: var(--income); }
.stat-expense .stat-icon { background: var(--expense-soft); color: var(--expense); }
.stat-count .stat-icon { background: var(--line); color: var(--ink-soft); }
.stat-label { margin: 0; font-size: 11px; letter-spacing: .12em; text-transform: uppercase; color: var(--ink-mute); font-weight: 600; }
.stat-value { margin: 2px 0 0; font-family: var(--font-mono); font-size: 18px; font-weight: 500; color: var(--ink); }

/* Grid row */
.grid-row { display: grid; grid-template-columns: minmax(0,1fr) minmax(0,1.15fr); gap: 28px; }
@media (max-width: 1080px) { .grid-row { grid-template-columns: 1fr; } }

.card {
  background: var(--surface); border: 1px solid var(--line);
  border-radius: var(--radius); padding: 28px;
  box-shadow: var(--shadow-sm);
}
.card-head { display: flex; justify-content: space-between; align-items: flex-start; gap: 16px; margin-bottom: 22px; }
.card-head h3 { font-family: var(--font-display); font-weight: 600; font-size: 22px; margin: 0 0 4px; letter-spacing: -.01em; }
.card-head p { margin: 0; color: var(--ink-mute); font-size: 13px; }

/* Form */
.form { display: flex; flex-direction: column; gap: 18px; }
.type-switch {
  display: grid; grid-template-columns: 1fr 1fr;
  background: var(--surface-2); border: 1px solid var(--line);
  padding: 4px; border-radius: 12px; position: relative;
}
.type-switch input { display: none; }
.seg {
  display: inline-flex; align-items: center; justify-content: center;
  gap: 8px; padding: 10px 14px; cursor: pointer;
  border-radius: 9px; font-weight: 600; font-size: 13px;
  color: var(--ink-mute);
  transition: all .25s cubic-bezier(.4,0,.2,1);
}
.seg i { font-size: 11px; }
input#typeIncome:checked + .seg.income { background: var(--income); color: var(--surface); box-shadow: 0 4px 12px -4px var(--income); }
input#typeExpense:checked + .seg.expense { background: var(--expense); color: var(--surface); box-shadow: 0 4px 12px -4px var(--expense); }

.field { display: flex; flex-direction: column; gap: 6px; }
.field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
@media (max-width: 520px) { .field-row { grid-template-columns: 1fr; } }
.field label { font-size: 11px; text-transform: uppercase; letter-spacing: .14em; color: var(--ink-mute); font-weight: 600; }
.field input[type="text"],
.field input[type="number"],
.field input[type="date"] {
  background: var(--surface-2); border: 1px solid var(--line);
  border-radius: var(--radius-sm); padding: 12px 14px;
  font-family: var(--font-body); font-size: 14px; color: var(--ink);
  transition: border-color .2s, background-color .2s;
}
.field input::placeholder { color: var(--ink-mute); }
.field input:focus { outline: none; border-color: var(--accent); background: var(--surface); }
.field input[type="date"] { color-scheme: light; }
[data-theme="dark"] .field input[type="date"] { color-scheme: dark; }

.primary-btn {
  margin-top: 6px; background: var(--ink); color: var(--bg);
  border: 0; border-radius: 999px; padding: 14px 22px;
  font-family: var(--font-body); font-size: 14px; font-weight: 600; cursor: pointer;
  display: inline-flex; align-items: center; justify-content: space-between; gap: 12px;
  transition: transform .25s, background .25s, color .25s;
}
.primary-btn i { transition: transform .25s; }
.primary-btn:hover { transform: translateY(-1px); background: var(--accent); color: var(--surface); }
.primary-btn:hover i { transform: translateX(4px); }

/* Chart */
.chart-card { display: flex; flex-direction: column; }
.chart-tabs { display: flex; gap: 4px; background: var(--surface-2); border: 1px solid var(--line); padding: 4px; border-radius: 10px; }
.tab { background: transparent; border: 0; padding: 6px 10px; border-radius: 7px; color: var(--ink-mute); cursor: pointer; font-size: 13px; transition: all .2s; }
.tab:hover { color: var(--ink); }
.tab.active { background: var(--surface); color: var(--ink); box-shadow: var(--shadow-sm); }

.chart-wrap { flex: 1; min-height: 280px; position: relative; }
.chart-wrap canvas { position: relative; z-index: 1; }
.chart-empty {
  position: absolute; inset: 0;
  display: grid; place-items: center;
  text-align: center; color: var(--ink-mute); font-size: 13px; gap: 8px;
}
.chart-empty i { font-size: 32px; opacity: .5; display: block; margin-bottom: 8px; }
.chart-empty p { margin: 0; }
.hidden { display: none !important; }

/* History */
.filter-bar { display: flex; align-items: center; gap: 10px; }
.search {
  display: flex; align-items: center; gap: 8px;
  background: var(--surface-2); border: 1px solid var(--line);
  border-radius: var(--radius-sm); padding: 8px 12px; color: var(--ink-mute);
}
.search input { background: transparent; border: 0; outline: 0; color: var(--ink); font-family: var(--font-body); font-size: 13px; width: 160px; }
.search:focus-within { border-color: var(--line-strong); }

.tx-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; }
.tx-item {
  display: grid; grid-template-columns: 44px 1fr auto auto;
  align-items: center; gap: 16px;
  padding: 18px 4px; border-bottom: 1px solid var(--line);
  animation: slideIn .35s cubic-bezier(.4,0,.2,1);
}
.tx-item:last-child { border-bottom: 0; }
@keyframes slideIn { from {opacity:0; transform: translateX(-6px);} to {opacity:1; transform: translateX(0);} }

.tx-badge {
  width: 44px; height: 44px; border-radius: 12px;
  display: grid; place-items: center; font-size: 18px;
  background: var(--surface-2); border: 1px solid var(--line);
}
.tx-badge.income { background: var(--income-soft); border-color: transparent; color: var(--income); }
.tx-badge.expense { background: var(--expense-soft); border-color: transparent; color: var(--expense); }

.tx-body { min-width: 0; }
.tx-desc { margin: 0; font-weight: 600; font-size: 15px; color: var(--ink); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.tx-meta { margin: 2px 0 0; font-size: 12px; color: var(--ink-mute); }
.tx-meta .sep { margin: 0 6px; opacity: .5; }

.tx-amount { font-family: var(--font-mono); font-weight: 500; font-size: 16px; white-space: nowrap; }
.tx-amount.income { color: var(--income); }
.tx-amount.expense { color: var(--expense); }

.tx-delete {
  background: transparent; border: 0;
  width: 36px; height: 36px; border-radius: 50%;
  color: var(--ink-mute); cursor: pointer;
  display: grid; place-items: center;
  transition: background .2s, color .2s, transform .2s;
}
.tx-delete:hover { background: var(--expense-soft); color: var(--expense); transform: rotate(8deg); }

/* Empty state */
.empty-state { text-align: center; padding: 40px 20px; color: var(--ink-mute); }
.empty-art {
  width: 60px; height: 60px; margin: 0 auto 14px;
  background: var(--surface-2); border: 1px dashed var(--line-strong);
  border-radius: 16px; display: grid; place-items: center;
  font-size: 22px; color: var(--ink-mute);
}
.empty-state h4 { font-family: var(--font-display); font-weight: 600; margin: 0 0 4px; color: var(--ink); font-size: 18px; }
.empty-state p { margin: 0; font-size: 13px; }

/* Toast */
.toast {
  position: fixed; bottom: 24px; left: 50%;
  transform: translateX(-50%) translateY(20px);
  background: var(--ink); color: var(--bg);
  padding: 12px 18px; border-radius: 999px;
  font-size: 13px; font-weight: 500;
  opacity: 0; pointer-events: none;
  transition: opacity .3s, transform .3s;
  box-shadow: var(--shadow-md);
  display: inline-flex; align-items: center; gap: 10px; z-index: 100;
}
.toast.show { opacity: 1; transform: translateX(-50%) translateY(0); }
.toast i { color: var(--accent); }

/* Responsive tweaks */
@media (max-width: 600px) {
  .hero { padding: 28px 24px 24px; }
  .card { padding: 22px 20px; }
  .card-head { flex-direction: column; align-items: flex-start; }
  .filter-bar { width: 100%; }
  .search input { width: 100%; }
  .search { flex: 1; }
  .tx-item { grid-template-columns: 40px 1fr auto; gap: 12px; padding: 14px 2px; }
  .tx-amount { grid-column: 2; grid-row: 2; font-size: 14px; }
  .tx-delete { grid-column: 3; grid-row: 1 / span 2; }
}
⚙️ script.js
/* ============================================================
   Ledger — Budget Tracker
   Vanilla JS · localStorage · Chart.js
   ============================================================ */

const STORAGE_KEY = "ledger.transactions.v1";
const PREF_KEY = "ledger.prefs.v1";

const CURRENCY_SYMBOLS = {
  INR: "₹", USD: "$", EUR: "€", GBP: "£", JPY: "¥",
  AUD: "A$", CAD: "C$", SGD: "S$", AED: "د.إ", CNY: "¥",
};

const CATEGORY_ICONS = {
  Food: "🍜", Rent: "🏠", Transport: "🚌", Utilities: "💡",
  Shopping: "🛍️", Health: "⚕️", Entertainment: "🎬",
  Education: "📚", "Other Expense": "📦",
  Salary: "💼", Freelance: "💻", Investment: "📈",
  Gift: "🎁", "Other Income": "✨",
};

let state = {
  transactions: [],
  prefs: { currency: "INR", theme: "light", chartMode: "bar", filter: "all", search: "" },
};

/* persistence */
function load() {
  try {
    const tx = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    const pf = JSON.parse(localStorage.getItem(PREF_KEY) || "null");
    if (Array.isArray(tx)) state.transactions = tx;
    if (pf && typeof pf === "object") state.prefs = { ...state.prefs, ...pf };
  } catch (e) { /* ignore */ }
}
function saveTx() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state.transactions)); }
function savePrefs() { localStorage.setItem(PREF_KEY, JSON.stringify(state.prefs)); }

/* helpers */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function fmtMoney(n) {
  const sym = CURRENCY_SYMBOLS[state.prefs.currency] || "";
  const opts = { minimumFractionDigits: 2, maximumFractionDigits: 2 };
  if (state.prefs.currency === "JPY") { opts.minimumFractionDigits = 0; opts.maximumFractionDigits = 0; }
  return sym + Number(n).toLocaleString(undefined, opts);
}
function fmtDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" });
}
function toast(msg, icon = "fa-circle-check") {
  const t = $("#toast");
  t.innerHTML = `<i class="fa-solid ${icon}"></i> ${msg}`;
  t.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => t.classList.remove("show"), 2200);
}
function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }
function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}

/* rendering */
function computeTotals() {
  let income = 0, expense = 0;
  state.transactions.forEach(t => {
    if (t.type === "income") income += t.amount;
    else expense += t.amount;
  });
  return { income, expense, balance: income - expense, count: state.transactions.length };
}

function renderTotals() {
  const { income, expense, balance, count } = computeTotals();
  const bEl = $("[data-testid='current-balance']");
  bEl.classList.toggle("negative", balance < 0);
  bEl.querySelector(".balance-sign").textContent =
    (balance < 0 ? "−" : "") + (CURRENCY_SYMBOLS[state.prefs.currency] || "");
  bEl.querySelector(".balance-num").textContent = Math.abs(balance).toLocaleString(
    undefined,
    state.prefs.currency === "JPY"
      ? { minimumFractionDigits: 0, maximumFractionDigits: 0 }
      : { minimumFractionDigits: 2, maximumFractionDigits: 2 }
  );
  $("[data-testid='total-income']").textContent = fmtMoney(income);
  $("[data-testid='total-expense']").textContent = fmtMoney(expense);
  $("[data-testid='total-count']").textContent = String(count);
}

function renderList() {
  const list = $("#txList");
  const empty = $("#emptyState");
  const q = state.prefs.search.trim().toLowerCase();
  const f = state.prefs.filter;

  const visible = state.transactions
    .filter(t => f === "all" ? true : t.type === f)
    .filter(t => !q || t.description.toLowerCase().includes(q) || t.category.toLowerCase().includes(q))
    .sort((a, b) => new Date(b.date) - new Date(a.date) || b.createdAt - a.createdAt);

  list.innerHTML = "";
  if (visible.length === 0) { empty.style.display = "block"; return; }
  empty.style.display = "none";

  const frag = document.createDocumentFragment();
  visible.forEach(t => {
    const li = document.createElement("li");
    li.className = "tx-item";
    const icon = CATEGORY_ICONS[t.category] || "📌";
    const sign = t.type === "income" ? "+" : "−";
    li.innerHTML = `
      <div class="tx-badge ${t.type}">${icon}</div>
      <div class="tx-body">
        <p class="tx-desc">${escapeHtml(t.description)}</p>
        <p class="tx-meta">
          <span>${escapeHtml(t.category)}</span><span class="sep">·</span><span>${fmtDate(t.date)}</span>
        </p>
      </div>
      <div class="tx-amount ${t.type}">${sign}${fmtMoney(t.amount)}</div>
      <button class="tx-delete" data-id="${t.id}" aria-label="Delete transaction">
        <i class="fa-regular fa-trash-can"></i>
      </button>
    `;
    frag.appendChild(li);
  });
  list.appendChild(frag);
}

/* chart */
let chart = null;

function getMonthlyData() {
  const buckets = {};
  state.transactions.forEach(t => {
    const d = new Date(t.date);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
    if (!buckets[key]) buckets[key] = { income: 0, expense: 0 };
    buckets[key][t.type] += t.amount;
  });
  const keys = Object.keys(buckets).sort();
  const labels = keys.map(k => {
    const [y, m] = k.split("-");
    return new Date(Number(y), Number(m) - 1, 1)
      .toLocaleDateString(undefined, { month: "short", year: "2-digit" });
  });
  return {
    labels,
    income: keys.map(k => buckets[k].income),
    expense: keys.map(k => buckets[k].expense),
  };
}

function getCategoryData() {
  const buckets = {};
  state.transactions.forEach(t => {
    if (t.type !== "expense") return;
    buckets[t.category] = (buckets[t.category] || 0) + t.amount;
  });
  return { labels: Object.keys(buckets), values: Object.values(buckets) };
}

function themeColors() {
  const styles = getComputedStyle(document.body);
  return {
    income: styles.getPropertyValue("--income").trim(),
    expense: styles.getPropertyValue("--expense").trim(),
    ink: styles.getPropertyValue("--ink-soft").trim(),
    line: styles.getPropertyValue("--line").trim(),
    surface: styles.getPropertyValue("--surface").trim(),
  };
}

function renderChart() {
  const canvas = $("#summaryChart");
  const emptyEl = $("#chartEmpty");
  if (chart) { chart.destroy(); chart = null; }

  if (state.transactions.length === 0) {
    emptyEl.classList.remove("hidden");
    canvas.style.display = "none";
    return;
  }
  emptyEl.classList.add("hidden");
  canvas.style.display = "block";

  const c = themeColors();
  const mode = state.prefs.chartMode;
  let config;

  if (mode === "doughnut") {
    const d = getCategoryData();
    const palette = ["#b1432a", "#2a5d4f", "#c79b3c", "#5b6d8f", "#8a4f7d", "#3c8a7a", "#d36a4d", "#6b5a3e", "#4a6b5a"];
    config = {
      type: "doughnut",
      data: {
        labels: d.labels.length ? d.labels : ["No expenses yet"],
        datasets: [{
          data: d.values.length ? d.values : [1],
          backgroundColor: d.labels.length ? palette.slice(0, d.labels.length) : [c.line],
          borderColor: c.surface,
          borderWidth: 2,
        }],
      },
      options: {
        responsive: true, maintainAspectRatio: false, cutout: "62%",
        plugins: {
          legend: { position: "bottom", labels: { color: c.ink, font: { family: "Manrope", size: 12 }, padding: 14 } },
          tooltip: { callbacks: { label: (ctx) => ` ${ctx.label}: ${fmtMoney(ctx.parsed)}` } },
        },
      },
    };
  } else {
    const d = getMonthlyData();
    const baseDataset = (label, data, color) => ({
      label, data, borderColor: color,
      backgroundColor: color + (mode === "line" ? "22" : "cc"),
      borderRadius: mode === "bar" ? 6 : 0,
      tension: 0.35, fill: mode === "line",
      pointRadius: mode === "line" ? 4 : 0,
      pointBackgroundColor: color, borderWidth: 2,
    });
    config = {
      type: mode,
      data: {
        labels: d.labels,
        datasets: [
          baseDataset("Income", d.income, c.income),
          baseDataset("Expenses", d.expense, c.expense),
        ],
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: {
          legend: { position: "top", align: "end",
            labels: { color: c.ink, boxWidth: 10, boxHeight: 10, usePointStyle: true,
                      pointStyle: "circle", font: { family: "Manrope", size: 12 } } },
          tooltip: { callbacks: { label: (ctx) => ` ${ctx.dataset.label}: ${fmtMoney(ctx.parsed.y)}` } },
        },
        scales: {
          x: { grid: { display: false }, ticks: { color: c.ink, font: { family: "Manrope" } } },
          y: { grid: { color: c.line }, ticks: { color: c.ink, font: { family: "Manrope" },
               callback: (v) => fmtMoney(v) } },
        },
      },
    };
  }

  chart = new Chart(canvas, config);
}

/* events */
function bind() {
  $("#txForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const type = document.querySelector("input[name='type']:checked").value;
    const description = $("#desc").value.trim();
    const amount = parseFloat($("#amount").value);
    const category = $("#category").value;
    const date = $("#date").value;
    if (!description || !amount || amount <= 0 || !date) {
      toast("Please fill all fields", "fa-circle-exclamation");
      return;
    }
    const tx = { id: uid(), type, description, amount, category, date, createdAt: Date.now() };
    state.transactions.push(tx);
    saveTx();
    renderAll();
    e.target.reset();
    document.getElementById("typeExpense").checked = true;
    $("#date").valueAsDate = new Date();
    toast(`${type === "income" ? "Income" : "Expense"} added`, "fa-circle-check");
  });

  $("#txList").addEventListener("click", (e) => {
    const btn = e.target.closest(".tx-delete");
    if (!btn) return;
    const id = btn.dataset.id;
    state.transactions = state.transactions.filter(t => t.id !== id);
    saveTx();
    renderAll();
    toast("Transaction removed", "fa-trash-can");
  });

  $("#clearAllBtn").addEventListener("click", () => {
    if (state.transactions.length === 0) return toast("Nothing to clear", "fa-circle-info");
    if (!confirm("Clear all transactions? This cannot be undone.")) return;
    state.transactions = [];
    saveTx();
    renderAll();
    toast("All transactions cleared", "fa-broom");
  });

  $("#currencySelect").addEventListener("change", (e) => {
    state.prefs.currency = e.target.value;
    savePrefs();
    renderAll();
  });

  $("#themeToggle").addEventListener("click", () => {
    state.prefs.theme = state.prefs.theme === "dark" ? "light" : "dark";
    document.body.dataset.theme = state.prefs.theme;
    savePrefs();
    renderChart();
  });

  $$(".chart-tabs .tab").forEach(tab => {
    tab.addEventListener("click", () => {
      $$(".chart-tabs .tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      state.prefs.chartMode = tab.dataset.mode;
      savePrefs();
      renderChart();
    });
  });

  $("#filterSelect").addEventListener("change", (e) => {
    state.prefs.filter = e.target.value;
    savePrefs();
    renderList();
  });
  $("#searchInput").addEventListener("input", (e) => {
    state.prefs.search = e.target.value;
    renderList();
  });
}

/* init */
function renderAll() {
  renderTotals();
  renderList();
  renderChart();
}

function init() {
  load();
  document.body.dataset.theme = state.prefs.theme;
  $("#currencySelect").value = state.prefs.currency;
  $("#filterSelect").value = state.prefs.filter;
  $("#searchInput").value = state.prefs.search;
  $$(".chart-tabs .tab").forEach(t => {
    t.classList.toggle("active", t.dataset.mode === state.prefs.chartMode);
  });
  $("#date").valueAsDate = new Date();
  bind();
  renderAll();
}

document.addEventListener("DOMContentLoaded", init);