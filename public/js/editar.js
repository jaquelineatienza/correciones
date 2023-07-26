


const formEditar = document.getElementById('formEditar');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const fechaSalida = document.getElementById('fechaSalida');
const destino = document.getElementById('destino');
const origen = document.getElementById('origen');
const codigo = document.getElementById('codigo');
// const id = formEditar.id;


// Funcion para obtener los datos de la reserva cuando se carga la página
document.addEventListener('DOMContentLoaded', async () => {
    const url = window.location.href;
    const parts = url.split('/');
  const id = parts[parts.length - 1];
  const response = await fetch(`http://localhost:3005/api/reservas/${id}`);
  const data = await response.json();
  nombre.value = data.nombre;
  apellido.value = data.apellido;
  origen.value = data.origen;
  destino.value = data.destino;
  fechaSalida.value = data.fechaSalida;
  codigo.value = data.codigo;
});


// Escuchar el evento submit
formEditar.addEventListener('submit', async (e) => {
  e.preventDefault();
  // const id = parts[parts.length - 1];
  const url = window.location.href;
  const parts = url.split('/');
 
  const id = parts[parts.length - 1];

 const nombre = document.getElementById('nombre').value;
 const apellido = document.getElementById('apellido').value;
 const fechaSalida = document.getElementById('fechaSalida').value;
 const destino = document.getElementById('destino').value;
 const origen = document.getElementById('origen').value;
 const codigo = document.getElementById('codigo').value;
const formData = new FormData();
formData.append("id",id);
 formData.append('nombre', nombre);
 formData.append('apellido', apellido);
 formData.append('fechaSalida', fechaSalida);
 formData.append('destino', destino);
 formData.append('origen',origen); 
 formData.append('codigo',codigo); 
 console.log(nombre,apellido,origen,destino,fechaSalida
    ,codigo);

 

  try {
    const response = await fetch(`http://localhost:3005/api/reservas/${id}`,{
        method:'PUT',
        body: formData
        
    });
    const respToJson = await response.json();
    console.log(nombre,apellido,origen,destino,fechaSalida
        ,codigo);
   
    if(response.status !== 201 && response.status !== 200){
        Swal.fire({
            icon:'error',
            title:respToJson.message,
        });
        return;
    }
    Swal.fire({
        icon:'success',
        title:'Reserva actualizado con éxito',
        text: respToJson.message
    })
    console.log(respToJson);
    // formEditar.reset();
    // setTimeout(()=>{
    //     window.location.href='/reservas'
    // },2000);


} catch (error) {
    console.log(error);
    Swal.fire({
      icon: 'error',
      title: 'Error!',
      text: 'Ha ocurrido un error al enviar el formulario'
    });
  }
})
      