// TODO: Importar el modelo y controladores de reservas, luego vincular rutas con controladores
const express = require('express');
const router = express.Router();
const { eliminarReservas, actualizarReserva, obtenerReservas, crearReservas} = require('../controllers/reserva.controllers')

// ==========================================
//         Rutas para renderizar vistas
// ==========================================

//vista General
router.get('/reservas',(req,res)=>{
    res.render('index')
})
//Vista Crear

router.get('/reservas/create',(req,res)=>{
    res.render('crear')
})
//vista editar
router.get('/reservas/editar/:id', (req, res) => {
    res.render('editar', { id: req.params.id });
});



// Obtener todas las reservas

// Formulario para crear una reserva

// Formulario para actualizar una reserva

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
router.get('/api/reservas/', obtenerReservas);


router.post('/api/reservas/create',  crearReservas);

router.put('/api/reservas/:id', actualizarReserva);

router.delete('/api/reservas/:id', eliminarReservas);

 
 
 module.exports = router;