import './ItemDetailContainer.css';
import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { Information } from '../config';
import { useParams } from 'react-router-dom';



function ItemDetailContainer(props) {
    const [product, setProduct] = useState()
    const params = useParams();
    const getItem = (id) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(Information, id)
                const productData = Information.filter(information => information.id === parseInt(id));
                if(productData.length)
                    resolve(productData[0])
                else
                    resolve(null)

            }, 1000)
        })
    }

    useEffect(() => {
        const id = params.id
        getItem(id).then((data) => {
            setProduct(data);
        })
    }, [params])


    return (
        <div className='itemDetail'>
            <ItemDetail product={product}></ItemDetail>
        </div>
    )
}

export default ItemDetailContainer;