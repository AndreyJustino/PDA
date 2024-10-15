import { createContext, useContext, useState } from "react";

export const CartContext = createContext() // 1° criar contexto

export function CartProvider({children}){ // 2° criar provider e passar children/componente 
    const [cart, setCart] = useState([])

    return(
        <CartContext.Provider value={{cart, setCart}}>
            {children}
        </CartContext.Provider>
    )
}

// 3° criar hook
export function useCart(){
    return(
        useContext(CartContext)
    )
}