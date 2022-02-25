import { useState, useContext,useEffect } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../context/CartContext';
import ItemCount from "./ItemCount";
import "./Item.css";

function Item({product}) {

    const [ inCart, setInCart] = useState(0)
    const context = useContext(CartContext);
    const {  addToCart, isInCart } = context;

    useEffect(()=> {
        if(product)
            setInCart(isInCart(product.id))
    },[product])

    function onAdd(quantity){
        let prod = {...product, quantity};
        addToCart(prod);
        setInCart(quantity);
    }

    return (
        <div className="productContent card">
            <Link to={'/item/' + product.id}>
                <img alt={product.name} className="imgProduct card-img-top" src={product.image}/>
            </Link>
            <div className="card-body">
                <span className="productName card-title">
                    <Link to={'/item/' + product.id}>
                        {product.name}
                    </Link>
                </span>
                <span className="productPrice"> <Link to={'/item/' + product.id}>{product.price}</Link></span>
                <span>Stock disponible: {product.stock}</span>
                <ItemCount stock={product.stock} initial={product.init} onAdd={onAdd}></ItemCount>
                {!!inCart && <Link to='/cart'>Finalizar Compra</Link>}
            </div>
        </div>
    )

}

export default Item;