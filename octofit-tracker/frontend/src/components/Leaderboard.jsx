import { useEffect, useState } from 'react';

function buildApiUrl(path) {
  const codespaceName = import.meta.env.VITE_CODESPACE_NAME;
  if (codespaceName) {
    return `https://${codespaceName}-8000.app.github.dev${path}`;
  }

  return `http://localhost:8000${path}`;
}

function Leaderboard() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadLeaderboard() {
      try {
        const response = await fetch(buildApiUrl('/api/leaderboard/'));
        const data = await response.json();
        const payload = Array.isArray(data) ? data : data.leaderboard || data.results || [];
        setEntries(payload);
      } catch (err) {
        setError('Unable to load leaderboard.');
      } finally {
        setLoading(false);
      }
    }

    loadLeaderboard();
  }, []);

  if (loading) return <p>Loading leaderboard...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div className="card shadow-sm border-0 p-4">
      <h2 className="h4 fw-bold">Leaderboard</h2>
      <ul className="list-group mt-3">
        {entries.map((entry) => (
          <li className="list-group-item d-flex justify-content-between align-items-center" key={entry._id || entry.id || entry.userName}>
            <span>{entry.userName || entry.name}</span>
            <span className="badge bg-primary rounded-pill">{entry.score || entry.points || 0}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Leaderboard;
