import { useContext } from 'react'
import {CartContext} from "../context/CartContext"

function ItemList() {
  const itens = [
    {id: 1, name: "Perfume", price: 190},
    {id: 2, name: "Xbox", price: 2500},
    {id: 3, name: "Lace", price: 1900},
    {id: 4, name: "Chinelo", price: 50},
  ] 

  return (
    <div>
      {
        itens.map((value) => (
          <div key={value.id}>
            <h2>{value.name}</h2>
            <p>Price: R$ {value.price}</p>
            <button onClick={() => addItemToCart(item)}>
              Adicionar no carrinho
            </button>
          </div>
        ))
          
      }
    </div>
  )
}

export default ItemList