import login_model from "../models/login.model.js";

//metodos crud

export const getAll = async (req, res) => {
    try {

        const login = await login_model.findAll();
        res.json(login);

    } catch (error) {
        res.json({ message: error.message })
    }
}


export const getLogin = async (req, res) => {
    try {

        const login = await login_model.findAll(
            {
                where: { cliente_id: req.params.id }
            }
        );
        res.json(login[0]);

    } catch (error) {
        res.json({ message: error.message })
    }
}


export const createLogin = async (req, res) => {
    try {
        await login_model.create(req.body);
        res.json({
            "message": "Registro creado"
        });

    } catch (error) {
        res.json({ message: error.message })
    }
}

export const updateLogin = async (req, res) => {
    try {
        await login_model.update(req.body, {
            where: { cliente_id: req.params.id }
        });
        res.json({
            "message": "Registro actualizado"
        });

    } catch (error) {
        res.json({ message: error.message })
    }
}

export const deleteLogin = async (req, res) => {
    try {
        await login_model.destroy({
            where: { cliente_id: req.params.id }
        });
        res.json({
            "message": "Registro eliminado"
        });

    } catch (error) {
        res.json({ message: error.message })
    }
}