import { Router } from "express";
import { getAll, create, remove } from '../controllers/servers.js'

const router = Router()

// Get all elements
router.get('/api/server', getAll)

// Create element
router.post('/api/server', create)

// Remove element
router.delete('/api/server/:id', remove)

// another routers that you can use for update 
// router.put()
// router.patch()

export default router