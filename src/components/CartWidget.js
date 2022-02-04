import './CartWidget.css'

function CartWidget() {
    const quantity = 5
    return (
        <button className='cartNavbar'>
            <i className="bi bi-cart"><span className='quantity'>{quantity}</span></i>
        </button>

    )
}

export default CartWidget;