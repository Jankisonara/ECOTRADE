import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';


export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/api/users/register', {
        name,
        email,
        password
      });
      alert(response.data.message);
      navigate('/login'); // ✅ redirect using useNavigate
    } catch (error) {
      alert(error.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br bg-white/60">
      <div className="backdrop-blur-md bg-white/40 p-8 rounded-2xl shadow-xl w-full max-w-md border border-green-200">
        <h1 className="text-4xl font-extrabold text-ecoDarkGreen text-center mb-6">Create Account</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-3 rounded-xl border border-green-300 focus:outline-none focus:ring-2 focus:ring-ecoDarkGreen"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-xl border border-green-300 focus:outline-none focus:ring-2 focus:ring-ecoDarkGreen"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 rounded-xl border border-green-300 focus:outline-none focus:ring-2 focus:ring-ecoDarkGreen"
          />
          <button
            type="submit"
            className="bg-ecoDarkGreen bg-green-700 hover:bg-green-500 text-white font-semibold py-3 rounded-xl transition"
          >
            Register
          </button>
        </form>
        <p className="mt-6 text-sm text-center text-gray-700">
          Already have an account?{" "}
          <Link to="/login" className="text-ecoDarkGreen font-semibold hover:underline">
            Back to Login
          </Link>
        </p>
      </div>
    </div>
  );
}
