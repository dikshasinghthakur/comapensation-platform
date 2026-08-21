const salaryData = [
  { company: 'Google', level: 'L4', role: 'Software Engineer', location: 'Seattle, WA', base: 220000, bonus: 18000, stock: 170000, year: 2024 },
  { company: 'Meta', level: 'L4', role: 'Software Engineer', location: 'New York, NY', base: 240000, bonus: 22000, stock: 210000, year: 2024 },
  { company: 'Microsoft', level: 'L3', role: 'Software Engineer', location: 'Seattle, WA', base: 195000, bonus: 12000, stock: 135000, year: 2024 },
  { company: 'Amazon', level: 'L5', role: 'Software Engineer', location: 'Seattle, WA', base: 260000, bonus: 34000, stock: 230000, year: 2024 },
  { company: 'Stripe', level: 'L4', role: 'Product Manager', location: 'San Francisco, CA', base: 260000, bonus: 20000, stock: 175000, year: 2024 },
  { company: 'Airbnb', level: 'L3', role: 'Product Manager', location: 'Remote - US', base: 210000, bonus: 15000, stock: 90000, year: 2024 },
  { company: 'Uber', level: 'L5', role: 'Data Scientist', location: 'New York, NY', base: 225000, bonus: 26000, stock: 120000, year: 2024 },
  { company: 'Netflix', level: 'Staff', role: 'Software Engineer', location: 'Los Angeles, CA', base: 350000, bonus: 28000, stock: 400000, year: 2024 },
  { company: 'Salesforce', level: 'L3', role: 'Software Engineer', location: 'Austin, TX', base: 185000, bonus: 10000, stock: 120000, year: 2024 },
  { company: 'Atlassian', level: 'L4', role: 'Security Engineer', location: 'Remote - US', base: 210000, bonus: 19000, stock: 140000, year: 2024 },
  { company: 'Databricks', level: 'L4', role: 'Data Engineer', location: 'San Francisco, CA', base: 230000, bonus: 22000, stock: 185000, year: 2024 },
  { company: 'Snowflake', level: 'L3', role: 'Data Engineer', location: 'New York, NY', base: 205000, bonus: 15000, stock: 165000, year: 2024 },
  { company: 'OpenAI', level: 'L5', role: 'Machine Learning Engineer', location: 'San Francisco, CA', base: 310000, bonus: 50000, stock: 520000, year: 2024 },
  { company: 'GitLab', level: 'L3', role: 'Software Engineer', location: 'Remote - US', base: 175000, bonus: 9000, stock: 90000, year: 2024 },
  { company: 'Dropbox', level: 'L4', role: 'Product Designer', location: 'Seattle, WA', base: 190000, bonus: 11000, stock: 95000, year: 2024 },
  { company: 'NVIDIA', level: 'L4', role: 'Software Engineer', location: 'Austin, TX', base: 240000, bonus: 21000, stock: 260000, year: 2024 },
  { company: 'LinkedIn', level: 'L3', role: 'Data Analyst', location: 'Chicago, IL', base: 170000, bonus: 9000, stock: 80000, year: 2024 },
  { company: 'Adobe', level: 'L4', role: 'Software Engineer', location: 'San Jose, CA', base: 210000, bonus: 14000, stock: 145000, year: 2024 },
  { company: 'Palantir', level: 'L5', role: 'Data Scientist', location: 'Denver, CO', base: 245000, bonus: 30000, stock: 260000, year: 2024 },
  { company: 'Coinbase', level: 'L4', role: 'Software Engineer', location: 'Remote - US', base: 200000, bonus: 17000, stock: 125000, year: 2024 },

  { company: 'Infosys', level: 'L3', role: 'Senior Software Engineer', location: 'Bengaluru, India', base: 180000, bonus: 17000, stock: 55000, year: 2024 },
  { company: 'TCS', level: 'L2', role: 'Software Engineer', location: 'Pune, India', base: 120000, bonus: 12000, stock: 30000, year: 2024 },
  { company: 'Wipro', level: 'L3', role: 'Senior Software Engineer', location: 'Hyderabad, India', base: 165000, bonus: 15000, stock: 45000, year: 2024 },
  { company: 'HCLTech', level: 'L4', role: 'Data Engineer', location: 'Noida, India', base: 210000, bonus: 22000, stock: 65000, year: 2024 },
  { company: 'Accenture India', level: 'L3', role: 'Product Manager', location: 'Bengaluru, India', base: 260000, bonus: 24000, stock: 30000, year: 2024 },
  { company: 'Flipkart', level: 'L4', role: 'Software Engineer', location: 'Bengaluru, India', base: 295000, bonus: 38000, stock: 145000, year: 2024 },
  { company: 'Swiggy', level: 'L4', role: 'Software Engineer', location: 'Bengaluru, India', base: 285000, bonus: 32000, stock: 170000, year: 2024 },
  { company: 'Razorpay', level: 'L4', role: 'Machine Learning Engineer', location: 'Bengaluru, India', base: 355000, bonus: 45000, stock: 210000, year: 2024 },
  { company: 'Paytm', level: 'L3', role: 'Data Scientist', location: 'Noida, India', base: 235000, bonus: 30000, stock: 110000, year: 2024 },
  { company: 'Zoho', level: 'L3', role: 'Software Engineer', location: 'Chennai, India', base: 190000, bonus: 20000, stock: 80000, year: 2024 },
  { company: 'Freshworks', level: 'L4', role: 'Product Designer', location: 'Chennai, India', base: 220000, bonus: 26000, stock: 85000, year: 2024 },
  { company: 'Myntra', level: 'L4', role: 'Product Manager', location: 'Bengaluru, India', base: 310000, bonus: 34000, stock: 145000, year: 2024 },
  { company: 'Ola', level: 'L4', role: 'Software Engineer', location: 'Bengaluru, India', base: 260000, bonus: 32000, stock: 200000, year: 2024 },
  { company: 'Deloitte India', level: 'L2', role: 'Senior Consultant', location: 'Mumbai, India', base: 145000, bonus: 18000, stock: 25000, year: 2024 }
];

