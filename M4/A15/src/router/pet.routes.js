import { Router } from "express";
import { creatPet, deletePet, getAllPet, updatePet } from "../controller/pet.controller.js";

const routes = Router()

routes.get("/getPet", getAllPet)
routes.post("/creatPet", creatPet)
routes.put("/updatePet/:id", updatePet)
routes.delete("/deletePet/:id", deletePet)

export default routes