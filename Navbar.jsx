import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg'


export default function Navbar() {
  return (
    <nav className="p-4 bg-green-200 shadow-md flex items-center justify-between flex-wrap">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="h-12 w-12 rounded-full shadow-md object-cover"
          />

        </Link>
        <Link to="/"><span className="text-green-900 font-extrabold text-xl">EcoTrade</span></Link>
      </div>

      {/* Links */}
      <div className="flex gap-4 flex-wrap mt-2 sm:mt-0">
        <Link to="/" className="text-green-900 font-bold hover:underline">Home</Link>
        <Link to="/about" className="text-green-900 font-bold hover:underline">About</Link>
        <Link to="/products" className="text-green-900 font-bold hover:underline">Products</Link>
        <Link to="/sustainpay" className="text-green-900 font-bold hover:underline">SustainPay</Link>
        <Link to="/login" className="text-green-900 font-bold hover:underline">Login</Link>
        <Link to="/register" className="text-green-900 font-bold hover:underline">Register</Link>
        <Link to="/ecopoint" className="text-green-900 font-bold hover:underline">EcoPoint</Link>
        <Link to="/contact" className="text-green-900 font-bold hover:underline">Contact</Link>
      </div>
    </nav>
  );
}