const state = {
  search: '',
  level: 'all',
  role: 'all',
  location: 'all',
  company: 'all',
  sort: 'totalDesc',
  selectedCompany: 'Infosys',
  compareIds: [
    'infosys-l3-senior-software-engineer-bengaluru-india',
    'google-l4-software-engineer-seattle-wa',
    'razorpay-l4-machine-learning-engineer-bengaluru-india'
  ]
};

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0
});

const vendorResearch = [
  {
    title: 'Levels.fyi',
    summary: 'Best at level-centric benchmarking. Users compare salaries across clicks by level, role, and location, with clear compensation structures and market bands.',
    build: 'Yes — level-first filters and structured salary tables are central to the product.'
  },
  {
    title: '6figr',
    summary: 'Strong on salary discovery and career progression ladders, especially for broad job-title and function ranges.',
    build: 'Yes — role and company aggregates inform our benchmark cards and charts.'
  },
  {
    title: 'AmbitionBox',
    summary: 'Good at employee sentiment and broader company data, but less precise for structured comp comparison than level-based salary systems.',
    build: 'Yes — company pages should pair compensation metrics with employee sentiment and employer profile context.'
  },
  {
    title: 'Glassdoor',
    summary: 'Very broad coverage and review volume, but the user experience is less disciplined for apples-to-apples compensation benchmarking.',
    build: 'Yes — broad market context and review signals inform the platform, but not the core comparison engine.'
  }
];

