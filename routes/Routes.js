import express from 'express'
import { DeleteLocation, UpdateLocation, createLocation, getAllLocations, getLocation } from '../controllers/LocationController.js'

const router = express.Router()

// Rutas
router.get('/', getAllLocations)
router.get('/:id', getLocation)
router.post('/', createLocation)
router.put('/:id', UpdateLocation)
router.delete('/:id', DeleteLocation)

export default router