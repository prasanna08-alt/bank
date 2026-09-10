import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="notfound">
      <div>
        <h1 className="big">404</h1>
        <h2>This page moved, or never existed.</h2>
        <p className="lede" style={{ margin: '0 auto 26px' }}>
          Check the address, or head back to somewhere useful.
        </p>
        <Link to="/" className="btn btn-primary">Back to home</Link>
      </div>
    </div>
  )
}
