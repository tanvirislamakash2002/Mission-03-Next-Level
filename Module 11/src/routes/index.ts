import { readUsers, writeUsers } from "../helpers/fileDb"
import parseBody from "../helpers/parseBody"
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

addRoutes("POST", '/api/users', async (req, res) => {
    const body = await parseBody(req)
    // user json read
    const users = readUsers();

    const newUsers = {
        ...body
    }
    users?.push(newUsers)
    writeUsers(users)
    sendJson(res, 201, { success: true, data: body })
})