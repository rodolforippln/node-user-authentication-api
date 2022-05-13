import express, { Request, Response, NextFunction } from "express"

const app = express()

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ foo: 'bar 1' })
})

app.listen(3000, () => {
    console.log('Aplicação rodando na porta 3000!')
})