const sequelize = require('../conexion')

const createPets = async (req, res) =>{
    const {category, name, photoUrls, tags, status} = req.body

    let arrayInsertMeal = [`${name}`, `${photoUrls}`, `${category.id}`, `${tags.id}`, `${status}`]
    console.log(arrayInsertMeal);

    try {
        const result = await sequelize.query('INSERT INTO pets (name, photoUrl, id_category, id_tag, id_status) VALUES( ?, ?, ?, ?, ?)',
        {replacements: arrayInsertMeal , type: sequelize.QueryTypes.INSERT })
        res.status(200).json({
            message: 'Mascota Creada',
            result
        })
    } catch (error) {
        if (error.name) {
            res.status(400).json({
                error,
                message : 'error en la creación'
            })
        } else {
            res.status(500).json({
                error,
                message : 'Error inesperado'
            })
        }
    }
}

const getPetsByStatus = async (req, res) =>{
    try {
        console.log(req.query.status);
        const result = await sequelize.query(`SELECT * FROM pets 
        WHERE id_status = ${req.query.status}`, 
        {type: sequelize.QueryTypes.SELECT})
        res.status(200).json({result})
    } catch (error) {
        if (error.name) {
            res.status(404).json({
                error,
                message: 'error en la búsqueda'
            })
        } else {
            res.status(500).json({
                error,
                message : 'Error inesperado'
            })
        }
    } 
}

const getPetsId = async (req, res) =>{
    try {
        const result = await sequelize.query(`SELECT * FROM pets 
        WHERE id_pet = ${req.params.petsId}`, 
        {type: sequelize.QueryTypes.SELECT})
        res.status(200).json({result})
    } catch (error) {
        if (error.name) {
            res.status(404).json({
                error,
                message: 'error en la búsqueda'
            })
        } else {
            res.status(500).json({
                error,
                message : 'Error inesperado'
            })
        }
    } 
}

const updatePets = async (req, res) =>{
    const  {id, category, name, photoUrls, tags, status} = req.body
    console.log(id, name)

    try {
        const result = await sequelize.query(`UPDATE pets 
        SET name = "${name}",  
        photoUrl = "${photoUrls}",
        id_category = "${category.id}",
        id_tag = "${tags.id}",
        id_status = "${status}"
        WHERE id_pet = ${id}`,
        { type: sequelize.QueryTypes.INSERT })
        res.status(200).json({
            message: 'Mascota Actulizado',
            result,
    })

    } catch (error) {
        if (error.name) {
            res.status(400).json({
                error,
                message: 'error en la actualización'
            })
        } else {
            res.status(500).json({
                error,
                message : 'Error inesperado'
            })
        }
    }
}

const deletePetsById = async (req, res) =>{
    try {
        const result = await sequelize.query(`DELETE FROM pets WHERE id_pet = ${req.params.petsId}`)
        res.status(200).json({
            message: 'Mascota eliminada',
            result
        })
    } catch (error) {
        if (error.name) {
            res.status(400).json({
                error,
                message: 'error en la eliminación'
            })
        } else {
            res.status(500).json({
                error,
                message : 'Error inesperado'
            })
        }
    }
}

const updatePetsById = async (req, res) =>{
    const {name, status} = req.body

    try {
        const result = await sequelize.query(`UPDATE pets 
        SET name = "${name}",
        id_status = "${status}"
        WHERE id_pet = ${req.params.petsId}`,
        { type: sequelize.QueryTypes.INSERT })
        res.status(200).json({
            message: 'Mascota Actualizada',
            result
        })
    } catch (error) {
        if (error.name) {
            res.status(400).json({
                error,
                message : 'error en la Actualización'
            })
        } else {
            res.status(500).json({
                error,
                message : 'Error inesperado'
            })
        }
    }
}

exports.createPets = createPets
exports.getPetsByStatus = getPetsByStatus
exports.getPetsId = getPetsId
exports.updatePets = updatePets
exports.deletePetsById = deletePetsById
exports.updatePetsById = updatePetsById