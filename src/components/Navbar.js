import './Navbar.css';
import CartWidget from './CartWidget';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <span className='display-4 logo'><Link to="/">SHOES UP</Link></span>
            <ul className='menu navbar-nav me-auto mb-2 mb-lg-0'>
                <li className='list nav-item'>
                    <Link className='nav-link active' to="/category/hombre">HOMBRE</Link>
                </li>
                <li className='list nav-item'>
                    <Link className='nav-link active' to="/category/mujer">MUJER</Link>
                </li>
                <li className='list nav-item'>
                    <Link className='nav-link active' to="/category/niños">NIÑOS</Link>
                </li>
                <li className='list nav-item'>
                    <Link className='nav-link active' to="/category/deportes">DEPORTES</Link>
                </li>

            </ul>

            <CartWidget />

        </nav>
    )
}

export default Navbar;