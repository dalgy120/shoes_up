import './ItemDetailContainer.css';
import Zapato from '../image/Black-Converse.png';
import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';


const Information = {   
        id: 108,
        image: Zapato,
        name: 'Zapatilla Run New Arrival 2.0',
        description: 'Zapatillas Inspiradas en el Movimiento Para Uso Diario. Este producto está hecho con Primegreen, una serie de materiales reciclados de alto desempeño. 50 % del exterior está hecho con material reciclado. No contienen poliéster virgen',
        price: '$18.000',
        stock: 5,
        init: 1,
    }


function ItemDetailContainer(props) {
    const [product, setProduct] = useState()

    const getItem = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(Information)

            }, 2000)
        })
    }

    useEffect(() => {
        getItem().then((data) => {
            setProduct(data);
        })
    }, [])


    return (
        <div className='itemDetail'>
            <ItemDetail product={product}></ItemDetail>
        </div>
    )
}

export default ItemDetailContainer;