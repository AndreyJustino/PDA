document.getElementById("formLogin").addEventListener("submit", async (e) => {
  e.preventDefault();

  let email = document.getElementById("emailLogin").value;
  let password = document.getElementById("passwordLogin").value;

  const user = {
    email,
    password,
  };

  let response;

  fetch(`https://cybershield-api.onrender.com/getUser/${email}`)
  .then(data => {
    return data.json();
  })
  .then(response => {


    const paragrafo = document.getElementById("paragrafo-mensagem")
    paragrafo.style.display = "block"
    paragrafo.innerText = response.message 
  })


});
