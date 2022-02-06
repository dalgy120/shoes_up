import './ItemListContainer.css'
import ItemCount from './ItemCount';

function ItemListContainer(props) {
    const {greeting} = props;
    function onAdd(quantity) {
        console.log(quantity);
    }
    return (
        <div className='listContainer'>
        <span className='landing'>{greeting}</span>
        <ItemCount stock={5} initial={1} onAdd={onAdd}></ItemCount>
        </div>
    )
}

export default ItemListContainer;