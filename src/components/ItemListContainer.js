import './ItemListContainer.css'
import ItemList from './ItemList';
import Zapato from '../image/Black-Converse.png'
import { useEffect, useState } from 'react';


const Information = [
    {   id: 108,
        image: Zapato,
        name: 'Zapatilla Run',
        description: 'Modelo de dama',
        price: '8000',
        stock: 5,
        init: 1,
    },
    {   id: 342,
        image: Zapato,
        name: 'Zapatilla Star',
        description: '',
        price: '20000',
        stock: 2,
        init: 1,
    },
    {   id: 119,
        image: Zapato,
        name: 'Zapatilla Chuck',
        description: '',
        price: '10000',
        stock: 3,
        init: 1,
    },
    {   id: 246,
        image: Zapato,
        name: 'Zapatillas Taylor',
        description: '',
        price: '7000',
        stock: 4,
        init: 1,
    }
]


function ItemListContainer(props) {
    const { greeting } = props;
    const [products, setProducts] = useState()

    const consultProducts = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(Information)

            }, 2000)
        })
    }

    useEffect(() => {
        consultProducts().then((data) => {
            setProducts(data);
        })
    }, [])


    return (
        <div className='listContainer'>
            <span className='landing'>{greeting}</span>
            <ItemList products={products}></ItemList>
        </div>
    )
}

export default ItemListContainer;