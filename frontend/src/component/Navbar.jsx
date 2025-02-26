import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full bg-blue-500 p-4 text-white flex justify-between">
      <Link to="/" className="text-lg font-bold">AuthApp</Link>
      <div>
        <Link to="/login" className="mr-4">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}
export default Navbar;