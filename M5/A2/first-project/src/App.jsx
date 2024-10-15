import { useState } from "react"
import style from "./App.module.css"
import Label from "./components/Label"
import Button from "./components/Button"

function App() {

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  function enviar(e){
    e.preventDefault()
    console.table({name, email, password})
  }

  return (
    <>
      <form action="">
        <Label 
            type={"text"} 
            placeholder={"Digite seu nome"} 
            id={"name"}
            text={"Nome:"}
            event={(e) => {
              setName(e.target.value)
            }}
            />

        <Label 
          type={"email"} 
          placeholder={"Digite seu email"} 
          id={"email"}
          text={"E-mail:"}
          event={(e) => {
            setEmail(e.target.value)
          }}
          />

        <Label 
          type={"password"} 
          placeholder={"Digite sua senha"} 
          id={"password"}
          text={"Senha:"}
          event={(e) => {
            setPassword(e.target.value)
          }}
          />

        <Button functionEvent={enviar} text={"Enviar"}/>

      </form>
    </>
  )
}

export default App
