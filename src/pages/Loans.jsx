import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

const loanTypes = [
  { id: 'personal', label: 'Personal loan', rate: 10.75, min: 50000, max: 2000000, step: 10000, termMax: 60 },
  { id: 'auto', label: 'Auto loan', rate: 8.75, min: 100000, max: 1500000, step: 10000, termMax: 84 },
  { id: 'home', label: 'Home loan', rate: 8.5, min: 500000, max: 15000000, step: 50000, termMax: 360 },
]

function currency(n) {
  return n.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 })
}

export default function Loans() {
  const [typeId, setTypeId] = useState('personal')
  const type = loanTypes.find((t) => t.id === typeId)

  const [amount, setAmount] = useState(15000)
  const [term, setTerm] = useState(36)

  const { payment, totalInterest, totalPaid } = useMemo(() => {
    const r = type.rate / 100 / 12
    const n = term
    const m = amount * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
    const total = m * n
    return { payment: m, totalInterest: total - amount, totalPaid: total }
  }, [amount, term, type])

  function handleTypeChange(id) {
    const t = loanTypes.find((x) => x.id === id)
    setTypeId(id)
    setAmount(Math.round((t.min + t.max) / 4 / t.step) * t.step)
    setTerm(Math.min(term, t.termMax))
  }

  return (
    <>
      <header className="page-header">
        <div className="container">
          <span className="eyebrow">Loans</span>
          <h1>See your payment before you ever apply.</h1>
          <p className="lede">Move the sliders to estimate a personal, auto, or home loan.
            Rates shown are illustrative starting rates for well-qualified borrowers.</p>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="tabs">
            {loanTypes.map((t) => (
              <button
                key={t.id}
                className={`tab-btn ${typeId === t.id ? 'active' : ''}`}
                onClick={() => handleTypeChange(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="calc-panel" data-aos="fade-up">
            <div className="calc-inputs">
              <h3>Estimate your loan</h3>

              <div className="field-row">
                <label>
                  <span>Loan amount</span>
                  <span className="field-value">{currency(amount)}</span>
                </label>
                <input
                  type="range"
                  min={type.min}
                  max={type.max}
                  step={type.step}
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                />
              </div>

              <div className="field-row">
                <label>
                  <span>Loan term</span>
                  <span className="field-value">{term} months</span>
                </label>
                <input
                  type="range"
                  min={6}
                  max={type.termMax}
                  step={6}
                  value={term}
                  onChange={(e) => setTerm(Number(e.target.value))}
                />
              </div>

              <div className="field-row">
                <label>
                  <span>Estimated rate (p.a.)</span>
                  <span className="field-value">{type.rate}%</span>
                </label>
              </div>

              <p className="lede" style={{ fontSize: '0.85rem' }}>
                This estimate assumes a fixed rate and does not include taxes, insurance, or
                origination fees. Your actual rate depends on credit history and underwriting.
              </p>
            </div>

            <div className="calc-result">
              <div className="field-row">
                <label><span>Estimated monthly payment</span></label>
                <div className="result-num">{currency(payment)}</div>
              </div>
              <div className="result-line">
                <span>Loan amount</span>
                <span>{currency(amount)}</span>
              </div>
              <div className="result-line">
                <span>Total interest</span>
                <span>{currency(totalInterest)}</span>
              </div>
              <div className="result-line">
                <span>Total paid over {term} months</span>
                <span>{currency(totalPaid)}</span>
              </div>
              <Link to="/signup" className="btn btn-gold btn-block" style={{ marginTop: 28 }}>
                Start an application
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-cream">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Loan types</span>
              <h2>Three ways to borrow, all with fixed rates.</h2>
            </div>
          </div>

          <div className="loan-types">
            <div className="loan-type" data-aos="zoom-in">
              <span className="tag">Personal</span>
              <span className="rate">10.75% p.a.</span>
              <p className="lede mb-0">For debt consolidation, home projects, or a planned
                expense. No collateral required.</p>
            </div>
            <div className="loan-type" data-aos="zoom-in" data-aos-delay="100">
              <span className="tag">Auto</span>
              <span className="rate">8.75% p.a.</span>
              <p className="lede mb-0">Finance a new or used vehicle with same-day
                pre-approval and no prepayment penalty.</p>
            </div>
            <div className="loan-type" data-aos="zoom-in" data-aos-delay="200">
              <span className="tag">Home</span>
              <span className="rate">8.50% p.a.</span>
              <p className="lede mb-0">Fixed-rate home loans and balance transfers, with a
                dedicated loan officer through to disbursal.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
