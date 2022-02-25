import React, { useState, createContext } from "react";

export const CartContext = createContext();

const CartProvider = ({children}) => {
    const [products, setProducts] = useState([])
    
    const addToCart = (product) => {
        const inCart = products.findIndex( prod => prod.id === product.id);
        let tempProd = products.slice();
        if(inCart !== -1){
            tempProd[inCart].quantity = tempProd[inCart].quantity + product.quantity;
        }else{
            tempProd.push(product);
        }
        setProducts([...tempProd])
    }

    const removeItem = (id) => {
        let tempProd = products.map((product) =>  {
            if(product.id !== id) return product
        }).filter(Boolean);
        
        setProducts([...tempProd])
    }
    
    const clear = () => {
        setProducts([])
    }

    const isInCart = (id) => {
        const inCart = products.findIndex( prod => prod.id === id);
        if(inCart !== -1){  
            return products[inCart].quantity
        }
        return 0
    } 
    return <CartContext.Provider value={{products, addToCart, removeItem, clear, isInCart}}>
            {children}
    </CartContext.Provider>
}

export default CartProvider;