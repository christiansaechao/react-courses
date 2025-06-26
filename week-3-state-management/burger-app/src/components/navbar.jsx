import { NavLink } from 'react-router-dom';
import { Hamburger } from 'lucide-react';

function Navbar() {
    return (
        <>
            <nav className="navbar flex flex-row items-center justify-between p-2 w-full
            text-[#ebe6e0] bg-[#4e4231]">
                <Hamburger />
                <NavLink className={({ isActive }) => (isActive ? 'text-orange-400' : '')} to="/">Home</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'text-orange-400' : '')} to="/cart">Cart</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'text-orange-400' : '')} to="/build">Build a burger</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'text-orange-400' : '')} to="/total">Total</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'text-orange-400' : '')} to="/burger-display">Burger Display</NavLink>
            </nav>
        </>
    )
}

export default Navbar