import express from "express"
import router from "./routes/userRouter.js"

const app = express()

app.use(express.json())
app.use("/", router)

app.listen(3000, () => {
    console.log("Server is running on port http://localhost:3000")
})

export default app