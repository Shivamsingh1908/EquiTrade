import React from "react";

const marketStats = [
  { label: "NIFTY 50", value: "22,488.65", change: "+1.24%", tone: "positive" },
  { label: "SENSEX", value: "73,872.29", change: "+0.86%", tone: "positive" },
  { label: "USD / INR", value: "83.14", change: "-0.18%", tone: "negative" },
];

const allocation = [
  { label: "Equity", value: "58%", width: "58%", color: "#1264d8" },
  { label: "Mutual funds", value: "26%", width: "26%", color: "#16a6a0" },
  { label: "Bonds", value: "16%", width: "16%", color: "#f4b740" },
];

function MarketPulse() {
  return (
    <section className="market-pulse-section" aria-labelledby="market-pulse-title">
      <div className="container">
        <div className="market-pulse-heading">
          <div>
            <div className="section-eyebrow">A clearer view of the market</div>
            <h2 id="market-pulse-title">See the signal, skip the noise.</h2>
          </div>
          <p>Simple visual context for the decisions behind your portfolio.</p>
        </div>

        <div className="market-pulse-layout">
          <div className="market-chart-card">
            <div className="market-card-header">
              <div>
                <span className="market-card-label">Portfolio value</span>
                <strong className="market-card-value">₹8,42,650</strong>
              </div>
              <span className="market-period">1Y <span aria-hidden="true">⌄</span></span>
            </div>
            <div className="market-chart-legend">
              <span><i className="legend-dot legend-dot-blue" /> Current value</span>
              <span><i className="legend-dot legend-dot-muted" /> Invested amount</span>
            </div>
            <svg className="market-line-chart" viewBox="0 0 720 250" role="img" aria-label="Portfolio value trending upward over one year">
              <defs>
                <linearGradient id="pulseFill" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#1264d8" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#1264d8" stopOpacity="0" />
                </linearGradient>
              </defs>
              <line x1="0" y1="42" x2="720" y2="42" className="chart-grid-line" />
              <line x1="0" y1="104" x2="720" y2="104" className="chart-grid-line" />
              <line x1="0" y1="166" x2="720" y2="166" className="chart-grid-line" />
              <line x1="0" y1="228" x2="720" y2="228" className="chart-grid-line" />
              <path d="M0 204 C28 189, 42 194, 64 175 S103 181, 126 153 S166 157, 188 138 S228 150, 253 116 S296 131, 319 104 S359 119, 382 91 S421 111, 450 76 S494 90, 516 59 S551 80, 578 49 S618 67, 645 30 S681 45, 720 18 V228 H0 Z" className="chart-area" />
              <path d="M0 204 C28 189, 42 194, 64 175 S103 181, 126 153 S166 157, 188 138 S228 150, 253 116 S296 131, 319 104 S359 119, 382 91 S421 111, 450 76 S494 90, 516 59 S551 80, 578 49 S618 67, 645 30 S681 45, 720 18" className="chart-line" />
              <circle cx="720" cy="18" r="6" className="chart-point" />
            </svg>
            <div className="chart-axis"><span>Jan</span><span>Apr</span><span>Jul</span><span>Oct</span><span>Today</span></div>
          </div>

          <div className="market-side-column">
            <div className="market-stats-card">
              <div className="market-card-header">
                <span className="market-card-label">Market snapshot</span>
                <span className="market-live"><i /> Live</span>
              </div>
              {marketStats.map((stat) => (
                <div className="market-stat-row" key={stat.label}>
                  <span>{stat.label}</span>
                  <strong>{stat.value}</strong>
                  <em className={stat.tone}>{stat.change}</em>
                </div>
              ))}
            </div>

            <div className="allocation-card">
              <div className="market-card-header">
                <span className="market-card-label">Your allocation</span>
                <span className="market-card-label">Today</span>
              </div>
              <div className="allocation-bar" aria-label="Portfolio allocation by asset type">
                {allocation.map((item) => <span key={item.label} style={{ width: item.width, backgroundColor: item.color }} />)}
              </div>
              <div className="allocation-list">
                {allocation.map((item) => (
                  <div key={item.label}><span><i style={{ backgroundColor: item.color }} />{item.label}</span><strong>{item.value}</strong></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MarketPulse;
