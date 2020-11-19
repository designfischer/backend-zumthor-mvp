import { Request, Response, NextFunction } from 'express'
import { authService } from '../services/auth'
import { validateOwnership } from '../services/onwership'

export function verifyTokenMiddleware(req: Request, res: Response, next: NextFunction) {
    const auth_id = req.headers.auth_id as string
    const { user_id } = req.params
    
    const hasToken = authService(auth_id)
    if (!hasToken) return res.status(400).json({ message: 'No token' })
       
    const isOnwer = validateOwnership(auth_id, user_id)
    if (!isOnwer) return res.status(403).json({ message: 'Not allowed' })
    
    next()
}