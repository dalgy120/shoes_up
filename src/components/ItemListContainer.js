import './ItemListContainer.css'
import ItemList from './ItemList';
import { Information } from '../config';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const params = useParams();

    const consultProducts = (category) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const data = Information.filter(information => information.category === category)
                resolve(data)
            }, 1000)
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
            <h1>Categoria: {params.categoryId}</h1>
            {!!products.length && <ItemList products={products}></ItemList>}
        </div>
    )
}

export default ItemListContainer;