import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [remember, setRemember] = useState(true)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  function validate() {
    const e = {}
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Enter a valid email address.'
    if (!password) e.password = 'Enter your password.'
    return e
  }

  function handleSubmit(ev) {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length === 0) {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        navigate('/dashboard')
      }, 900)
    }
  }

  return (
    <div className="auth-screen">
      <div className="auth-panel">
        <Link to="/" className="brand">
          <svg className="brand-mark" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 2C16 2 22 9 22 15.5C22 19.6 19.3 23 16 23C12.7 23 10 19.6 10 15.5C10 9 16 2 16 2Z" fill="#E3A438"/>
            <path d="M16 23V30" stroke="#FBF3E7" strokeWidth="2" strokeLinecap="round"/>
            <path d="M16 27L11 24" stroke="#FBF3E7" strokeWidth="2" strokeLinecap="round"/>
            <path d="M16 27L21 24" stroke="#FBF3E7" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          Larkspur Bank
        </Link>

        <div className="panel-mid quote-block">
          <blockquote>
            "Every login is checked against the same fraud monitoring our branch tellers use —
            you just don't have to stand in line for it."
          </blockquote>
          <p className="quote-attr">Larkspur Security Team</p>
        </div>

        <div>
          <hr className="hr-dark" style={{ marginBottom: 24 }} />
          <div className="stat-row" style={{ border: 'none' }}>
            <div className="stat" style={{ padding: '0 30px 0 0' }}>
              <span className="num">256-bit</span>
              <span className="label">encryption on every session</span>
            </div>
            <div className="stat" style={{ padding: 0, borderRight: 'none' }}>
              <span className="num">24/7</span>
              <span className="label">fraud monitoring</span>
            </div>
          </div>
        </div>
      </div>

      <div className="auth-form-side">
        <div className="auth-form-wrap">
          <div className="top-link">
            <Link to="/">← Back to home</Link>
          </div>

          <h1>Welcome back</h1>
          <p className="lede">Log in to check your balance, move money, or manage your cards.</p>

          <form onSubmit={handleSubmit} noValidate>
            <div className="auth-field">
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  className={errors.email ? 'error' : ''}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                />
              </div>
              {errors.email && <div className="field-error-text">{errors.email}</div>}
            </div>

            <div className="auth-field">
              <div className="field">
                <label htmlFor="password">Password</label>
                <div className="password-wrap">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    value={password}
                    className={errors.password ? 'error' : ''}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword((v) => !v)}
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
              </div>
              {errors.password && <div className="field-error-text">{errors.password}</div>}
            </div>

            <div className="auth-row-between">
              <label className="remember">
                <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} />
                Remember this device
              </label>
              <Link to="/contact" className="forgot-link">Forgot password?</Link>
            </div>

            <button type="submit" className="btn btn-primary btn-lg btn-block" disabled={loading}>
              {loading ? 'Logging in…' : 'Log in'}
            </button>

            <div className="security-note">
              <span>🔒</span>
              <span>
                For your security, we may text a one-time code to your phone if we don't
                recognize this device.
              </span>
            </div>
          </form>

          <p className="auth-switch">
            New to Larkspur? <Link to="/signup">Open an account</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
