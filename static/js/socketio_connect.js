let btn_scene = null
// Conectar al socket
const socket = io();
// funciones
async function handleAction(action) {
    socket.emit('action', action)
}

// Checa la conexion con el socket
socket.on('connect', function (data) {
    console.log('Conectado con el socket');
    socket.emit('socket_data_obs',{data: 'Conexion preparada y lista para usar'})
});
socket.on('agg', function(data) {
    socket.emit('Holis', {data: 'Se envio los datos correctamente'});
});
socket.on('post-list-scenes', function(data) {
    var div_btn_scenes = document.getElementById('btn-scenes');
    div_btn_scenes.innerHTML = ''
    data.forEach((escena) => {
        let boton = document.createElement('button');
        boton.type = 'button';
        boton.classList.add('btn-scenas');
        boton.innerText = escena.sceneName;
        boton.addEventListener('click', () => {
            btn_scene = escena
            socket.emit('set_scenne', {name: escena.sceneName});
        });
        // Agrega el div el hijo
        div_btn_scenes.appendChild(boton);
    });
});
socket.on('action-response', (data) => {
    document.getElementById('resp').innerHTML = data;
});