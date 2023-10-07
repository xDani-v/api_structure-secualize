import prestamos_model from "../models/prestamos.model.js";

//metodos crud

export const getAll = async (req, res) => {
    try {

        const prestamos = await prestamos_model.findAll();
        res.json(prestamos);

    } catch (error) {
        res.json({ message: error.message })
    }
}


export const getprestamos = async (req, res) => {
    try {

        const prestamos = await prestamos_model.findAll(
            {
                where: { id: req.params.id }
            }
        );
        res.json(prestamos[0]);

    } catch (error) {
        res.json({ message: error.message })
    }
}


export const createprestamos = async (req, res) => {
    try {
        await prestamos_model.create(req.body);
        res.json({
            "message": "Registro creado"
        });

    } catch (error) {
        res.json({ message: error.message })
    }
}

export const updateprestamos = async (req, res) => {
    try {
        await prestamos_model.update(req.body, {
            where: { id: req.params.id }
        });
        res.json({
            "message": "Registro actualizado"
        });

    } catch (error) {
        res.json({ message: error.message })
    }
}

export const deleteprestamos = async (req, res) => {
    try {
        await prestamos_model.destroy({
            where: { id: req.params.id }
        });
        res.json({
            "message": "Registro eliminado"
        });

    } catch (error) {
        res.json({ message: error.message })
    }
}