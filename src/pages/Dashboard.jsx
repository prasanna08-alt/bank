import { Link } from 'react-router-dom'

const accounts = [
  { tag: 'Everyday Checking', balance: '₹4,18,210.00', sub: 'Account •••• 2290' },
  { tag: 'Growth Savings', balance: '₹18,42,050.60', sub: '7.00% p.a.' },
  { tag: 'Signature Credit', balance: '₹18,420 owed', sub: '₹3,00,000 available' },
]

const transactions = [
  { name: 'Big Bazaar', date: 'Sep 8', amount: '-₹1,240.00', icon: 'BB', dir: 'neg' },
  { name: 'Payroll deposit', date: 'Sep 5', amount: '+₹85,000.00', icon: '₹', dir: 'pos' },
  { name: 'Larkspur Reserve payment', date: 'Sep 3', amount: '-₹15,000.00', icon: 'LR', dir: 'neg' },
  { name: 'Third Wave Coffee', date: 'Sep 2', amount: '-₹185.00', icon: 'TW', dir: 'neg' },
  { name: 'Transfer from Savings', date: 'Sep 1', amount: '+₹10,000.00', icon: '↔', dir: 'pos' },
]

const spend = [
  { label: 'Apr', h: 40 }, { label: 'May', h: 55 }, { label: 'Jun', h: 48 },
  { label: 'Jul', h: 70 }, { label: 'Aug', h: 62 }, { label: 'Sep', h: 80 },
]

export default function Dashboard() {
  return (
    <div className="dash-shell">
      <div className="dash-top">
        <div className="container">
          <Link to="/" className="brand" style={{ color: 'var(--paper)' }}>
            <svg className="brand-mark" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 2C16 2 22 9 22 15.5C22 19.6 19.3 23 16 23C12.7 23 10 19.6 10 15.5C10 9 16 2 16 2Z" fill="#E3A438"/>
              <path d="M16 23V30" stroke="#FBF3E7" strokeWidth="2" strokeLinecap="round"/>
              <path d="M16 27L11 24" stroke="#FBF3E7" strokeWidth="2" strokeLinecap="round"/>
              <path d="M16 27L21 24" stroke="#FBF3E7" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Larkspur Bank
          </Link>
          <div className="dash-user">
            <span>Welcome back, Jordan</span>
            <div className="avatar">J</div>
          </div>
        </div>
      </div>

      <div className="dash-body">
        <div className="container">
          <div className="dash-head">
            <div>
              <span className="eyebrow">Overview</span>
              <h2 className="mb-0">Your accounts</h2>
            </div>
            <Link to="/" className="btn btn-outline">Log out</Link>
          </div>

          <div className="account-grid">
            {accounts.map((a, i) => (
              <div className="account-card" key={a.tag} data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="acc-tag">{a.tag}</div>
                <div className="acc-balance">{a.balance}</div>
                <div className="acc-sub">{a.sub}</div>
              </div>
            ))}
          </div>

          <div className="dash-columns">
            <div className="panel" data-aos="fade-up">
              <div className="panel-head">
                <h3 className="mb-0">Recent transactions</h3>
                <Link to="/contact" style={{ fontWeight: 700, fontSize: '0.85rem' }}>View all</Link>
              </div>
              {transactions.map((t) => (
                <div className="txn-row" key={t.name}>
                  <div className="txn-icon">{t.icon}</div>
                  <div>
                    <div className="txn-name">{t.name}</div>
                    <div className="txn-date">{t.date}</div>
                  </div>
                  <div className={`txn-amt ${t.dir}`}>{t.amount}</div>
                </div>
              ))}
            </div>

            <div>
              <div className="panel" style={{ marginBottom: 22 }} data-aos="fade-up" data-aos-delay="100">
                <div className="panel-head">
                  <h3 className="mb-0">Quick actions</h3>
                </div>
                <div className="quick-actions">
                  <div className="quick-action">Transfer money</div>
                  <div className="quick-action">Pay a bill</div>
                  <div className="quick-action">Deposit a check</div>
                  <div className="quick-action">Freeze a card</div>
                </div>
              </div>

              <div className="panel" data-aos="fade-up" data-aos-delay="150">
                <div className="panel-head">
                  <h3 className="mb-0">Spending, last 6 months</h3>
                </div>
                <div className="spend-bars">
                  {spend.map((s) => (
                    <div key={s.label} className="sbar" style={{ height: `${s.h}%` }}>
                      <span className="sbar-label">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
