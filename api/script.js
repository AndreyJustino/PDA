const buttonGet = document.getElementById("get")
const div = document.getElementById("divArmazena")

function getApi(){
    
    const first = fabrica("GET", "https://rickandmortyapi.com/api/location/?name=Citadel of Ricks")
    const second = fabrica("GET", "https://rickandmortyapi.com/api/location/?name=Interdimensional Cable")
    const third = fabrica("GET", "https://rickandmortyapi.com/api/location/?name=Immortality Field Resort")

}

function fabrica(verbo, url){
    try{
        const xhr = new XMLHttpRequest()
    
        xhr.onload = function() {
            div.innerText += xhr.response 
        }

        xhr.open(verbo, url)
    
        xhr.send()

    } catch(error){
        console.log("Erro linha 26: " + error)
    }
}