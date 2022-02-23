import "./Item.css";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useState } from 'react';

function Item({product}) {
    const [ inCart, setInCart] = useState(0)
    function onAdd(quantity){
        setInCart(quantity)
    }
    return (
        <div className="productContent">
            <Link to={'/item/' + product.id}>
                <img alt={product.name} className="imgProduct" src={product.image}/>
            </Link>
            <span className="productName">
                <Link to={'/item/' + product.id}>
                    {product.name}
                </Link>
            </span>
            <span className="productPrice"> <Link to={'/item/' + product.id}>{product.price}</Link></span>
            <span>Stock Disponible:{product.stock}</span>
            {!inCart && <ItemCount stock={product.stock} initial={product.init} onAdd={onAdd}></ItemCount>}
            {!!inCart && <Link to='/cart'>Finalizar Compra</Link>}
        </div>
    )

}

export default Item;