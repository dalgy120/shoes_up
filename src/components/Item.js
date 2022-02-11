import "./Item.css";
import ItemCount from "./ItemCount";

function Item(props) {
    function onAdd(quantity) {
        console.log(quantity);
    }
    const product = props.product
    return (
        <div className="productContent">
            <img className="imgProduct" src={product.image}/>
            <span className="productName">{product.name}</span>
            <span className="productPrice">{product.price}</span>
            <span>Stock Disponible:{product.stock}</span>
            <ItemCount stock={product.stock} initial={product.init} onAdd={onAdd}></ItemCount>
        </div>
    )

}

export default Item;