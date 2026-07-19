import { useEffect, useState } from 'react';

function buildApiUrl(path) {
  const codespaceName = import.meta.env.VITE_CODESPACE_NAME;
  if (codespaceName) {
    return `https://${codespaceName}-8000.app.github.dev${path}`;
  }

  return `http://localhost:8000${path}`;
}

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadUsers() {
      try {
        const response = await fetch(buildApiUrl('/api/users/'));
        const data = await response.json();
        const payload = Array.isArray(data) ? data : data.users || data.results || [];
        setUsers(payload);
      } catch (err) {
        setError('Unable to load users.');
      } finally {
        setLoading(false);
      }
    }

    loadUsers();
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div className="card shadow-sm border-0 p-4">
      <h2 className="h4 fw-bold">Users</h2>
      <ul className="list-group mt-3">
        {users.map((user) => (
          <li className="list-group-item" key={user._id || user.id || user.email}>
            <div className="fw-semibold">{user.name || user.email}</div>
            <small className="text-muted">{user.role || user.fitnessGoal || 'Active member'}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
