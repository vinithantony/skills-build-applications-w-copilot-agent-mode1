import { Link, NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import Activities from './components/Activities'
import Leaderboard from './components/Leaderboard'
import Teams from './components/Teams'
import Users from './components/Users'
import Workouts from './components/Workouts'

function HomePage() {
  return (
    <div className="row g-4">
      <div className="col-12">
        <div className="card shadow-sm border-0 p-4">
          <h1 className="display-6 fw-bold">Welcome to OctoFit Tracker</h1>
          <p className="lead text-muted">
            A modern multi-tier fitness platform for teams, workouts, and progress tracking.
          </p>
          <div className="d-flex flex-wrap gap-2 mt-4">
            <span className="badge bg-primary">React 19</span>
            <span className="badge bg-success">Express + TypeScript</span>
            <span className="badge bg-info text-dark">MongoDB + Mongoose</span>
          </div>
        </div>
      </div>

      <div className="col-md-6 col-xl-4">
        <div className="card shadow-sm border-0 h-100 p-4">
          <h2 className="h5 fw-bold">Members</h2>
          <p className="text-muted">Browse users, roles, and fitness goals.</p>
          <Link className="btn btn-outline-primary" to="/users">
            View users
          </Link>
        </div>
      </div>

      <div className="col-md-6 col-xl-4">
        <div className="card shadow-sm border-0 h-100 p-4">
          <h2 className="h5 fw-bold">Teams</h2>
          <p className="text-muted">Explore club teams and their sport focus.</p>
          <Link className="btn btn-outline-primary" to="/teams">
            View teams
          </Link>
        </div>
      </div>

      <div className="col-md-6 col-xl-4">
        <div className="card shadow-sm border-0 h-100 p-4">
          <h2 className="h5 fw-bold">Activities</h2>
          <p className="text-muted">See recent training sessions and performance stats.</p>
          <Link className="btn btn-outline-primary" to="/activities">
            View activities
          </Link>
        </div>
      </div>

      <div className="col-md-6 col-xl-4">
        <div className="card shadow-sm border-0 h-100 p-4">
          <h2 className="h5 fw-bold">Leaderboard</h2>
          <p className="text-muted">Track top performers by score.</p>
          <Link className="btn btn-outline-primary" to="/leaderboard">
            View leaderboard
          </Link>
        </div>
      </div>

      <div className="col-md-6 col-xl-4">
        <div className="card shadow-sm border-0 h-100 p-4">
          <h2 className="h5 fw-bold">Workouts</h2>
          <p className="text-muted">Discover custom workout plans for every goal.</p>
          <Link className="btn btn-outline-primary" to="/workouts">
            View workouts
          </Link>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="min-vh-100 bg-light">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">
            OctoFit Tracker
          </Link>
          <div className="navbar-nav ms-auto">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/users">
              Users
            </NavLink>
            <NavLink className="nav-link" to="/teams">
              Teams
            </NavLink>
            <NavLink className="nav-link" to="/activities">
              Activities
            </NavLink>
            <NavLink className="nav-link" to="/leaderboard">
              Leaderboard
            </NavLink>
            <NavLink className="nav-link" to="/workouts">
              Workouts
            </NavLink>
          </div>
        </div>
      </nav>

      <main className="container py-5">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<Users />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
