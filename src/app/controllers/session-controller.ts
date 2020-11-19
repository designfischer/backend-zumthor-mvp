import { Request, Response } from 'express'
import User from '../../database/models/User'
import { formatResponse } from './helpers'

const SessionController = {
    async createSession(req: Request, res: Response) {
        const body: IUser = req.body
        const response = await createSessionService(body)
        return res.status(response.status).json(response.data)
    }
}

export default SessionController

async function createSessionService(body: IUser) {
    try {
        const user = await User.findOne({ email: body.email })
        if (!user) return formatResponse(404, { message: 'Not found' })
        return formatResponse(200, user)
    } catch(err) {
        return formatResponse(500, err)
    }
}