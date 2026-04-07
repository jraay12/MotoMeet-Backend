import  express  from "express";
import { Request, Response } from "express";
const app = express()

app.get("/health", (req: Request, res: Response) => {
  res.send("Server is running!")
})

app.use(express.json())

export default app