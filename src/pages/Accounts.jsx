import { useState } from 'react'
import { Link } from 'react-router-dom'

const personalRows = [
  { label: 'Monthly fee', everyday: '₹0', growth: '₹0', premier: '₹0' },
  { label: 'Minimum balance', everyday: 'None', growth: 'None', premier: '₹1,00,000' },
  { label: 'Interest rate (p.a.)', everyday: '3.00%', growth: '7.00%', premier: '7.25%' },
  { label: 'Fee-free ATMs', everyday: 'yes', growth: 'yes', premier: 'yes' },
  { label: 'ATM fee reimbursement', everyday: 'dash', growth: 'yes', premier: 'yes' },
  { label: 'Free NEFT / RTGS / IMPS', everyday: 'dash', growth: 'dash', premier: 'yes' },
  { label: 'Dedicated support line', everyday: 'dash', growth: 'dash', premier: 'yes' },
]

const businessRows = [
  { label: 'Monthly fee', starter: '₹0', growth: '₹499', scale: '₹999' },
  { label: 'Free transactions / mo', starter: '50', growth: '250', scale: 'Unlimited' },
  { label: 'Interest on balances (p.a.)', starter: '3.50%', growth: '6.50%', scale: '7.00%' },
  { label: 'Invoicing tools', starter: 'yes', growth: 'yes', scale: 'yes' },
  { label: 'Payroll integration', starter: 'dash', growth: 'yes', scale: 'yes' },
  { label: 'Multiple team logins', starter: 'dash', growth: 'yes', scale: 'yes' },
  { label: 'Dedicated account manager', starter: 'dash', growth: 'dash', scale: 'yes' },
]

function Cell({ v }) {
  if (v === 'yes') return <span className="yes">✓</span>
  if (v === 'dash') return <span className="dash">—</span>
  return v
}

export default function Accounts() {
  const [tab, setTab] = useState('personal')

  return (
    <>
      <header className="page-header">
        <div className="container">
          <span className="eyebrow">Accounts</span>
          <h1>Checking and savings that fit how you actually bank.</h1>
          <p className="lede">Compare personal and business accounts side by side, and open
            the one that fits in about four minutes.</p>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="tabs">
            <button className={`tab-btn ${tab === 'personal' ? 'active' : ''}`} onClick={() => setTab('personal')}>
              Personal
            </button>
            <button className={`tab-btn ${tab === 'business' ? 'active' : ''}`} onClick={() => setTab('business')}>
              Business
            </button>
          </div>

          {tab === 'personal' ? (
            <div data-aos="fade-up">
              <table className="compare-table">
                <thead>
                  <tr>
                    <th>Personal accounts</th>
                    <th>Everyday</th>
                    <th>Growth Savings</th>
                    <th>Premier</th>
                  </tr>
                </thead>
                <tbody>
                  {personalRows.map((r) => (
                    <tr key={r.label}>
                      <td className="row-label">{r.label}</td>
                      <td><Cell v={r.everyday} /></td>
                      <td><Cell v={r.growth} /></td>
                      <td><Cell v={r.premier} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="hero-actions" style={{ marginTop: 44 }}>
                <Link to="/signup" className="btn btn-primary btn-lg">Open a personal account</Link>
              </div>
            </div>
          ) : (
            <div data-aos="fade-up">
              <table className="compare-table">
                <thead>
                  <tr>
                    <th>Business accounts</th>
                    <th>Starter</th>
                    <th>Growth</th>
                    <th>Scale</th>
                  </tr>
                </thead>
                <tbody>
                  {businessRows.map((r) => (
                    <tr key={r.label}>
                      <td className="row-label">{r.label}</td>
                      <td><Cell v={r.starter} /></td>
                      <td><Cell v={r.growth} /></td>
                      <td><Cell v={r.scale} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="hero-actions" style={{ marginTop: 44 }}>
                <Link to="/signup" className="btn btn-primary btn-lg">Open a business account</Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="section-ink section-tight">
        <div className="container">
          <div className="stat-row" data-aos="zoom-in">
            <div className="stat">
              <span className="num">₹0</span>
              <span className="label">overdraft fees, on every account</span>
            </div>
            <div className="stat">
              <span className="num">7.25%</span>
              <span className="label">top interest rate on Premier savings</span>
            </div>
            <div className="stat">
              <span className="num">15,000+</span>
              <span className="label">fee-free ATMs</span>
            </div>
            <div className="stat">
              <span className="num">4 min</span>
              <span className="label">average time to open an account</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
