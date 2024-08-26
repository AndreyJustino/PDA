import users from "../database/userData.js";
import User from "../models/userModel.js";

export function getUsers(req, res){
    res.status(200).json(users)
}

export function postUsers(req, res){
    const dadosBody = req.body
    
    const user = new User(
        dadosBody.nome, 
        dadosBody.email, 
        dadosBody.senha
    )

    users.push(user)

    res.status(201).json(users)
}