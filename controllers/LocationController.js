import LocationModel from "../models/LocationModel.js";

//** Métodos del CRUD */

// Mostrar todo
export const getAllLocations = async (req, res) => {
    try{
        const locations = await LocationModel.findAll()
        res.json(locations)
    }catch(error){
        res.json({ message: error.message })
    }
}
// Mostrar uno
export const getLocation = async (req, res) => {
    try {
        const location = await LocationModel.findAll({
            where:{
                id: req.params.id
            }
        })
        res.json(location[0])
    } catch (error) {
        res.json({ message: error.message })        
    }
}

// Crear
export const createLocation = async (req, res) => {
    try {
        await LocationModel.create(req.body)
        res.json({
            "message": "¡Registro creado exitosamente!"
        })
    } catch (error) {
        res.json({ message: error.message })        
    }
}

// Editar
export const UpdateLocation = async (req, res) => {
    try {
        await LocationModel.update(req.body, {
            where: {
                id:req.params.id
            }
        })
        res.json({
            "message": "¡Registro actualizado exitosamente!"
        })
    } catch (error) {
        res.json({ message: error.message })      
    }
}

// Eliminar
export const DeleteLocation = async (req, res) => {
    try {
        await LocationModel.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json({
            "message": "¡Registro eliminado exitosamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}