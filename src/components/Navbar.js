import './Navbar.css';
import CartWidget from './CartWidget';

function Navbar() {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <span className='display-4'>SHOES UP</span>
            <ul className='menu navbar-nav me-auto mb-2 mb-lg-0'>
                <li className='list nav-item'>
                    <a className='nav-link active' href="#">HOMBRE</a></li>
                <li className='list nav-item'>
                    <a className='nav-link active' href="#">MUJER</a></li>
                <li className='list nav-item'>
                    <a className='nav-link active' href="#">NIÑO</a></li>
                <li className='list nav-item'>
                    <a className='nav-link active' href="#">DEPORTE</a></li>
                <li className='list nav-item'>
                    <a className='nav-link active' href="#">COLECCIONES</a></li>
            </ul>

            <CartWidget></CartWidget>

        </nav>
    )
}

export default Navbar;