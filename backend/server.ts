import express from 'express'
import cors from 'cors'
import routes from './router'

const app = express()
const port = process.env.APP_PORT
app.use(cors())
app.use(express.json())

app.use(routes)

app.listen(port, () => {
    console.log("Aplicação rolando")
})

