import './CartWidget.css'
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';

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

    const quantity = calculeQuantity(products);

    return (
        <button className='cartNavbar'>
            <i className="bi bi-cart"><span className='quantity'>{quantity}</span></i>
        </button>

    )
}

export default CartWidget;