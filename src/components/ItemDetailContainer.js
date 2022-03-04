import './ItemDetailContainer.css';
import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import {getFirestore} from './ItemCollection';
import { useParams } from 'react-router-dom';



function ItemDetailContainer(props) {
    const [product, setProduct] = useState()
    const params = useParams();
    
    const getItem = (id) => {
        const db = getFirestore()
        const ItemCollection = db.collection('ItemCollection').where('id','==', id);
        return ItemCollection.get().then((querySnapshot) => {
            if(querySnapshot.size === 0) {
                console.log('No results!');
            }

            const prod = querySnapshot.docs.map((prod) => prod.data());
            return prod.length ? prod[0] : null
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