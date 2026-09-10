import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', topic: 'General question', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  function update(key, value) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = 'Enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address.'
    if (!form.message.trim() || form.message.trim().length < 10) e.message = 'Message should be at least 10 characters.'
    return e
  }

  function handleSubmit(ev) {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length === 0) {
      setSent(true)
    }
  }

  return (
    <>
      <header className="page-header">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1>Talk to a real person, any time.</h1>
          <p className="lede">Send a message below, or use the details alongside it — every
            channel reaches an actual Larkspur employee.</p>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="contact-layout">
            <div className="contact-info" data-aos="fade-right">
              <div className="info-row">
                <h4>Call us</h4>
                <p className="mb-0">1800-123-4567 (toll-free) &mdash; available 24/7</p>
              </div>
              <div className="info-row">
                <h4>Email</h4>
                <p className="mb-0">support@larkspurbank.example</p>
              </div>
              <div className="info-row">
                <h4>Headquarters</h4>
                <p className="mb-0">Larkspur Towers, Bandra Kurla Complex<br />Mumbai, Maharashtra 400051</p>
              </div>
              <div className="info-row">
                <h4>Branch hours</h4>
                <p className="mb-0">Mon&ndash;Sat, 9:30am&ndash;5:30pm local time</p>
              </div>
            </div>

            <div data-aos="fade-left" data-aos-delay="100">
              {sent ? (
                <div className="form-success">
                  <div className="mark">✓</div>
                  <h3>Message sent</h3>
                  <p className="lede" style={{ margin: '0 auto' }}>
                    Thanks, {form.name.split(' ')[0]} — a member of our team will reply to{' '}
                    {form.email} within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-grid">
                    <div className="field full">
                      <label htmlFor="name">Full name <span className="req">*</span></label>
                      <input
                        id="name"
                        type="text"
                        value={form.name}
                        className={errors.name ? 'error' : ''}
                        onChange={(e) => update('name', e.target.value)}
                        placeholder="Jordan Blake"
                      />
                      {errors.name && <span className="error-msg">{errors.name}</span>}
                    </div>

                    <div className="field full">
                      <label htmlFor="email">Email <span className="req">*</span></label>
                      <input
                        id="email"
                        type="email"
                        value={form.email}
                        className={errors.email ? 'error' : ''}
                        onChange={(e) => update('email', e.target.value)}
                        placeholder="you@example.com"
                      />
                      {errors.email && <span className="error-msg">{errors.email}</span>}
                    </div>

                    <div className="field full">
                      <label htmlFor="topic">What's this about?</label>
                      <select id="topic" value={form.topic} onChange={(e) => update('topic', e.target.value)}>
                        <option>General question</option>
                        <option>Opening an account</option>
                        <option>Existing account support</option>
                        <option>Loans</option>
                        <option>Report an issue</option>
                      </select>
                    </div>

                    <div className="field full">
                      <label htmlFor="message">Message <span className="req">*</span></label>
                      <textarea
                        id="message"
                        value={form.message}
                        className={errors.message ? 'error' : ''}
                        onChange={(e) => update('message', e.target.value)}
                        placeholder="How can we help?"
                      />
                      {errors.message && <span className="error-msg">{errors.message}</span>}
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg" style={{ marginTop: 26 }}>
                    Send message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
