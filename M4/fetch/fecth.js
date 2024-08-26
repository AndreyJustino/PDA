function trazPokemon() {
  let valor = document.querySelector("#busca").value;
  let pokemon = valor.toLowerCase()
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => {
      if (!response.ok) {
        throw "Erro de rede";
      }

      return response.json();
    })
    .then((data) => {
        let fotoPokemon = document.querySelector("#imagem")

        return fotoPokemon.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`
    })
    
    .catch((error) => {
      console.log(error);
    });
}

fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
    .then((response) => {
      if (!response.ok) {
        throw "Erro de rede";
      }

      return response.json();
    })
    .then((data) => {
        console.log(data)
    })
    
    .catch((error) => {
      console.log(error);
    });
