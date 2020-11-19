import { Request, Response } from 'express'
import Project from '../../database/models/Project'
import { formatResponse } from './helpers'

const ReferenceController = {
    async createReference(req: Request, res: Response) {
        const body: IProject = req.body
        const { user_id } = req.params

        try {
            const response = await createReferenceService(body, user_id)
            return res.status(response.status).json(response.data)
        } catch(err) {
            return res.status(500).json(err)
        }        
    }
}

export default ReferenceController

async function createReferenceService(body: IProject, user_id: string) {
    const category = 'reference'        
    const project = await Project.create({            
        ...body,
        user: user_id,
        category
    })
    return formatResponse(201, project)    
}
