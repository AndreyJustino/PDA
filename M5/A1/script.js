document.getElementById("formCadastro").addEventListener("submit", async (e) => {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  const user = {
    name,
    email,
    password,
  };

  let response;

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://cybershield-api.onrender.com/register", true);
  xhr.setRequestHeader("Content-Type", "application/json");

  const promise = new Promise((resolve, reject) => {
    xhr.onload = function () {
      if (xhr.status === 201) {
        console.log("Usuario cadastrado com sucesso");
        resolve(JSON.parse(xhr.responseText));
      } else {
        console.log("Erro ao cadastrar usuario", xhr.responseText);
        resolve(JSON.parse(xhr.responseText));
      }
    };
  });

  xhr.send(JSON.stringify(user));
  response = await promise;
  const paragrafo = document.getElementById("paragrafo-mensagem")
  paragrafo.style.display = "block"
  paragrafo.innerText = response.message 
  
});

