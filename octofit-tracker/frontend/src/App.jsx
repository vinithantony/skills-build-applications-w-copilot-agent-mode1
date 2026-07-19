import { Link, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="min-vh-100 bg-light">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand fw-bold" href="/">
            OctoFit Tracker
          </a>
          <div className="navbar-nav ms-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </div>
        </div>
      </nav>

      <main className="container py-5">
        <Routes>
          <Route
            path="/"
            element={
              <div className="card shadow-sm border-0 p-4">
                <h1 className="display-6 fw-bold">Welcome to OctoFit Tracker</h1>
                <p className="lead text-muted">
                  A modern multi-tier fitness platform for teams, workouts, and progress tracking.
                </p>
                <div className="d-flex gap-3 mt-4">
                  <span className="badge bg-primary">React 19</span>
                  <span className="badge bg-success">Express + TypeScript</span>
                  <span className="badge bg-info text-dark">MongoDB + Mongoose</span>
                </div>
              </div>
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
