import { createContext, useState } from "react"
export const CartContext = createContext()

export function CartProvider({children}) {
    const [cartItens, setCartItens] = useState([])
    
    const addItemToCart = (item) => {
        setCartItens([...cartItens, item])
    }

    const removeItemFromCart = setCartItens(cartItens.filter())

    return(
        <CartContext.Provider value={{cartItens, addItemToCart, removeItemFromCart}}>
            {children}
        </CartContext.Provider>
    )
}

