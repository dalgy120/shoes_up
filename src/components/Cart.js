
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import './Cart.css'
import { Link } from 'react-router-dom';

function Cart() {

    const context = useContext(CartContext);
    const { products, removeItem, clear} = context;
    let subtotal = 0;
    console.log(products)
    products.map(product => {
        subtotal = subtotal + parseInt(product.price) * product.quantity;
    })
    const iva = 0.1;
    const total = (subtotal * iva) + subtotal;
    function deleteProduct(id){
        removeItem(id)
    }
    function emptyCart(){
        clear()
    }
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
                <button onClick={()=> deleteProduct(product.id)}>Eliminar</button>
                </div>
            })}

            {!!products.length && <section>
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

                    <button>Terminar Compra</button>
                    <button onClick={()=>emptyCart()} className='clearCart'>Vaciar Carro</button>

                </div>
            </section>}
            {!products.length && <span>Tu carro está vacío</span>}
            {!products.length && <Link to={'/category/hombre'} className='keepBuying'>Seguir Comprando</Link>}
        </div>
    )

}

export default Cart;