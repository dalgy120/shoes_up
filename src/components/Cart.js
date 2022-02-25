
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import './Cart.css'

function Cart() {

    const context = useContext(CartContext);
    const { products } = context;
    return (
        <div className="CartContent">
        <h1>Carro de Compras</h1>
            {products.map((product, i)=> {
                return <div key={i} className='cartProduct'>
                <img alt={product.name} className="cartImage" src={product.image}/>
                <span className="cartName">
                    {product.name}
                </span>
                <span className="cartPrice">
                    {product.price}
                </span>
                <span className="cartQuantity"> 
                    {product.quantity}
                </span>
                </div>
            })}
        </div>
    )

}

export default Cart;