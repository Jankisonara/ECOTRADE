import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import { motion } from 'framer-motion';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/api/users/login', {
        email,
        password
      });

      localStorage.setItem('token', response.data.token); // Save token in localStorage

      navigate('/dashboard'); // Correct way to navigate
    } catch (error) {
      alert(error.response ? error.response.data.message : 'Login failed');
    }
  };

  return (
    <motion.div
      className="min-h-[70vh] flex flex-col justify-center items-center p-6 bg-white/60 rounded-2xl shadow-xl backdrop-blur-md"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl font-extrabold text-ecoDarkGreen mb-6 drop-shadow-lg">Login to EcoTrade</h1>

      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white/50 p-6 rounded-xl shadow-inner backdrop-blur-md space-y-5">
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded-md border border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 rounded-md border border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />

        <div className="flex justify-between items-center text-sm text-emerald-700">
          <label>
            <input type="checkbox" className="mr-1" /> Remember me
          </label>
          <Link to="/forgot-password" className="hover:underline">
            Forgot Password?
          </Link>
        </div>

        <button
          type="submit"
          className="w-full bg-ecoDarkGreen bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-md transition"
        >
          Login
        </button>
      </form>
    </motion.div>
  );
}
