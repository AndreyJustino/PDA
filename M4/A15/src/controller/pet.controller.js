import { Pet } from "../model/pet.model.js";

export async function getAllPet(req, res){
    try{
        const pets = await Pet.findAll();

        res.status(200).json(pets)
    } catch(error){
        res.status(500).send(error);
    }
}

export async function creatPet(req,res){
    try{
        const newPet = req.body
        const pets = await Pet.create(newPet)

        res.status(202).send({
            mensagem: "Criado com sucesso!",
            pet: pets
        })
    }catch(error){
        res.status(400).send({
            mensagem:"erro em createPet",
            erro: error
        })
    }
}

export async function updatePet(req,res){
    try{
        const id = req.params.id
        const newPet = req.body

        const pet = await Pet.findByPk(id)
        
        pet.update(newPet)

        res.status(200).send("Pet atualizado!")

    }catch(error){
        res.status(400).send({
            mensagem: "Erro ao atualizar o pet",
            erro: error
        })
    }
}

export async function deletePet(req,res){
    try{
        const id = req.params.id
        
        const pet = await Pet.findByPk(id)

        pet.destroy()

        res.status(200).send("Pet deletado!")
    }catch(error){
        res.status(400).send({
            mensagem: "Erro ao deletar o pet",
            erro: error
        })
    }
}