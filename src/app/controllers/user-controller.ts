import { Request, Response } from 'express'
import User from '../../database/models/User'
import { formatResponse } from './helpers'

const UserController = {
    async createUser(req: Request, res: Response) {
        const body: IUser = req.body
        try {  
            const response = await createUserService(body)
            return res.status(response.status).json(response.data)  
        } catch(err) {
            return res.status(500).json(err)
        }        
    },
    async getUsers(req: Request, res: Response) {
        try {
            const response = await getUsersService()
            return res.status(response.status).json(response.data)
        } catch(err) {
            return res.status(500).json(err)
        }        
    },
    async deleteUser(req: Request, res: Response) {
        const { user_id } = req.params
        
        try {
            const response = await deleteUserService(user_id)
            return res.status(response.status).json(response.data)
        } catch(err) {
            return res.status(500).json(err)
        }        
    }
}

export default UserController

async function createUserService(data: IUser) {    
    const alreadyExists = await User.findOne({ email: data.email })
    if (alreadyExists) return formatResponse(409, { message: 'Users already exists' })
    const user = await User.create(data)
    return formatResponse(201, user)    
}

async function getUsersService() {
    const users = await User.find()
    return formatResponse(200, users)    
}

async function deleteUserService(user_id: string) {    
    const deletedUser = await User.findByIdAndRemove(user_id)
    if (!deletedUser) return formatResponse(404, { message: 'Not found' })
    return formatResponse(200, { message: 'Deleted succesffully' })
}
