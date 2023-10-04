import cuenta_model from "../models/cuenta.model.js";

//metodos crud

export const getAll = async (req, res) => {
    try {

        const cuenta = await cuenta_model.findAll();
        res.json(cuenta);

    } catch (error) {
        res.json({ message: error.message })
    }
}


export const getcuenta = async (req, res) => {
    try {

        const cuenta = await cuenta_model.findAll(
            {
                where: { cuenta_id: req.params.id }
            }
        );
        res.json(cuenta[0]);

    } catch (error) {
        res.json({ message: error.message })
    }
}


export const createcuenta = async (req, res) => {
    try {
        await cuenta_model.create(req.body);
        res.json({
            "message": "Registro creado"
        });

    } catch (error) {
        res.json({ message: error.message })
    }
}

export const updatecuenta = async (req, res) => {
    try {
        await cuenta_model.update(req.body, {
            where: { cuenta_id: req.params.id }
        });
        res.json({
            "message": "Registro actualizado"
        });

    } catch (error) {
        res.json({ message: error.message })
    }
}

export const deletecuenta = async (req, res) => {
    try {
        await cuenta_model.destroy({
            where: { cuenta_id: req.params.id }
        });
        res.json({
            "message": "Registro eliminado"
        });

    } catch (error) {
        res.json({ message: error.message })
    }
}