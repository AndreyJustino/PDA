import React from 'react'
import { useProduct } from '../context/Product.context'
import { useCart } from '../context/Cart.context'

function ItemList() {
    const {list, setList} = useProduct() // importando o hook
    const {cart, setCart} = useCart()
  return (
    <ul>
        {
            list ? (
                list.map((item, index) => (
                    <li key={index}>
                        <h2>{item.name}</h2>
                        <p>{item.price}</p>
                        <button onClick={() => {
                            setCart([...cart, item])
                        }}>Add cart</button>
                    </li>
                    )
                )
            ) : (
                <li>Nenhum produto na lista</li>
            )
        }
    </ul>
  )
}

export default ItemList