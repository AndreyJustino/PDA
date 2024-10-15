import React from 'react'
import { useCart } from '../context/Cart.context'

function CartList() {
    const {cart, setCart} = useCart()
  return (
    <ul>
        {
            cart ? (
                cart.map((item, index) => (
                    <li key={index}>
                        <h2>{item.name}</h2>
                        <p>{item.price}</p>
                    </li>
                    )
                )
            ) : (
                <li>Nenhum produto no cart</li>
            )
        }
    </ul>
  )
}

export default CartList