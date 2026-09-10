import { Link } from 'react-router-dom'

const cards = [
  {
    tier: 'tier-essential',
    name: 'Essential Debit',
    sub: 'Linked to Everyday Checking',
    benefits: ['No annual fee', '1% cashback on groceries', 'Freeze/unfreeze in the app', 'Fee-free at 15,000+ ATMs across India'],
  },
  {
    tier: 'tier-signature',
    name: 'Signature Credit',
    sub: '2x points on everything',
    benefits: ['₹0 annual fee first year, ₹999 after', '2x points on all purchases', 'No forex mark-up fees', 'Purchase protection included'],
  },
  {
    tier: 'tier-metal',
    name: 'Reserve Metal Card',
    sub: 'For Premier account holders',
    benefits: ['₹15,000 annual fee', '3x points on travel & dining', 'Airport lounge access', 'Dedicated concierge line'],
  },
]

export default function Cards() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <span className="eyebrow">Cards</span>
          <h1>Cards that reward the spending you're already doing.</h1>
          <p className="lede">From a fee-free debit card to a metal Reserve card with lounge
            access, every Larkspur card ships within two business days.</p>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="card-showcase">
            {cards.map((c, i) => (
              <div key={c.name} data-aos="flip-left" data-aos-delay={i * 120}>
                <div className={`bank-card ${c.tier}`}>
                  <div className="card-top">
                    <span>Larkspur Bank</span>
                    <span>{c.name.includes('Metal') ? 'RESERVE' : c.name.includes('Essential') ? 'RUPAY' : 'VISA'}</span>
                  </div>
                  <div className="chip" />
                  <div>
                    <div className="card-number">•••• •••• •••• 4471</div>
                    <div className="card-name" style={{ marginTop: 10 }}>A. Rivera</div>
                  </div>
                </div>
                <div className="card-copy">
                  <h3>{c.name}</h3>
                  <p className="lede">{c.sub}</p>
                  <ul>
                    {c.benefits.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-cream">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Card controls</span>
              <h2>Every card, controlled from one screen.</h2>
            </div>
          </div>
          <div className="ledger-list" data-aos="fade-up">
            <div className="ledger-row">
              <span className="tick">01</span>
              <h3>Freeze instantly</h3>
              <p className="lede mb-0">Lost your card at lunch? Freeze it before you've
                finished your coffee, and unfreeze it just as fast.</p>
            </div>
            <div className="ledger-row">
              <span className="tick">02</span>
              <h3>Set spending limits</h3>
              <p className="lede mb-0">Cap spending by category, or issue a sub-card to a
                teammate or family member with its own limit.</p>
            </div>
            <div className="ledger-row">
              <span className="tick">03</span>
              <h3>Real-time alerts</h3>
              <p className="lede mb-0">Get a notification the moment your card is used —
                no more finding out at the end of the month.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <h2>Pick a card, and it's in your hand within two days.</h2>
          <Link to="/signup" className="btn btn-primary btn-lg">Open an account</Link>
        </div>
      </section>
    </>
  )
}
