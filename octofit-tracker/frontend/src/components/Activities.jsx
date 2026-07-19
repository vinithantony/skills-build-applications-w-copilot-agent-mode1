import { useEffect, useState } from 'react';

function buildApiUrl(path) {
  const codespaceName = import.meta.env.VITE_CODESPACE_NAME;
  if (codespaceName) {
    return `https://${codespaceName}-8000.app.github.dev${path}`;
  }

  return `http://localhost:8000${path}`;
}

function Activities() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadActivities() {
      try {
        const response = await fetch(buildApiUrl('/api/activities/'));
        const data = await response.json();
        const payload = Array.isArray(data) ? data : data.activities || data.results || [];
        setActivities(payload);
      } catch (err) {
        setError('Unable to load activities.');
      } finally {
        setLoading(false);
      }
    }

    loadActivities();
  }, []);

  if (loading) return <p>Loading activities...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div className="card shadow-sm border-0 p-4">
      <h2 className="h4 fw-bold">Activities</h2>
      <ul className="list-group mt-3">
        {activities.map((activity) => (
          <li className="list-group-item" key={activity._id || activity.id || activity.type}>
            <div className="fw-semibold">{activity.type}</div>
            <small className="text-muted">{activity.durationMinutes} min • {activity.calories} cal</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Activities;
