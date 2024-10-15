import { createContext, useContext, useState } from "react";

export const ProductContext = createContext() // 1° cria contexto

export function ProviderProduct({children}){ // props é um componente aqui
    const array = [ // dados que quero prover
        {
            id: 1,
            name: "Item 1",
            price: 10.99,
        },
        {
            id: 2,
            name: "Item 2",
            price: 5.99,
        },
        {
            id: 3,
            name: "Item 3",
            price: 7.99,
        }
    ] 
    
    const [list, setList] = useState(array) // passar esse state para ser usado por outros componentes

    return(
        <ProductContext.Provider value={{list, setList}}> {/* 2° criar provider */}
            {children} {/* todo componente dentro do provider tera acesso ao state passado */}
        </ProductContext.Provider>
    )
}

// 3° criar hook para ser importado e usada em outras partes
export const useProduct = () => {
    return (
        useContext(ProductContext)
    )
}