import movimientos_model from "../models/movimientos.model.js";

//metodos crud

export const getAll = async (req, res) => {
    try {

        const movimientos = await movimientos_model.findAll();
        res.json(movimientos);

    } catch (error) {
        res.json({ message: error.message })
    }
}


export const getmovimientos = async (req, res) => {
    try {

        const movimientos = await movimientos_model.findAll(
            {
                where: { id: req.params.id }
            }
        );
        res.json(movimientos[0]);

    } catch (error) {
        res.json({ message: error.message })
    }
}


export const createmovimientos = async (req, res) => {
    try {
        await movimientos_model.create(req.body);
        res.json({
            "message": "Registro creado"
        });

    } catch (error) {
        res.json({ message: error.message })
    }
}

export const updatemovimientos = async (req, res) => {
    try {
        await movimientos_model.update(req.body, {
            where: { id: req.params.id }
        });
        res.json({
            "message": "Registro actualizado"
        });

    } catch (error) {
        res.json({ message: error.message })
    }
}

export const deletemovimientos = async (req, res) => {
    try {
        await movimientos_model.destroy({
            where: { id: req.params.id }
        });
        res.json({
            "message": "Registro eliminado"
        });

    } catch (error) {
        res.json({ message: error.message })
    }
}