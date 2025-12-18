import addRoutes from "../helpers/RouteHandler"
import sendJson from "../helpers/send.json"

addRoutes("GET", '/', (req, res) => {
    sendJson(res, 200, {
        message: 'hello from node js with typescript...',
        path: req.url
    })
})

addRoutes('GET', '/api', (req, res) => {
    sendJson(res, 200, {
        message: 'Health status ok',
        path: req.url,
    })
})