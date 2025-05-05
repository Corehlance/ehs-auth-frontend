import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get(`${import.meta.env.VITE_API_URL}/test/user`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => setMsg(res.data))
      .catch(() => window.location.href = '/');
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <pre>{JSON.stringify(msg, null, 2)}</pre>
    </div>
  );
};

export default Dashboard;