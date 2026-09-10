import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="brand">
              <svg className="brand-mark" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 2C16 2 22 9 22 15.5C22 19.6 19.3 23 16 23C12.7 23 10 19.6 10 15.5C10 9 16 2 16 2Z" fill="#E3A438"/>
                <path d="M16 23V30" stroke="#FBF3E7" strokeWidth="2" strokeLinecap="round"/>
                <path d="M16 27L11 24" stroke="#FBF3E7" strokeWidth="2" strokeLinecap="round"/>
                <path d="M16 27L21 24" stroke="#FBF3E7" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Larkspur Bank
            </div>
            <p>Personal and business banking built around how your money actually grows.</p>
          </div>

          <div className="footer-col">
            <h4>Banking</h4>
            <Link to="/accounts">Personal accounts</Link>
            <Link to="/accounts">Business accounts</Link>
            <Link to="/cards">Cards</Link>
            <Link to="/loans">Loans</Link>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/dashboard">Demo dashboard</Link>
          </div>

          <div className="footer-col">
            <h4>Support</h4>
            <li>Help centre</li>
            <li>Security</li>
            <li>Branch locator</li>
          </div>

          <div className="footer-col">
            <h4>Legal</h4>
            <li>Privacy policy</li>
            <li>Terms of service</li>
            <li>Accessibility</li>
          </div>
        </div>

        <hr className="hr-dark" />

        <div className="footer-bottom">
          <span>&copy; {year} Larkspur Bank. All rights reserved.</span>
          <span>Regulated by the Reserve Bank of India · Deposits insured by DICGC up to ₹5,00,000</span>
        </div>

        <p className="footer-legal">
          Larkspur Bank is a fictional brand created for demonstration purposes only. This
          website and all account types, rates, and figures shown are illustrative sample
          content and do not represent a real financial institution or a real offer of
          products or services.
        </p>
      </div>
    </footer>
  )
}
