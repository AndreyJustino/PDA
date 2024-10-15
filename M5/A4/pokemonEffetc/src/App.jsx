import { useEffect, useState } from "react"

function App() {
  const [count, setCount] = useState(20)
  const [itens, setItens] = useState([])

  useEffect(() => {
    try{
      fetch(`https://pokeapi.co/api/v2/pokemon?limit=${count}}`).then(
        response => {
          if (!response.ok) {
            throw new Error('Erro na requisição');
          }
          return response.json()

        }
      )
      .then(data => {
        const array = data.results

        let dados = array.map(element => {
          const id = element.url.split('/')
          return {
            nome: element.name,
            img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id[6]}.png`
          }
        });
        setItens(dados)
        console.log(dados)
        
      })


    }catch(error){
      console.error(error.message)
    }
    
  }, [count])

  
  
  return (
    <>
      <div>
        {itens.map((item, index) => (
          <div key={index}>
            <h3>{item.nome}</h3>
            <img src={item.img} alt={item.nome} />
          </div>
        ))}
      </div>

      <button onClick={() => {
        setCount(count + 20)
      }}>Enviar</button>
    </>
  )
}

export default App
