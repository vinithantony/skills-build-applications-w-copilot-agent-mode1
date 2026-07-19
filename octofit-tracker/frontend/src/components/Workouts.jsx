import { useEffect, useState } from 'react';

function buildApiUrl(path) {
  const codespaceName = import.meta.env.VITE_CODESPACE_NAME;
  if (codespaceName) {
    return `https://${codespaceName}-8000.app.github.dev${path}`;
  }

  return `http://localhost:8000${path}`;
}

function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadWorkouts() {
      try {
        const response = await fetch(buildApiUrl('/api/workouts/'));
        const data = await response.json();
        const payload = Array.isArray(data) ? data : data.workouts || data.results || [];
        setWorkouts(payload);
      } catch (err) {
        setError('Unable to load workouts.');
      } finally {
        setLoading(false);
      }
    }

    loadWorkouts();
  }, []);

  if (loading) return <p>Loading workouts...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div className="card shadow-sm border-0 p-4">
      <h2 className="h4 fw-bold">Workouts</h2>
      <ul className="list-group mt-3">
        {workouts.map((workout) => (
          <li className="list-group-item" key={workout._id || workout.id || workout.name}>
            <div className="fw-semibold">{workout.name}</div>
            <small className="text-muted">{workout.focus} • {workout.durationMinutes} min</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Workouts;
