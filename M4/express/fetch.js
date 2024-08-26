fetch("http://localhost:3000/").then((res) => {
    if(!res.ok){
        throw new Error("Error");
    }

    return res.text()
})
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.error("erro aqui linha 10 ",error)
})

fetch("http://localhost:3000/pda", {
    method: "post",
    body: {"test": "deu bom aqui no body"},
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})
.then((res) => {
    return res.text()
})
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.error("erro linha 25", error)
})

