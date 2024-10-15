import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ItemList = () => {
  const [item, setItem] = useState([])

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=20`)
        .then(response => response.json())
        .then((data) => {
            setItem(data.results)
            
        })
    }, [])


  return (
    <ul>
      {item.map(item => (
        <li>
          <Link to={`/item/${item.name}`}>{item.name}</Link>
        </li>
      ))}

    </ul>
  );
};
export default ItemList;