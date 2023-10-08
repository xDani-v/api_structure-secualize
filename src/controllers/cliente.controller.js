import jwt from 'jsonwebtoken';
import { compareSync } from 'bcrypt';
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
const secretKey = 'E&2u*F@9p$LwXs#1';
// Función de autenticación
export const authenticate = async (req, res) => {
    const { numero_identificacion, password } = req.body;

    try {
        // Buscar al cliente por número de identificación
        const cliente = await cliente_model.findOne({ where: { numero_identificacion } });

        if (!cliente) {
            return res.status(404).json({ message: 'Cliente no encontrado' });
        }

        // Verificar la contraseña como texto sin cifrar
        if (password !== cliente.password) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        // Generar un token de autenticación
        const token = jwt.sign({ clienteId: cliente.id }, secretKey, { expiresIn: '1h' });

        // Enviar el token como respuesta
        res.status(200).json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error de servidor' });
    }
};
