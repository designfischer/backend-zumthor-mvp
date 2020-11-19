import { Router } from 'express'

import UserController from '../controllers/user-controller'
import SessionController from '../controllers/session-controller'
import ReferenceController from '../controllers/reference-controller'
import ProjectController from '../controllers/project-controller'
import ProfileController from '../controllers/profile-controller'
import ReferenceProjectController from '../controllers/reference-project-controller'

import { verifyTokenMiddleware } from '../middleware/auth'

const routes = Router()

routes.get('/', (req, res) => res.send('olá, mundo'))

routes.post('/users', UserController.createUser)
routes.get('/users', UserController.getUsers)
routes.delete('/users/:user_id', verifyTokenMiddleware, UserController.deleteUser)

routes.post('/sessions', SessionController.createSession)

routes.post('/users/:user_id/references', verifyTokenMiddleware, ReferenceController.createReference)
routes.post('/users/:user_id/projects', verifyTokenMiddleware, ProjectController.createProject)

routes.get('/referencesprojects/:id', ReferenceProjectController.getReferenceProjectById)
routes.delete('/users/:user_id/referencesprojects/:id', verifyTokenMiddleware, ReferenceProjectController.deleteReferenceProjectById)

routes.get('/profiles/:user_id', ProfileController.getProfileById)

export default routes