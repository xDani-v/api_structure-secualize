import blogmodel from "../models/blogmodel.js";

//metodos crud

export const getAll = async (req, res) => {
    try {

        const libros = await blogmodel.findAll();
        res.json(libros);

    } catch (error) {
        res.json({ message: error.message })
    }
}


export const getBook = async (req, res) => {
    try {

        const libros = await blogmodel.findAll(
            {
                where: { id: req.params.id }
            }
        );
        res.json(libros[0]);

    } catch (error) {
        res.json({ message: error.message })
    }
}


export const createBook = async (req, res) => {
    try {
        await blogmodel.create(req.body);
        res.json({
            "message": "Registro creado"
        });

    } catch (error) {
        res.json({ message: error.message })
    }
}

export const updateBook = async (req, res) => {
    try {
        await blogmodel.update(req.body, {
            where: { id: req.params.id }
        });
        res.json({
            "message": "Registro actualizado"
        });

    } catch (error) {
        res.json({ message: error.message })
    }
}

export const deleteBook = async (req, res) => {
    try {
        await blogmodel.destroy({
            where: { id: req.params.id }
        });
        res.json({
            "message": "Registro eliminado"
        });

    } catch (error) {
        res.json({ message: error.message })
    }
}