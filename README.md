# Compensation Intelligence System

This project delivers a structured compensation intelligence experience focused on level-based salary benchmarking rather than generic job listings.

## What is included

- Searchable salary tables with hybrid global + India market coverage
- Filters for level, role, location, and company
- Structured comparison workflows
- Company snapshot panels
- Compensation bar charts
- Research summary aligned with benchmarking competitors
- Data quality rules covering normalization, deduplication, validation, and defaulting missing bonus/stock to zero
- Indian company data for Infosys, TCS, Wipro, HCLTech, Flipkart, Swiggy, Razorpay and more

## Research summary

### Key observations

- Levels.fyi is strongest at level-over-title comparisons. Users evaluate compensation using role bands and levels instead of raw title names.
- 6figr provides broad salary visibility and career progression clues, which helps with market positioning and role mapping.
- AmbitionBox adds strong employer context, but it is less precise for apples-to-apples comp comparison than a level-centric benchmark engine.
- Glassdoor offers broad salary and review coverage, but the experience is less structured for comparison-heavy, analytical decisions.

### Feature comparison sheet

| Feature | Levels.fyi | 6figr | AmbitionBox | Glassdoor | Build? |
| --- | --- | --- | --- | --- | --- |
| Level-based benchmarking | Very strong | Moderate | Moderate | Limited | Yes |
| Role coverage | Strong | Strong | Strong | Strong | Yes |
| Company pages | Good | Moderate | Strong | Strong | Yes |
| Compensation structure | Strong | Moderate | Moderate | Moderate | Yes |
| Filters and comparison UI | Strong | Good | Moderate | Moderate | Yes |

## Data quality rules implemented

- Normalize company names before aggregation.
- Reject invalid compensation entries with missing or non-positive base salary values.
- Default cash bonus and stock to 0 if missing.
- Deduplicate entries by company, level, role, location, and year.
- Compute total compensation using base + bonus + stock.

## How to run

Option 1: open `index.html` directly in a browser.

Option 2: start the bundled local server:

```bash
node server.js
```

Then open `http://localhost:3000`.

## Project philosophy

The product is designed around the idea that compensation decisions are more reliable when they are structured by levels, markets, and role categories rather than by isolated titles. The final experience is intentionally focused, structured, and scalable.
