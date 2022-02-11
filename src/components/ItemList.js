import "./ItemList.css"
import Item from "./Item";

function ItemList(props) {
    const { products } = props;
    if(!products)
    return ""
    return (
        <div className="listContent">
        {products.map((product, i) => {
            return (<Item product={product} key={i}></Item>)
        })}
        </div>
    )
}

export default ItemList;