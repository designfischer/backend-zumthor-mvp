import { Request, Response } from 'express'
import Project from '../../database/models/Project'
import { formatResponse } from './helpers'

const ReferenceProjectController = {
    async getReferenceProjectById(req: Request, res: Response) {
        const { id } = req.params
        try {
            const response = await getReferenceProjectByIdService(id)
            return res.status(response.status).json(response.data)
        } catch(err) {
            return res.status(500).json(err)
        }
    },
    async deleteReferenceProjectById(req: Request, res: Response) {
        const { user_id, id } = req.params        
        try {             
            const response = await deleteReferenceProjectByIdService(user_id, id)
            return res.status(response.status).json(response.data)
        } catch(err) {
            return res.status(500).json(err)
        }
    }
}

export default ReferenceProjectController

async function getReferenceProjectByIdService(id: string) {
    const reference = await Project.findById(id)
    if (!reference) return formatResponse(404, { message: 'Not found' })
    return formatResponse(200, reference)
}

async function deleteReferenceProjectByIdService(user_id: string, id: string) {
    const belongsToUser = await Project.findOne({ user: user_id })
    if (!belongsToUser) return formatResponse(403, { message: 'Not allowed' })
    const deletedReferenceProject = await Project.findByIdAndRemove(id)
    if (!deletedReferenceProject) return formatResponse(404, { message: 'Not found' })
    return formatResponse(200, { message: 'Deleted successfully' })
}