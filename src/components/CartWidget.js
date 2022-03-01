import './CartWidget.css'
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

function CartWidget() {
    const context = useContext(CartContext);
    const { products } = context;

    const calculeQuantity = (products) => {
        let qty = 0;
        if(products.length){
            products.forEach(product => {
                qty += product.quantity || 0;
            });
        }
        return qty;
    }
    if(!products.length)
        return('')
    const quantity = calculeQuantity(products);

    return (
        <Link className='cartNavbar' to={'/cart'}>
            <i className="bi bi-cart"><span className='quantity'>{quantity}</span></i>
        </Link>

    )
}

export default CartWidget;