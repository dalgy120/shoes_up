import { useState } from 'react';
import './ItemCount.css'

function ItemCount({stock, initial, onAdd, inCart}) {
    const [quantity, setQuantity] = useState(initial)

    function increment() {
        if (quantity >= stock) return false
        setQuantity(quantity+1)
    }

    function decrement() {
        if (quantity <= initial) return false
        setQuantity(quantity-1)
    }

    function handleProduct(){
        if (quantity > stock) return false
        onAdd(quantity)
    }
    const withStock = quantity <= stock;
    return (
        <div className='ItemContainerQuantity'>
            <div className='counter'>
            <div className="btn-group btn-group-sm buttonQuantity" role="group" aria-label="...">
                <button className='btn btn-outline-secondary' onClick={decrement}>-</button>
                <span className='itemQuantity'>{quantity}</span>
                <button className={quantity < stock ? 'btn btn-primary' : 'btn btn-disabled'} onClick={increment}>+</button>
            </div>
            </div>
            {!!inCart && <div> {inCart} en el carro</div>}
            {!!withStock && <button type="button" className="btn btn-outline-secondary" onClick={handleProduct}>Agregar al carrito</button>}
        </div>
    )
}

export default ItemCount;