import { useState } from 'react';
import './ItemCount.css'

function ItemCount({stock, initial, onAdd}) {
    const [quantity, setQuantity] = useState(initial)
    function increment() {
        setQuantity(quantity+1)
    }

    function decrement() {
        if (quantity <= initial) return false
        setQuantity(quantity-1)
    }

    function addToCart(){
        if (quantity > stock) return false
        onAdd(quantity)
    }

    return (
        <div className='ItemContainerQuantity'>
        <div className='counter'>
        <div className="btn-group btn-group-sm" role="group" aria-label="...">
            <button className='btn btn-outline-secondary' onClick={decrement}>-</button>
            <span className='itemQuantity'>{quantity}</span>
            <button className='btn btn-primary' onClick={increment}>+</button>
        </div>
        </div>
        <button type="button" class="btn btn-outline-secondary" onClick={addToCart}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;