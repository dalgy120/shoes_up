import "./Item.css";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

function Item({product}) {
    function onAdd(quantity) {
        console.log(quantity);
    }
    return (
        <div className="productContent">
            <Link to={'/item/' + product.id}>
                <img className="imgProduct" src={product.image}/>
            </Link>
            <span className="productName">
                <Link to={'/item/' + product.id}>
                    {product.name}
                </Link>
            </span>
            <span className="productPrice"> <Link to={'/item/' + product.id}>{product.price}</Link></span>
            <span>Stock Disponible:{product.stock}</span>
            <ItemCount stock={product.stock} initial={product.init} onAdd={onAdd}></ItemCount>
        </div>
    )

}

export default Item;