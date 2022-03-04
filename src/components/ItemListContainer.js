import './ItemListContainer.css'
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {getFirestore} from './ItemCollection';



function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const params = useParams();
    
    const consultProducts = (category) => {
        const db = getFirestore()
        let ItemCollection = null
        if(category) {
            ItemCollection = db.collection('ItemCollection').where('category','==', category);

        }else{
            ItemCollection = db.collection('ItemCollection');
        }
        return ItemCollection.get().then((querySnapshot) => {
            if(querySnapshot.size === 0) {
                console.log('No results!');
            }

            return querySnapshot.docs.map((prod) => prod.data());
        })
    }

    useEffect(() => {
        const category = params.categoryId;
        consultProducts(category).then((data) => {
            setProducts(data);
        })
    }, [params])


    return (
        <div className='listContainer'>
            {params.categoryId && <h1>Categoria: {params.categoryId}</h1>}
            {!!products.length && <ItemList products={products}></ItemList>}
        </div>
    )
}

export default ItemListContainer;