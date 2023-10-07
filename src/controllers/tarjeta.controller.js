import tarjeta_model from "../models/tarjeta.model.js";

//metodos crud

export const getAll = async (req, res) => {
    try {

        const tarjeta = await tarjeta_model.findAll();
        res.json(tarjeta);

    } catch (error) {
        res.json({ message: error.message })
    }
}


export const gettarjeta = async (req, res) => {
    try {

        const tarjeta = await tarjeta_model.findAll(
            {
                where: { id: req.params.id }
            }
        );
        res.json(tarjeta[0]);

    } catch (error) {
        res.json({ message: error.message })
    }
}


export const createtarjeta = async (req, res) => {
    try {
        await tarjeta_model.create(req.body);
        res.json({
            "message": "Registro creado"
        });

    } catch (error) {
        res.json({ message: error.message })
    }
}

export const updatetarjeta = async (req, res) => {
    try {
        await tarjeta_model.update(req.body, {
            where: { id: req.params.id }
        });
        res.json({
            "message": "Registro actualizado"
        });

    } catch (error) {
        res.json({ message: error.message })
    }
}

export const deletetarjeta = async (req, res) => {
    try {
        await tarjeta_model.destroy({
            where: { id: req.params.id }
        });
        res.json({
            "message": "Registro eliminado"
        });

    } catch (error) {
        res.json({ message: error.message })
    }
}