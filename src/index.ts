import express from "express"
import statusRoute from "./routes/status.route"
import usersRoute from "./routes/users.route"

const app = express()

// Configuração da aplicação
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Configuração de Rotas
app.use(usersRoute)
app.use(statusRoute)

// Iniciando Servidor
app.listen(3000, () => {
    console.log('Aplicação rodando na porta 3000!')
})