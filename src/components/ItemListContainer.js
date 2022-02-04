import './ItemListContainer.css'

function ItemListContainer(props) {
    const greeting = props.greeting
    return (
        <span className='landing'>{greeting}</span>
    )
}

export default ItemListContainer;