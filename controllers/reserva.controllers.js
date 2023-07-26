const ctrlReservas = {};
const Reserva = require('../models/Reserva');

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
// Obtener una reserva
// Crear una reserva
// Actualizar una reserva
// Eliminar una reserva de forma lógica


// Ctrl para obtener todas las tareas
ctrlReservas.obtenerReservas = async (req, res) => {
    try {
        const reservas = await Reserva.findAll({
            where: {
                estado: true,
            }
        });

        // if (!reservas || Reserva.length === 0) {
        //     throw ({
        //         status: 404,
        //         message: 'No hay tareas registradas'
        //     })
        // }

        return res.json(reservas);
    } catch (error) {
        return res.status(error.status || 500).json({
            message: error.message || 'Error interno del servidor'
        });
    }
}


// Ctrl para crear una tarea
ctrlReservas.crearReservas = async (req, res) => {
    const { nombre, apellido,codigo } = req.body;

    console.log('req.body')
    console.log(req.body)

    try {
        const reservas = await Reserva.create({
            nombre,
            apellido,
            destino,
            origen,
            fechaSalida,
            codigo
        });

        if (!reservas) {
            throw ({
                status: 400,
                message: 'No se pudo crear la reserva'
            })
        }

        return res.json(reservas);
    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json(error.message || 'Error interno del servidor');
    }
}

// Ctrl para actualizar una tarea
ctrlReservas.actualizarReserva = async (req, res) => {
    const { id } = req.params;
    const { nombre, apellido,codigo } = req.body;
    
    try {
        const reservaActualizada = await Reserva.update({
            nombre,
            apellido,
            destino,
            origen,
            fechaSalida,
            codigo
        }, {
            where: {
                id,
                estado: true
            }
        });

        if (!reservaActualizada) {
            throw ({
                status: 400,
                message: 'No se pudo actualizar la Reserva'
            })
        }

        return res.json({
            message: 'Reserva actualizada correctamente',
            reservaActualizada
            
        });
    } catch (error) {
        return res.status(error.status || 500).json(error.message || 'Error interno del servidor');
    }
}

ctrlReservas.eliminarReservas = async (req, res) => {
    const { id } = req.params;

    try {
        const reservaEliminada = await Reserva.update({
            estado: false
        }, {
            where: {
                id,
                estado: true
            }
        });

        if (!reservaEliminada) {
            throw ({
                status: 400,
                message: 'No se pudo eliminar la reserva'
            })
        }

        return res.json({reservaEliminada, message: 'Reserva eliminada correctamente' });
    } catch (error) {
        return res.status(error.status || 500).json(error.message || 'Error interno del servidor');
    }
}

module.exports = ctrlReservas;