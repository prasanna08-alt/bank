import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const steps = ['Your info', 'Security', 'Review']

export default function Signup() {
  const navigate = useNavigate()
  const [step, setStep] = useState(0)
  const [done, setDone] = useState(false)
  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirm: '',
    agree: false,
  })

  function update(key, value) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  function validateStep(current) {
    const e = {}
    if (current === 0) {
      if (!form.fullName.trim()) e.fullName = 'Enter your full name.'
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address.'
      if (form.phone.replace(/\D/g, '').length < 10) e.phone = 'Enter a 10-digit phone number.'
    }
    if (current === 1) {
      if (form.password.length < 8) e.password = 'Use at least 8 characters.'
      if (form.confirm !== form.password || !form.confirm) e.confirm = 'Passwords do not match.'
    }
    if (current === 2) {
      if (!form.agree) e.agree = 'You need to agree to continue.'
    }
    return e
  }

  function next() {
    const e = validateStep(step)
    setErrors(e)
    if (Object.keys(e).length === 0) {
      if (step === steps.length - 1) {
        setDone(true)
      } else {
        setStep((s) => s + 1)
      }
    }
  }

  function back() {
    setErrors({})
    setStep((s) => Math.max(0, s - 1))
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

        <div className="panel-mid">
          <span className="eyebrow">Open an account</span>
          <h2>Four minutes now, no fees later.</h2>
          <p className="lede" style={{ color: 'var(--cream-60)' }}>
            No minimum deposit to get started, no monthly fees, and a savings rate that
            actually moves when the market does.
          </p>
        </div>

        <div>
          <hr className="hr-dark" style={{ marginBottom: 24 }} />
          <div className="ledger-list" style={{ borderColor: 'transparent' }}>
            <div className="ledger-row" style={{ padding: '10px 0', borderColor: 'var(--line-on-dark)' }}>
              <span className="tick" style={{ fontSize: '1.1rem' }}>01</span>
              <h3 style={{ fontSize: '1rem', color: 'var(--paper)' }}>Your info</h3>
              <span />
            </div>
            <div className="ledger-row" style={{ padding: '10px 0', borderColor: 'var(--line-on-dark)' }}>
              <span className="tick" style={{ fontSize: '1.1rem' }}>02</span>
              <h3 style={{ fontSize: '1rem', color: 'var(--paper)' }}>Secure your account</h3>
              <span />
            </div>
            <div className="ledger-row" style={{ padding: '10px 0', border: 'none' }}>
              <span className="tick" style={{ fontSize: '1.1rem' }}>03</span>
              <h3 style={{ fontSize: '1rem', color: 'var(--paper)' }}>Review &amp; confirm</h3>
              <span />
            </div>
          </div>
        </div>
      </div>

      <div className="auth-form-side">
        <div className="auth-form-wrap">
          <div className="top-link">
            <Link to="/">← Back to home</Link>
          </div>

          {done ? (
            <div className="form-success">
              <div className="mark">✓</div>
              <h3>Welcome to Larkspur, {form.fullName.split(' ')[0]}</h3>
              <p className="lede" style={{ margin: '0 auto 22px' }}>
                Your account has been created. You can explore your new dashboard right away.
              </p>
              <button className="btn btn-primary" onClick={() => navigate('/dashboard')}>
                Go to dashboard
              </button>
            </div>
          ) : (
            <>
              <h1>Open your account</h1>
              <p className="lede">Step {step + 1} of {steps.length} — {steps[step]}</p>

              <div className="stepper">
                {steps.map((s, i) => (
                  <div key={s} style={{ display: 'contents' }}>
                    <div className={`step ${i === step ? 'active' : ''} ${i < step ? 'done' : ''}`}>
                      <span className="dot">{i < step ? '✓' : i + 1}</span>
                    </div>
                    {i < steps.length - 1 && <div className="connector" />}
                  </div>
                ))}
              </div>

              <form onSubmit={(e) => { e.preventDefault(); next() }} noValidate>
                {step === 0 && (
                  <>
                    <div className="auth-field">
                      <div className="field">
                        <label htmlFor="fullName">Full name</label>
                        <input
                          id="fullName"
                          value={form.fullName}
                          className={errors.fullName ? 'error' : ''}
                          onChange={(e) => update('fullName', e.target.value)}
                          placeholder="Jordan Blake"
                        />
                      </div>
                      {errors.fullName && <div className="field-error-text">{errors.fullName}</div>}
                    </div>

                    <div className="auth-field">
                      <div className="field">
                        <label htmlFor="email">Email</label>
                        <input
                          id="email"
                          type="email"
                          value={form.email}
                          className={errors.email ? 'error' : ''}
                          onChange={(e) => update('email', e.target.value)}
                          placeholder="you@example.com"
                        />
                      </div>
                      {errors.email && <div className="field-error-text">{errors.email}</div>}
                    </div>

                    <div className="auth-field">
                      <div className="field">
                        <label htmlFor="phone">Mobile phone</label>
                        <input
                          id="phone"
                          type="tel"
                          value={form.phone}
                          className={errors.phone ? 'error' : ''}
                          onChange={(e) => update('phone', e.target.value)}
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      {errors.phone && <div className="field-error-text">{errors.phone}</div>}
                    </div>
                  </>
                )}

                {step === 1 && (
                  <>
                    <div className="auth-field">
                      <div className="field">
                        <label htmlFor="password">Create password</label>
                        <div className="password-wrap">
                          <input
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            value={form.password}
                            className={errors.password ? 'error' : ''}
                            onChange={(e) => update('password', e.target.value)}
                            placeholder="At least 8 characters"
                          />
                          <button type="button" className="password-toggle" onClick={() => setShowPassword((v) => !v)}>
                            {showPassword ? 'Hide' : 'Show'}
                          </button>
                        </div>
                      </div>
                      {errors.password && <div className="field-error-text">{errors.password}</div>}
                    </div>

                    <div className="auth-field">
                      <div className="field">
                        <label htmlFor="confirm">Confirm password</label>
                        <input
                          id="confirm"
                          type={showPassword ? 'text' : 'password'}
                          value={form.confirm}
                          className={errors.confirm ? 'error' : ''}
                          onChange={(e) => update('confirm', e.target.value)}
                          placeholder="Re-enter your password"
                        />
                      </div>
                      {errors.confirm && <div className="field-error-text">{errors.confirm}</div>}
                    </div>

                    <div className="security-note">
                      <span>🔒</span>
                      <span>Use a mix of letters, numbers, and symbols. We'll never ask for this password over the phone.</span>
                    </div>
                  </>
                )}

                {step === 2 && (
                  <>
                    <div className="panel" style={{ padding: 22, marginBottom: 22 }}>
                      <div className="result-line" style={{ borderColor: 'var(--line)', color: 'var(--charcoal-60)' }}>
                        <span>Name</span><span>{form.fullName}</span>
                      </div>
                      <div className="result-line" style={{ borderColor: 'var(--line)', color: 'var(--charcoal-60)' }}>
                        <span>Email</span><span>{form.email}</span>
                      </div>
                      <div className="result-line" style={{ borderColor: 'var(--line)', color: 'var(--charcoal-60)', borderBottom: 'none' }}>
                        <span>Phone</span><span>{form.phone}</span>
                      </div>
                    </div>

                    <div className="checkbox-row" style={{ marginBottom: 8 }}>
                      <input
                        type="checkbox"
                        checked={form.agree}
                        onChange={(e) => update('agree', e.target.checked)}
                      />
                      <span>
                        I agree to the Larkspur Bank account agreement, e-sign consent, and
                        privacy policy.
                      </span>
                    </div>
                    {errors.agree && <div className="field-error-text">{errors.agree}</div>}
                  </>
                )}

                <div className="form-nav">
                  {step > 0 ? (
                    <button type="button" className="btn btn-outline" onClick={back}>Back</button>
                  ) : <span />}
                  <button type="submit" className="btn btn-primary">
                    {step === steps.length - 1 ? 'Create account' : 'Continue'}
                  </button>
                </div>
              </form>
            </>
          )}

          {!done && (
            <p className="auth-switch">
              Already have an account? <Link to="/login">Log in</Link>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
