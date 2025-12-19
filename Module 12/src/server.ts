import express, { Request, Response } from 'express'
const app = express()
const port = 5000

app.get('/', (req: Request, res: Response) => {
    res.send('The server is on the go!')
})

app.post('/', (req: Request, res: Response) => {
    console.log(req);
    res.status(201).json({
        success: true,
        message: 'API is working'
    })
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
