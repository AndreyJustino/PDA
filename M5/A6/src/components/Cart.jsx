import React from 'react'
import { useContext } from 'react'
import {CartContext} from "../context/CartContext"

function Cart() {
    const [cartItem, removeItemFromCart] = useContext(CartContext)

  return (
    <div>
        <h1>Cart</h1>
        {
            cartItem.length === 0 ? (
                <p>
                    Sem itens no carrinho
                </p>
            ) : (
                cartItem.map((item, index) => (
                    <div key={item.id}>
                        <h3>{item.name}</h3>
                        <p>Prince: {item.price}</p>
                        <button onClick={() => removeItemFromCart(item.id)}>
                            Remover Item
                        </button>
                    </div>
                ))
            )
        }
    </div>
  )
}

export default Cart