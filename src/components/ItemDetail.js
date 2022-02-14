import './ItemDetail.css'
import ItemCount from "./ItemCount";

function ItemDetail({product}) {

    function onAdd(quantity){
        console.log(quantity);
        
    }
    if(!product) return"";
    console.log (product);

    return (
        <div className="productDetailContent">
            <img className="imgDetail" src={product.image}/>
            
            <div className='contentDescriptionProduct'>
                <h1 className="productNameDetail">{product.name}</h1>
                <span className="productPriceDetail">{product.price}</span>
                <span>Stock Disponible:{product.stock}</span>
                <ItemCount stock={product.stock} initial={product.init} onAdd={onAdd}></ItemCount>
            </div>
            <h2 className='titleProductDescription'>Descripción del producto</h2>
            <span  className="productDescriptionDetail">{product.description}</span>
        </div>
    )

}

export default ItemDetail;