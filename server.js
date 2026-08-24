const http = require('http');
const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
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

function normalizeCompanyName(company) {
  return String(company || '')
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/\binc\b/gi, '')
    .replace(/\bllc\b/gi, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function calculateTotalComp(entry) {
  return Number(entry.base || 0) + Number(entry.bonus || 0) + Number(entry.stock || 0);
}

function getSafeRecord(entry) {
  const company = normalizeCompanyName(entry.company);
  if (!company || !entry.level || !entry.role || !entry.location) return null;
  const normalized = { ...entry, company, bonus: Number(entry.bonus || 0), stock: Number(entry.stock || 0), base: Number(entry.base || 0) };
  normalized.total = calculateTotalComp(normalized);
  if (!Number.isFinite(normalized.base) || normalized.base <= 0) return null;
  return normalized;
}

function dedupeSalaryData(data) {
  const map = new Map();
  data.forEach((entry) => {
    const normalized = getSafeRecord(entry);
    if (!normalized) return;
    const key = [normalized.company, normalized.level, normalized.role, normalized.location, normalized.year].join('|').toLowerCase();
    if (!map.has(key)) map.set(key, normalized);
  });
  return Array.from(map.values());
}

const dataFile = path.join(rootDir, 'data.json');

let safeData = [];

function loadDataFromFile() {
  try {
    if (fs.existsSync(dataFile)) {
      const raw = fs.readFileSync(dataFile, 'utf8');
      const parsed = JSON.parse(raw || '[]');
      safeData = dedupeSalaryData(Array.isArray(parsed) && parsed.length ? parsed : salaryData);
    } else {
      safeData = dedupeSalaryData(salaryData);
      try {
        fs.writeFileSync(dataFile, JSON.stringify(salaryData, null, 2));
      } catch (e) {
        console.warn('Unable to persist initial dataset to data.json', e);
      }
    }
  } catch (e) {
    console.warn('Failed to load data.json, falling back to bundled dataset.', e);
    safeData = dedupeSalaryData(salaryData);
  }
}

function saveDataToFile() {
  try {
    fs.writeFileSync(dataFile, JSON.stringify(safeData, null, 2));
  } catch (e) {
    console.error('Failed to persist data.json', e);
  }
}

loadDataFromFile();

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, { 'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*' });
  res.end(JSON.stringify(payload));
}

function serveFile(res, filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const typeMap = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml'
  };

  fs.readFile(filePath, (error, content) => {
    if (error) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Not found');
      return;
    }

    res.writeHead(200, { 'Content-Type': typeMap[ext] || 'application/octet-stream' });
    res.end(content);
  });
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');

  if (url.pathname === '/api/benchmarks') {
    // Support CORS preflight
    if (req.method === 'OPTIONS') {
      res.writeHead(204, { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET,POST,OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type, X-API-KEY' });
      res.end();
      return;
    }

    if (req.method === 'GET') {
      sendJson(res, 200, safeData);
      return;
    }

    if (req.method === 'POST') {
      // Basic API key protection for ingestion
      const apiKey = process.env.API_KEY || 'devkey';
      const provided = req.headers['x-api-key'] || req.headers['x-api-key'.toUpperCase()];
      if (provided !== apiKey) {
        sendJson(res, 401, { error: 'Unauthorized: missing or invalid API key' });
        return;
      }

      let body = '';
      req.on('data', (chunk) => { body += chunk.toString(); });
      req.on('end', () => {
        try {
          const payload = JSON.parse(body || '[]');
          const incoming = Array.isArray(payload) ? payload : [payload];

          // Build a key set of existing records for deduplication (company|level|role|location|year)
          const existingKeys = new Set(safeData.map((r) => [r.company, r.level, r.role, r.location, r.year].join('|').toLowerCase()));

          let added = 0;
          incoming.forEach((entry) => {
            const normalized = getSafeRecord(entry);
            if (!normalized) return;
            const key = [normalized.company, normalized.level, normalized.role, normalized.location, normalized.year].join('|').toLowerCase();
            if (!existingKeys.has(key)) {
              existingKeys.add(key);
              safeData.push(normalized);
              added += 1;
            }
          });

          if (added) saveDataToFile();
          sendJson(res, 200, { added, total: safeData.length });
        } catch (err) {
          sendJson(res, 400, { error: 'Invalid JSON payload' });
        }
      });

      return;
    }

    // Method not allowed
    sendJson(res, 405, { error: 'Method not allowed' });
    return;
  }

  if (url.pathname.startsWith('/api/company/')) {
    const companyName = decodeURIComponent(url.pathname.replace('/api/company/', ''));
    const rows = safeData.filter((row) => row.company.toLowerCase() === companyName.toLowerCase());
    if (!rows.length) {
      sendJson(res, 404, { error: 'Company not found' });
      return;
    }

    const avg = rows.reduce((sum, row) => sum + row.total, 0) / rows.length;
    sendJson(res, 200, {
      company: companyName,
      rows,
      averageTotal: avg
    });
    return;
  }

  const safePath = url.pathname === '/' ? '/index.html' : url.pathname;
  const filePath = path.join(rootDir, safePath);

  if (!filePath.startsWith(rootDir)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.stat(filePath, (error, stats) => {
    if (error || !stats.isFile()) {
      serveFile(res, path.join(rootDir, 'index.html'));
      return;
    }

    serveFile(res, filePath);
  });
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Compensation Intelligence server running at http://localhost:${port}`);
});
