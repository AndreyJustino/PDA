//https://medium.com/geekculture/node-js-setup-babel-jest-nodemon-2fed147bade5
import { sum } from "./script.js";

describe("testando função de soma", () => {
    test("Soma 2 + 6 e o resultado deve ser 8", () => {
        const resultado = sum(2,6)
        
        expect(resultado).toBe(8)
    })
})