import cliente_model from "../models/cliente.model.js";

//metodos crud

export const getAll = async (req, res) => {
    try {

        const cliente = await cliente_model.findAll();
        res.json(cliente);

    } catch (error) {
        res.json({ message: error.message })
    }
}


export const getcliente = async (req, res) => {
    try {

        const cliente = await cliente_model.findAll(
            {
                where: { id: req.params.id }
            }
        );
        res.json(cliente[0]);

    } catch (error) {
        res.json({ message: error.message })
    }
}


export const createcliente = async (req, res) => {
    try {
        await cliente_model.create(req.body);
        res.json({
            "message": "Registro creado"
        });

    } catch (error) {
        res.json({ message: error.message })
    }
}

export const updatecliente = async (req, res) => {
    try {
        await cliente_model.update(req.body, {
            where: { id: req.params.id }
        });
        res.json({
            "message": "Registro actualizado"
        });

    } catch (error) {
        res.json({ message: error.message })
    }
}

export const deletecliente = async (req, res) => {
    try {
        await cliente_model.destroy({
            where: { id: req.params.id }
        });
        res.json({
            "message": "Registro eliminado"
        });

    } catch (error) {
        res.json({ message: error.message })
    }
}