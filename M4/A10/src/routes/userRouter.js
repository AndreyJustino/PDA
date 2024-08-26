import {Router} from "express"

import { getUsers, postUsers } from "../controller/userController.js"

const router = Router()

router.get("/usuarios", getUsers)
router.post("/criar/usuario", postUsers)

export default router