
import { CartContext } from '../context/CartContext';
import { useContext, useState } from 'react';
import './Cart.css'
import { Link } from 'react-router-dom';
import { getFirestore } from './ItemCollection';

function Cart() {

    const context = useContext(CartContext);
    const { products, removeItem, clear, updateStock } = context;
    let subtotal = 0;

    const [orderID, setOrderID] = useState(null);

    products.map(product => {
        subtotal = subtotal + parseInt(product.price) * product.quantity;
    })
    const iva = 0.1;
    const total = (subtotal * iva) + subtotal;
    function deleteProduct(id) {
        removeItem(id)
    }
    function emptyCart() {
        clear()
    }

    const userInfo = {
        name: "Dalgy",
        phone: "953307741",
        email: "dalgygarcia120@gmail.com"
    }



    function purshase() {
        const db = getFirestore();
        const orders = db.collection("orders");
        const newOrder = {
            buyer: userInfo,
            items: products,
            date: new Date().toISOString(),
            total: total,
        }

        orders.add(newOrder).then(({ id }) => {
            products.forEach(_prod => {
                _prod.stock = _prod.stock - _prod.quantity;
                updateStock(_prod)
                db.collection("ItemCollection").doc(_prod.documentId).update({
                    stock: _prod.stock
                })
                setOrderID(id);
            });

        })
    }

    return (
        <div className="CartContent">
            {!orderID && <h1>Carro de Compras</h1>}
            {!!orderID && <h1>Gracias por tu compra</h1>}
            {products.map((product, i) => {
                return <div key={i} className='cartProduct'>
                    <img alt={product.name} className="cartImage" src={product.image} />
                    <span className="cartName">
                        {product.name}
                    </span>
                    <span className="cartPrice">
                        {product.price}
                    </span>
                    <span className="cartQuantity">
                        {product.quantity}
                    </span>
                    {!orderID && <button onClick={() => deleteProduct(product.id)}>Eliminar</button>}
                </div>
            })}

            {!!products.length && !orderID && <section>
                <h5>TU CARRITO</h5>
                <div className='miniCart'>

                    <div>
                        Productos {products.length}
                    </div>

                    <div>
                        Subtotal {subtotal}
                    </div>

                    <div className='totals'>
                        Total: {total}
                    </div>

                    <button onClick={purshase}>Terminar Compra</button>
                    <button onClick={() => emptyCart()} className='clearCart'>Vaciar Carro</button>

                </div>
            </section>}
            {orderID && <div>
                <h5>Número de orden: {orderID}</h5>
                <div className='totals'>
                    Total: {total}
                </div>
            </div>}
            {!products.length && <span>Tu carro está vacío</span>}
            <Link to={'/category/hombre'} className='keepBuying'>Seguir Comprando</Link>
        </div>
    )

}

export default Cart;