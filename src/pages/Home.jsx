import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="hero">
        <div className="container">
          <div>
            <span className="eyebrow">Personal &amp; business banking</span>
            <h1>Banking that keeps growing, the way your money does.</h1>
            <p className="lede">
              Larkspur Bank pairs a no-fee checking account with savings that actually earns,
              cards that reward the everyday, and a team that picks up the phone. Open an
              account in about four minutes.
            </p>
            <div className="hero-actions">
              <Link to="/signup" className="btn btn-gold btn-lg">Open an account</Link>
              <Link to="/accounts" className="btn btn-outline-light btn-lg">Compare accounts</Link>
            </div>
            <div className="hero-ledger">
              <div>
                <span className="num">7.00% p.a.</span>
                <span className="label">Interest on Growth Savings</span>
              </div>
              <div>
                <span className="num">₹0</span>
                <span className="label">Monthly fees, always</span>
              </div>
              <div>
                <span className="num">15,000+</span>
                <span className="label">Fee-free ATMs across India</span>
              </div>
            </div>
          </div>

          <div className="hero-figure" data-aos="zoom-in" data-aos-delay="200">
            <div className="figure-top">
              <span>Growth Savings</span>
              <span>•••• 4471</span>
            </div>
            <div className="balance">₹18,42,050.60</div>
            <div className="mini-bars">
              <div className="bar" style={{ height: '35%' }} />
              <div className="bar" style={{ height: '52%' }} />
              <div className="bar" style={{ height: '40%' }} />
              <div className="bar" style={{ height: '68%' }} />
              <div className="bar" style={{ height: '58%' }} />
              <div className="bar" style={{ height: '80%' }} />
              <div className="bar" style={{ height: '100%' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Feature grid ---------------- */}
      <section>
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Everything in one place</span>
              <h2>One bank, four ways to use it.</h2>
            </div>
            <p className="lede">Move between personal and business banking, cards, and lending
              without ever switching apps.</p>
          </div>

          <div className="feature-grid">
            <div className="feature-card wide" data-aos="fade-right">
              <div>
                <span className="tag">Personal</span>
                <h3>Checking &amp; savings built to be used daily.</h3>
                <p className="lede">No minimum balance, no overdraft traps, and a savings
                  rate that actually moves when the market does.</p>
              </div>
              <Link to="/accounts" className="go">Explore personal accounts →</Link>
            </div>

            <div className="feature-card" data-aos="fade-up" data-aos-delay="100">
              <div>
                <span className="tag">Business</span>
                <h3>Accounts for freelancers &amp; small teams.</h3>
              </div>
              <Link to="/accounts" className="go">See business banking →</Link>
            </div>

            <div className="feature-card" data-aos="fade-left" data-aos-delay="150">
              <div>
                <span className="tag">Cards</span>
                <h3>Debit and credit that reward real spending.</h3>
              </div>
              <Link to="/cards" className="go">View cards →</Link>
            </div>

            <div className="feature-card" data-aos="fade-up" data-aos-delay="200">
              <div>
                <span className="tag">Loans</span>
                <h3>Personal, auto, and home loans with clear terms.</h3>
              </div>
              <Link to="/loans" className="go">Estimate a loan →</Link>
            </div>

            <div className="feature-card" data-aos="fade-left" data-aos-delay="250">
              <div>
                <span className="tag">Support</span>
                <h3>A real person, 24 hours, seven days a week.</h3>
              </div>
              <Link to="/contact" className="go">Talk to us →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- How it works ---------------- */}
      <section className="section-cream">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Getting started</span>
              <h2>Four steps, about four minutes.</h2>
            </div>
          </div>

          <div className="ledger-list" data-aos="fade-up">
            <div className="ledger-row">
              <span className="tick">01</span>
              <h3>Apply online</h3>
              <p className="lede mb-0">Tell us a little about yourself. No paperwork, no
                branch visit required.</p>
            </div>
            <div className="ledger-row">
              <span className="tick">02</span>
              <h3>Verify your identity</h3>
              <p className="lede mb-0">A quick, secure check keeps your account — and everyone
                else's — safe.</p>
            </div>
            <div className="ledger-row">
              <span className="tick">03</span>
              <h3>Fund your account</h3>
              <p className="lede mb-0">Link an existing account or transfer funds to get your
                balance started.</p>
            </div>
            <div className="ledger-row">
              <span className="tick">04</span>
              <h3>Start banking</h3>
              <p className="lede mb-0">Your card ships immediately; your account is ready to
                use online right away.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Stats ---------------- */}
      <section className="section-ink section-tight">
        <div className="container">
          <div className="stat-row" data-aos="zoom-in">
            <div className="stat">
              <span className="num">2.1M</span>
              <span className="label">customers banking with us</span>
            </div>
            <div className="stat">
              <span className="num">4.9/5</span>
              <span className="label">average mobile app rating</span>
            </div>
            <div className="stat">
              <span className="num">₹3.2L Cr</span>
              <span className="label">in deposits held</span>
            </div>
            <div className="stat">
              <span className="num">1912</span>
              <span className="label">the year we opened our first branch</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Quote ---------------- */}
      <section>
        <div className="container">
          <div className="quote-block" data-aos="fade-up">
            <blockquote>
              "I moved my business account to Larkspur mostly for the savings rate, but I stayed
              for the fact that a person answers the phone within a minute, every time."
            </blockquote>
            <p className="quote-attr">Dana Whitfield — owner, Whitfield &amp; Co.</p>
          </div>
        </div>
      </section>

      {/* ---------------- CTA banner ---------------- */}
      <section className="cta-banner">
        <div className="container">
          <h2>Ready to bank somewhere that shows its work?</h2>
          <Link to="/signup" className="btn btn-primary btn-lg">Open an account</Link>
        </div>
      </section>
    </>
  )
}
