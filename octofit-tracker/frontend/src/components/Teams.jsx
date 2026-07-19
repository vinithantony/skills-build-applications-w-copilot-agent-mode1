import { useEffect, useState } from 'react';

function buildApiUrl(path) {
  const codespaceName = import.meta.env.VITE_CODESPACE_NAME;
  if (codespaceName) {
    return `https://${codespaceName}-8000.app.github.dev${path}`;
  }

  return `http://localhost:8000${path}`;
}

function Teams() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadTeams() {
      try {
        const response = await fetch(buildApiUrl('/api/teams/'));
        const data = await response.json();
        const payload = Array.isArray(data) ? data : data.teams || data.results || [];
        setTeams(payload);
      } catch (err) {
        setError('Unable to load teams.');
      } finally {
        setLoading(false);
      }
    }

    loadTeams();
  }, []);

  if (loading) return <p>Loading teams...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div className="card shadow-sm border-0 p-4">
      <h2 className="h4 fw-bold">Teams</h2>
      <ul className="list-group mt-3">
        {teams.map((team) => (
          <li className="list-group-item" key={team._id || team.id || team.name}>
            <div className="fw-semibold">{team.name}</div>
            <small className="text-muted">{team.city} • {team.sport}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Teams;
