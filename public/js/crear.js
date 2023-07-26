formNuevaReserva.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Se obtienen los valores de cada input
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const destino = document.getElementById('destino').value;
    const fechaSalida = document.getElementById('fechaSalida').value;
    const origen = document.getElementById('origen').value;
    const codigo = document.getElementById('codigo').value;
 

    // Se crea un objeto con los valores de los inputs
    const nuevaReserva = {
        nombre,
        apellido,
        codigo,
        destino,
        origen,
        fechaSalida
    };

    // Se envia la peticion POST
    try {
        const res = await fetch(`http://localhost:3005/api/reservas/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(nuevaReserva)
        });

        const data = await res.json();
        console.log({ data });
        // formNuevaReserva.reset();
        
        Swal.fire({
            icon: 'success',
            title: 'Reserva creada',
            text: 'La Reserva se ha creado correctamente'
        })

        setTimeout(() => {
            window.location.href = '/reservas';
        }, 2000);
    } catch (error) {
        console.log(error);
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: error.message
        })
    }
});
