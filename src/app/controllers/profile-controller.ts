import { Request, Response } from 'express'
import Project from '../../database/models/Project'
import { formatResponse } from './helpers'

const ProfileController = {
    async getProfileById(req: Request, res: Response) {
        const { user_id } = req.params
        try {
            const response = await getProfileByIdService(user_id)
            return res.status(response.status).json(response.data)
        } catch(err) {
            return res.status(500).json(err)
        }
    }
}

export default ProfileController

async function getProfileByIdService(user_id: string) {
    const usersProjectsAndReferences = await Project.find({ user: user_id })
    if (usersProjectsAndReferences.length === 0) return formatResponse(404, { message: 'Not found' })
    return formatResponse(200, usersProjectsAndReferences)
}