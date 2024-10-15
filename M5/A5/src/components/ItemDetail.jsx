import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ItemDetail = () => {
  const { nomePoke } = useParams();
  const [pokemon, setPokemon] = useState();

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${nomePoke}`)
        .then(response => response.json())
        .then((data) => {
            
            setPokemon(data)
        })

    }, [])

  return (
    <div>
      <h2>Detalhes do Item</h2>
      <p>Nome pokemon: {nomePoke}</p>
    </div>
  );
};
export default ItemDetail;