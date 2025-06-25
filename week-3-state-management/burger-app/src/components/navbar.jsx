import { NavLink } from 'react-router-dom';
import { Hamburger } from 'lucide-react';

function Navbar() {
    return (
        <>
            <nav className="navbar flex flex-row items-center justify-between gap-10 w-full
            text-orange-400 bg-lime-900 px-8">
                <Hamburger />
                <NavLink to="/">Home</NavLink>
                <NavLink to="/build">Build a burger</NavLink>
                <NavLink to="/total">Total</NavLink>
            </nav>
        </>
    )
}

export default Navbar