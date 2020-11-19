import { Request, Response } from 'express'
import Project from '../../database/models/Project'
import { calculateProjectScore } from '../../brainjs'
import { formatResponse } from './helpers'
import { validateOwnership } from '../services/onwership'

const ProjectController = {
    async createProject(req: Request, res: Response) {
        const body: IProject = req.body
        const { user_id } = req.params        
        
        try {
            const response = await createProjectService(body, user_id)
            return res.status(response.status).json(response.data)
        } catch(err) {
            return res.status(500).json(err)
        }        
    }
}

export default ProjectController

async function createProjectService(body: IProject, user_id: string) {
    const category = 'project'

    const references = await Project.find({ user: user_id })
    if (references.length < 5) return formatResponse(400, { message: 'Not enough references' })

    const newProject = {
        ...body,
        user: user_id,
        category
    }

    const score = await calculateProjectScore(references, newProject)
        
    const project = await Project.create({            
        ...newProject,
        score
    })
    return formatResponse(201, project)    
}

