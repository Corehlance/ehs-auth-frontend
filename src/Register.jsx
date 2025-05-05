import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ok, setOk] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/auth/register`, {
        name,
        email,
        password,
      });
      setOk(true);
    } catch {
      alert('Error al registrar');
    }
  };

  return (
    <form onSubmit={handleRegister} className="bg-white p-6 rounded shadow-md w-96">
      <h2 className="text-xl font-bold mb-4">Registro</h2>
      {ok && <p className="text-green-600">¡Registro exitoso!</p>}
      <input
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border rounded mb-3"
      />
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border rounded mb-3"
      />
      <input
        placeholder="Contraseña"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 border rounded mb-3"
      />
      <button className="w-full bg-blue-600 text-white py-2 rounded" type="submit">
        Registrar
      </button>
      <a className="block mt-3 text-sm text-blue-700 underline" href="/">
        Ya tengo cuenta
      </a>
    </form>
  );
};

export default Register;