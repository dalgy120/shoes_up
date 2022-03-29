
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
    const validation = () => {
        if(orderID){
            clear();
        }
    }

    return (
        <div className="CartContent">
            <div className='cartProducts'>
                {!orderID && <h1>Carro de Compras</h1>}
                {!!orderID && <h1>Gracias por tu compra</h1>}
                {!products.length && <span>Tu carro está vacío</span>}
                {!products.length && <Link to={'/'} className='keepBuying'>Seguir Comprando</Link>}
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
            </div>

            <div className='cartTotals'>
                {!!products.length && !orderID && <section>
                    <div className='miniCart'>
                        <div className='lineItem'>
                            Productos {products.length}
                        </div>

                        <div className='lineItem'>
                            Subtotal {subtotal}
                        </div>

                        <div className='totals'>
                            Total: {total}
                        </div>

                        <button onClick={purshase} className="btn btn-primary">Terminar Compra</button>
                        <button onClick={() => emptyCart()} className="btn btn-secundary clearCart">Vaciar Carro</button>
                        <Link to={'/'} className='keepBuying'>Seguir Comprando</Link>

                    </div>
                </section>}
                {orderID && <div>
                    <h5>Número de orden: {orderID}</h5>
                    <div className='totals'>
                        Total: {total}
                    </div>
                    <Link to={'/'} onClick={() => validation()} className='keepBuying'>Seguir Comprando</Link>
                </div>}
            </div>
           
        </div>
    )

}

export default Cart;