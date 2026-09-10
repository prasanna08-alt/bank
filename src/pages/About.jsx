export default function About() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <span className="eyebrow">About Larkspur</span>
          <h1>A bank built by people who found the industry frustrating.</h1>
          <p className="lede">We started Larkspur because opening an account shouldn't take a
            week, and reaching a human shouldn't take three menus.</p>
        </div>
      </header>

      <section>
        <div className="container-narrow">
          <div data-aos="fade-up">
            <h2>Our mission</h2>
            <p className="lede" style={{ maxWidth: '68ch' }}>
              Larkspur exists to make everyday banking straightforward: clear pricing, a
              savings rate that responds to the market instead of ignoring it, and support
              that treats your time as valuable. We're not trying to be everything — just the
              bank you don't have to think about.
            </p>
          </div>
        </div>
      </section>

      <section className="section-cream">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Our history</span>
              <h2>From one branch to a bank you can open from your phone.</h2>
            </div>
          </div>

          <div className="ledger-list" data-aos="fade-up">
            <div className="ledger-row">
              <span className="tick">1912</span>
              <h3>First branch opens</h3>
              <p className="lede mb-0">Larkspur Trust &amp; Savings opens its doors in a
                single storefront, serving local farmers and merchants.</p>
            </div>
            <div className="ledger-row">
              <span className="tick">1968</span>
              <h3>Statewide expansion</h3>
              <p className="lede mb-0">Larkspur grows to 40 branches and introduces one of the
                region's first drive-through tellers.</p>
            </div>
            <div className="ledger-row">
              <span className="tick">2011</span>
              <h3>Online banking launches</h3>
              <p className="lede mb-0">Customers can open accounts and manage transfers
                without visiting a branch for the first time.</p>
            </div>
            <div className="ledger-row">
              <span className="tick">2024</span>
              <h3>Larkspur goes fully digital</h3>
              <p className="lede mb-0">A rebuilt mobile-first bank, with the same charter and
                the same commitment to answering the phone.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">What we value</span>
              <h2>Principles that show up in the product, not just the brochure.</h2>
            </div>
          </div>

          <div className="feature-grid">
            <div className="feature-card" data-aos="fade-up">
              <div>
                <span className="tag">Clarity</span>
                <h3>Pricing you can explain to a friend in one sentence.</h3>
              </div>
            </div>
            <div className="feature-card" data-aos="fade-up" data-aos-delay="100">
              <div>
                <span className="tag">Access</span>
                <h3>A human on the phone, day or night.</h3>
              </div>
            </div>
            <div className="feature-card" data-aos="fade-up" data-aos-delay="150">
              <div>
                <span className="tag">Security</span>
                <h3>Bank-grade protection without the friction.</h3>
              </div>
            </div>
            <div className="feature-card" data-aos="fade-up" data-aos-delay="200">
              <div>
                <span className="tag">Stewardship</span>
                <h3>We hold your money the way we'd want ours held.</h3>
              </div>
            </div>
            <div className="feature-card" data-aos="fade-up" data-aos-delay="250">
              <div>
                <span className="tag">Growth</span>
                <h3>Rates and tools that reward staying with us.</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-ink">
        <div className="container">
          <div className="quote-block" data-aos="fade-up">
            <blockquote>
              "We measure ourselves on how many calls get resolved in the first one — not how
              many branches we've closed this year."
            </blockquote>
            <p className="quote-attr">Imani Torres — Chief Executive Officer</p>
          </div>
        </div>
      </section>
    </>
  )
}
