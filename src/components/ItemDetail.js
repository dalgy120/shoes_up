import './ItemDetail.css'
import ItemCount from "./ItemCount";
import { useState, useContext, useEffect } from 'react';
import { Link} from 'react-router-dom';
import { CartContext } from '../context/CartContext';


function ItemDetail({product}) {
    const [ inCart, setInCart] = useState(0);
    const context = useContext(CartContext);
    const {  addToCart, removeItem, isInCart, products } = context;
    useEffect(()=> {
        if(product)
            setInCart(isInCart(product.id))
        else
            setInCart(0)
    },[product, products])

    function onAdd(quantity){
        let prod = {...product, quantity};
        addToCart(prod);
        setInCart(quantity);
    }

    if(!product) return"";
    
    return (
        <div className="productDetailContent">
            <img className="imgDetail" src={product.image} alt={product.name}/>
            <div className='contentDescriptionProduct'>
                <h1 className="productNameDetail">{product.name}</h1>
                <span className="productPriceDetail">{product.price}</span>
                <span>Stock disponible: {product.stock}</span>
                {!inCart && <ItemCount stock={product.stock} initial={product.init} onAdd={onAdd}></ItemCount>}
                {!!inCart && <Link to='/cart'>Terminar Compra</Link>}
                {!!inCart && <button onClick={() => removeItem(product.id)}>Eliminar del carro</button>}
            </div>
            <h2 className='titleProductDescription'>Descripción del producto</h2>
            <span  className="productDescriptionDetail">{product.description}</span>
        </div>
    )

}

export default ItemDetail;