function normalizeCompanyName(company) {
  return String(company || '')
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/\binc\b/gi, '')
    .replace(/\bllc\b/gi, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function makeRecordSlug(entry) {
  return [entry.company, entry.level, entry.role, entry.location]
    .join(' ')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function calculateTotalComp(entry) {
  const base = Number(entry.base || 0);
  const bonus = Number(entry.bonus || 0);
  const stock = Number(entry.stock || 0);
  return base + bonus + stock;
}

function getSafeRecord(entry) {
  const normalizedCompany = normalizeCompanyName(entry.company);
  if (!normalizedCompany || !entry.level || !entry.role || !entry.location) {
    return null;
  }

  const cleanEntry = {
    ...entry,
    company: normalizedCompany,
    bonus: Number(entry.bonus || 0),
    stock: Number(entry.stock || 0),
    base: Number(entry.base || 0),
    total: calculateTotalComp(entry)
  };

  if (!Number.isFinite(cleanEntry.base) || cleanEntry.base <= 0) {
    return null;
  }

  return cleanEntry;
}

function dedupeSalaryData(data) {
  const map = new Map();
  data.forEach((entry) => {
    const normalized = getSafeRecord(entry);
    if (!normalized) return;
    const key = [normalized.company, normalized.level, normalized.role, normalized.location, normalized.year].join('|').toLowerCase();
    if (!map.has(key)) {
      map.set(key, normalized);
    }
  });
  return Array.from(map.values());
}

let safeData = dedupeSalaryData(salaryData);

function getUniqueValues(field) {
  return [...new Set(safeData.map((item) => item[field]))].sort((a, b) => a.localeCompare(b));
}

function formatMoney(value) {
  return currency.format(value || 0);
}

function getFilteredRecords() {
  const term = state.search.trim().toLowerCase();

  return [...safeData]
    .filter((entry) => {
      const matchSearch = !term || [entry.company, entry.level, entry.role, entry.location].join(' ').toLowerCase().includes(term);
      const matchLevel = state.level === 'all' || entry.level === state.level;
      const matchRole = state.role === 'all' || entry.role === state.role;
      const matchLocation = state.location === 'all' || entry.location === state.location;
      const matchCompany = state.company === 'all' || entry.company === state.company;
      return matchSearch && matchLevel && matchRole && matchLocation && matchCompany;
    })
    .sort((a, b) => {
      switch (state.sort) {
        case 'totalAsc':
          return a.total - b.total;
        case 'baseDesc':
          return b.base - a.base;
        case 'companyAsc':
          return a.company.localeCompare(b.company);
        case 'levelAsc':
          return a.level.localeCompare(b.level);
        case 'totalDesc':
        default:
          return b.total - a.total;
      }
    });
}

function buildKpis(records) {
  const avg = records.reduce((sum, item) => sum + item.total, 0) / (records.length || 1);
  const median = records.length ? [...records].sort((a, b) => a.total - b.total)[Math.floor(records.length / 2)].total : 0;
  const companies = new Set(records.map((item) => item.company)).size;
  const roles = new Set(records.map((item) => item.role)).size;

  const cards = [
    { label: 'Median total comp', value: formatMoney(median), subtext: 'Typical compensation at current filter mix' },
    { label: 'Average total comp', value: formatMoney(avg), subtext: `${records.length} benchmark records` },
    { label: 'Companies', value: String(companies), subtext: 'Normalized company coverage' },
    { label: 'Roles', value: String(roles), subtext: 'Unique role families tracked' }
  ];

  return cards;
}

function getCompanySummary(companyName) {
  const companyRecords = safeData.filter((item) => item.company === companyName);
  if (!companyRecords.length) return null;

  const average = companyRecords.reduce((sum, item) => sum + item.total, 0) / companyRecords.length;
  const highest = [...companyRecords].sort((a, b) => b.total - a.total)[0];

  return {
    name: companyName,
    count: companyRecords.length,
    avgTotal: average,
    highestRole: highest.role,
    highestLocation: highest.location,
    strongestLevel: highest.level,
    sample: highest
  };
}

function renderKpis(records) {
  const kpiGrid = document.getElementById('kpiGrid');
  const cards = buildKpis(records);

  kpiGrid.innerHTML = cards.map((card) => `
    <article class="panel kpi-card">
      <div class="kpi-label">${card.label}</div>
      <div class="kpi-value">${card.value}</div>
      <div class="kpi-subtext">${card.subtext}</div>
    </article>
  `).join('');
}

function renderTable(records) {
  const tableBody = document.getElementById('salaryTableBody');
  const resultCount = document.getElementById('resultCount');
  resultCount.textContent = `${records.length} records`;

  if (!records.length) {
    tableBody.innerHTML = `<tr><td colspan="9"><div class="empty-state">No salary benchmarks match the selected filters.</div></td></tr>`;
    return;
  }

  tableBody.innerHTML = records.map((row) => `
    <tr>
      <td>
        <div class="company-cell">
          <span class="company-badge" aria-hidden="true"></span>
          <span>${row.company}</span>
        </div>
      </td>
      <td>${row.level}</td>
      <td>${row.role}</td>
      <td>${row.location}</td>
      <td>${formatMoney(row.base)}</td>
      <td>${formatMoney(row.bonus)}</td>
      <td>${formatMoney(row.stock)}</td>
      <td>${formatMoney(row.total)}</td>
      <td><button class="action-pill" type="button" data-company="${row.company}">View</button></td>
    </tr>
  `).join('');

  tableBody.querySelectorAll('[data-company]').forEach((button) => {
    button.addEventListener('click', () => {
      state.selectedCompany = button.dataset.company;
      renderCompanyProfile();
      window.location.hash = `company-${button.dataset.company.toLowerCase().replace(/\s+/g, '-')}`;
    });
  });
}

function renderCompanyProfile() {
  const profileHost = document.getElementById('companyProfile');
  const summary = getCompanySummary(state.selectedCompany) || getCompanySummary(safeData[0].company);
  const records = safeData.filter((item) => item.company === summary.name);

  profileHost.innerHTML = `
    <div class="profile-card">
      <div class="profile-header">
        <div>
          <p class="eyebrow">Company snapshot</p>
          <h3>${summary.name}</h3>
        </div>
        <span class="tag">${records.length} entries</span>
      </div>
      <div class="profile-stats">
        <div class="stat-box">
          <span class="label">Avg total</span>
          <strong>${formatMoney(summary.avgTotal)}</strong>
        </div>
        <div class="stat-box">
          <span class="label">Top role</span>
          <strong>${summary.highestRole}</strong>
        </div>
        <div class="stat-box">
          <span class="label">Top level</span>
          <strong>${summary.strongestLevel}</strong>
        </div>
      </div>
      <ul class="observation-list">
        <li>Peak benchmark: ${summary.highestRole} at ${summary.highestLocation}</li>
        <li>Normalized company name: ${summary.name}</li>
        <li>Data rule: bonus and stock default to 0 when missing, and invalid entries are rejected before display.</li>
      </ul>
    </div>
  `;
}

function renderCompanyChart(records) {
  const chartHost = document.getElementById('companyChart');
  const companies = [...new Set(records.map((item) => item.company))];
  const stats = companies.map((company) => {
    const compRows = records.filter((item) => item.company === company);
    const avg = compRows.reduce((sum, item) => sum + item.total, 0) / compRows.length;
    return { company, avg };
  }).sort((a, b) => b.avg - a.avg).slice(0, 5);

  const max = Math.max(...stats.map((item) => item.avg), 1);

  chartHost.innerHTML = stats.map((entry) => `
    <div class="bar-row">
      <span class="bar-label">${entry.company}</span>
      <div class="bar-track">
        <span class="bar-fill" style="width:${(entry.avg / max) * 100}%"></span>
      </div>
      <strong>${formatMoney(entry.avg)}</strong>
    </div>
  `).join('');
}

function renderComparison(records) {
  const compareHost = document.getElementById('comparisonGrid');
  if (!state.compareIds.length) {
    state.compareIds = [
      makeRecordSlug(safeData.find((row) => row.company === 'Meta' && row.level === 'L4' && row.role === 'Software Engineer' && row.location === 'New York, NY')),
      makeRecordSlug(safeData.find((row) => row.company === 'Google' && row.level === 'L4' && row.role === 'Software Engineer' && row.location === 'Seattle, WA')),
      makeRecordSlug(safeData.find((row) => row.company === 'OpenAI' && row.level === 'L5' && row.role === 'Machine Learning Engineer' && row.location === 'San Francisco, CA'))
    ].filter(Boolean);
  }

  const compareData = state.compareIds
    .map((id) => safeData.find((row) => makeRecordSlug(row) === id))
    .filter(Boolean)
    .slice(0, 3);

  if (!compareData.length) {
    compareHost.innerHTML = '<div class="empty-state">No comparison records selected.</div>';
    return;
  }

  compareHost.innerHTML = compareData.map((item) => `
    <article class="compare-card">
      <h4>${item.company}</h4>
      <div class="compare-metric"><span>Role</span><strong>${item.role}</strong></div>
      <div class="compare-metric"><span>Level</span><strong>${item.level}</strong></div>
      <div class="compare-metric"><span>Location</span><strong>${item.location}</strong></div>
      <div class="compare-metric"><span>Base</span><strong>${formatMoney(item.base)}</strong></div>
      <div class="compare-metric"><span>Bonus</span><strong>${formatMoney(item.bonus)}</strong></div>
      <div class="compare-metric"><span>Stock</span><strong>${formatMoney(item.stock)}</strong></div>
      <div class="compare-metric"><span>Total</span><strong>${formatMoney(item.total)}</strong></div>
    </article>
  `).join('');
}

function renderResearch() {
  const researchSummary = document.getElementById('researchSummary');
  researchSummary.innerHTML = `
    <div class="research-grid">
      <div class="panel" style="padding:18px;">
        <div class="panel-header compact">
          <h3>Key observations</h3>
        </div>
        <ul class="observation-list">
          <li>Levels matter more than titles; level-based comparators are the most actionable for salary benchmarking.</li>
          <li>Compensation is structured across base, bonus, and equity, so total comp must be compared as a bundle rather than raw salary alone.</li>
          <li>Location and role scope heavily affect the market, which makes filtering and normalization essential.</li>
          <li>Company pages should pair compensation data with market context and trust signals rather than only posting raw lists.</li>
        </ul>
      </div>
      <div class="panel" style="padding:18px;">
        <div class="panel-header compact">
          <h3>Data quality rules</h3>
        </div>
        <ul class="observation-list">
          <li>Normalize company names before aggregation.</li>
          <li>Default missing bonus and stock values to 0.</li>
          <li>Reject invalid compensation rows with missing required fields.</li>
          <li>Deduplicate entries by company, level, role, location, and year before display.</li>
        </ul>
      </div>
    </div>

    <table class="feature-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>Levels.fyi</th>
          <th>6figr</th>
          <th>AmbitionBox</th>
          <th>Glassdoor</th>
          <th>Build?</th>
        </tr>
      </thead>
      <tbody>
        ${vendorResearch.map((entry) => `
          <tr>
            <td>${entry.title}</td>
            <td>${entry.summary}</td>
            <td>${entry.summary}</td>
            <td>${entry.summary}</td>
            <td>${entry.summary}</td>
            <td>${entry.build}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

function populateFilters() {
  const levelFilter = document.getElementById('levelFilter');
  const roleFilter = document.getElementById('roleFilter');
  const locationFilter = document.getElementById('locationFilter');
  const companyFilter = document.getElementById('companyFilter');

  levelFilter.innerHTML = '<option value="all">All levels</option>' + getUniqueValues('level').map((value) => `<option value="${value}">${value}</option>`).join('');
  roleFilter.innerHTML = '<option value="all">All roles</option>' + getUniqueValues('role').map((value) => `<option value="${value}">${value}</option>`).join('');
  locationFilter.innerHTML = '<option value="all">All locations</option>' + getUniqueValues('location').map((value) => `<option value="${value}">${value}</option>`).join('');
  companyFilter.innerHTML = '<option value="all">All companies</option>' + getUniqueValues('company').map((value) => `<option value="${value}">${value}</option>`).join('');
}

function bindEvents() {
  document.getElementById('searchInput').addEventListener('input', (event) => {
    state.search = event.target.value;
    renderDashboard();
  });

  document.getElementById('levelFilter').addEventListener('change', (event) => {
    state.level = event.target.value;
    renderDashboard();
  });

  document.getElementById('roleFilter').addEventListener('change', (event) => {
    state.role = event.target.value;
    renderDashboard();
  });

  document.getElementById('locationFilter').addEventListener('change', (event) => {
    state.location = event.target.value;
    renderDashboard();
  });

  document.getElementById('companyFilter').addEventListener('change', (event) => {
    state.company = event.target.value;
    if (state.company !== 'all') {
      state.selectedCompany = state.company;
    }
    renderDashboard();
  });

  document.getElementById('sortValue').addEventListener('change', (event) => {
    state.sort = event.target.value;
    renderDashboard();
  });

  document.getElementById('resetFilters').addEventListener('click', () => {
    state.search = '';
    state.level = 'all';
    state.role = 'all';
    state.location = 'all';
    state.company = 'all';
    state.sort = 'totalDesc';
    document.getElementById('searchInput').value = '';
    document.getElementById('levelFilter').value = 'all';
    document.getElementById('roleFilter').value = 'all';
    document.getElementById('locationFilter').value = 'all';
    document.getElementById('companyFilter').value = 'all';
    document.getElementById('sortValue').value = 'totalDesc';
    renderDashboard();
  });
}

function renderDashboard() {
  const records = getFilteredRecords();
  renderKpis(records);
  renderTable(records);
  renderCompanyChart(records);
  renderComparison(records);
  renderCompanyProfile();
}

async function init() {
  if (window.location.protocol !== 'file:') {
    try {
      const response = await fetch('/api/benchmarks');
      if (response.ok) {
        const payload = await response.json();
        safeData = dedupeSalaryData(payload);
      }
    } catch (error) {
      console.warn('Static fallback dataset used.', error);
    }
  }

  populateFilters();
  bindEvents();
  renderDashboard();
  renderResearch();
}

init();
