import './ItemDetail.css'
import ItemCount from "./ItemCount";
import { useState } from 'react';
import { Link} from 'react-router-dom';


function ItemDetail({product}) {
    const [ inCart, setInCart] = useState(0)
    function onAdd(quantity){
        setInCart(quantity)
        
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
                {!inCart && <ItemCount stock={product.stock} initial={product.init} onAdd={onAdd}></ItemCount>}
                {!!inCart && <Link to='/cart'>Finalizar Compra</Link>}
            </div>
            <h2 className='titleProductDescription'>Descripción del producto</h2>
            <span  className="productDescriptionDetail">{product.description}</span>
        </div>
    )

}

export default ItemDetail;