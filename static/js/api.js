// Botones por defecto

document.getElementById('btn-copy').addEventListener('click', () => handleAction('copy'));
document.getElementById('btn-page').addEventListener('click', () => handleAction('page'));
document.getElementById('btn-paper').addEventListener('click', () => handleAction('paper'));
document.getElementById('btn-version').addEventListener('click', () => handleAction('version'));
document.getElementById('btn-data').addEventListener('click', () => handleAction('datarequest'));
document.getElementById('btn-Recording').addEventListener('click', () => handleAction('record-on'));
document.getElementById('btn-mute').addEventListener('click', () => handleAction('mute'));
document.getElementById('btn-ensor').addEventListener('click', () => handleAction('ensor'));
document.getElementById('btn-volume-up').addEventListener('click', () => handleAction('volume-up'));
document.getElementById('btn-previous').addEventListener('click', () => handleAction('previous'));
document.getElementById('btn-play/pause').addEventListener('click', () => handleAction('play/pause'));
document.getElementById('btn-next').addEventListener('click', () => handleAction('next'));
document.getElementById('btn-volume-down').addEventListener('click', () => handleAction('volume-down'));
document.getElementById('btn-volume-mute').addEventListener('click', () => handleAction('volume-mute'));

const KeyboardList = {     
  3: 'Break', 
    8: 'Backspace',    9: 'Tab',    12: 'Clear',    13: 'Enter',    16: 'Shift',    17: 'Control',    
    18: 'Alt',    19: 'Pause/Break',    20: 'CapsLock',    21: 'Hangul', 
   27: 'Escape',    28: 'Conversion',    29: 'Non-conversion',  
  33: 'PageUp',    34: 'PageDown',    35: 'End',    36: 'Home',    
    37: '←',    38: '↑',    39: '→',    40: '↓',    41: 'Select',    42: 'Print',    43: 'Execute',    
    44: 'PrintScreen',    45: 'Insert',    46: 'Delete',    47: 'Help',    48: '0',    49: '1',    
    50: '2',    51: '3',    52: '4',    53: '5',    54: '6',    55: '7',    56: '8',    57: '9',    
    65: 'A',    66: 'B',    67: 'C',    68: 'D',    69: 'E',    70: 'F',    71: 'G',    72: 'H',    
    73: 'I',    74: 'J',    75: 'K',    76: 'L',    77: 'M',    78: 'N',    79: 'O',    80: 'P',    
    81: 'Q',    82: 'R',    83: 'S',    84: 'T',    85: 'U',    86: 'V',    87: 'W',    88: 'X',    
    89: 'Y',    90: 'Z',     93: 'Windows Menu',    95: 'sleep',     
    112: 'F1',    113: 'F2',    114: 'F3',    115: 'F4',    116: 'F5',    117: 'F6',    118: 'F7',    
    119: 'F8',    120: 'F9',    121: 'F10',    122: 'F11',    123: 'F12',    124: 'F13',    
    125: 'F14',    126: 'F15',    127: 'F16',    128: 'F17',    129: 'F18',    130: 'F19',    
    131: 'F20',    132: 'F21',    133: 'F22',    134: 'F23',    135: 'F24',    144: 'Numlock',    
    145: 'Scrolllock',    160: ' Shift',    161: 'Shift',    162: ' Ctrl',    
    163: 'Ctrl',    164: ' Alt',    165: 'Alt',    166: 'Browser Back',    
    167: 'Browser Forward',    168: 'Browser Refresh',    169: 'Browser Stop',    170: 'Browser Search',    
    171: 'Browser Favorites',    172: 'Browser Home',    173: 'Volume Mute',    174: 'Volume Down',    
    175: 'Volume Up',    176: 'Next Track',    177: 'Previous Track',    178: 'Stop Media',    
    179: 'Play/Pause',    180: 'Start Mail',    181: 'Select Media',    182: 'Start App 1',    
    183: 'Start App 2',    186: ';',    187: '=',    188: ',',    189: '-',    190: '.',    191: '/', 192: 'up', 193: 'left',
    194: 'down',195: 'menu',196: 'right',
};
// const buttonElement = document.getElementById('buttonDatasend');
/*
buttonElement.addEventListener('click', () => {
    const inputValue = inputElement.value.trim(); // Mantener el valor original sin convertir a minúsculas
    const keyboardKeys = Object.values(KeyboardList).map(key => key.toLowerCase()); // Convertir valores a minúsculas para la comparación
    const lowerCaseInputValue = inputValue.toLowerCase(); // Convertir el valor a minúsculas para la comparación
    if (keyboardKeys.includes(lowerCaseInputValue)) {
        socket.emit('TestButton', inputValue); // Enviar el valor original
        console.log(inputValue);
    } else {
        socket.emit('TestButton', inputValue);
        console.log("no encontro");
    }
});*/
//const inputElement = document.getElementById('textInput');
const keyboardselect = document.getElementById('keyboardSelect');
const keyboardButtonsContainer = document.getElementById('keyboardButtons');
const toggleCheckboxes = document.getElementById('toggleCheckboxes');
function toggleDeleteButtons() {
    $('.delete-button:contains("X")').toggle();
}
$(document).ready(function() {  
    const buttonExists = localStorage.getItem('botonesGuardados');
    buttonExistsParse = JSON.parse(buttonExists);
    console.log(buttonExistsParse);

    function cargarListaTeclas() {
        const $container = $('#keyboardListContainer');
        $container.empty(); // Limpiar el contenedor
    
        // Iterar sobre la lista de teclas y agregar elementos con botones
        Object.entries(KeyboardList).forEach(([keyCode, keyName]) => {
            // Verificar si el elemento ya existe en el localStorage
            if (keyName) {
                const $button = $('<button>', { class: 'button-container', text: keyName });
                $button.on('click', function() {
                    agregarBotonConX($(this).text()); // Agregar el botón junto con el texto al hacer clic en él
                    
                });
                $container.append($button);
            }
        });
    }
    buttonExistsParse.forEach(name => {
        console.log(name);
        agregarBotonConX(name)
    })
// Función para agregar un botón con el botón de borrar asociado al HTML de la modal
function agregarBotonConX(texto) {
    const $button = $('<button>', { class: 'button-container', text: texto });
    
    const $deleteButton = $('<button>', { class: 'delete-button', text: 'X' }); // Botón de borrar
    
    // Agregar listener de evento clic para el botón
    $button.on('click', function() {
        const inputValue = texto.trim(); // Mantener el valor original sin convertir a minúsculas
        const keyboardKeys = Object.values(KeyboardList).map(key => key.toLowerCase()); // Convertir valores a minúsculas para la comparación
        const lowerCaseInputValue = inputValue.toLowerCase(); // Convertir el valor a minúsculas para la comparación
        if (keyboardKeys.includes(lowerCaseInputValue)) {
            socket.emit('TestButton', inputValue); // Enviar el valor original
            console.log(inputValue);
        } else {
            socket.emit('TestButton', inputValue);
            console.log("no encontro");
        }
    });
    
    // Agregar listener de evento clic para el botón de borrar
    $deleteButton.on('click', function() {
        $(this).prev().remove(); // Eliminar el botón
        $(this).remove(); // Eliminar el botón de borrar asociado
        // Eliminar el elemento del localStorage
        const botonesGuardados = JSON.parse(localStorage.getItem('botonesGuardados')) || [];
        const index = botonesGuardados.indexOf(texto);
        if (index !== -1) {
            botonesGuardados.splice(index, 1);
            localStorage.setItem('botonesGuardados', JSON.stringify(botonesGuardados));
        }
    });
    
    // Guardar el nombre del botón en el localStorage
    const botonesGuardados = JSON.parse(localStorage.getItem('botonesGuardados')) || [];
    if (!botonesGuardados.includes(texto)) {
        botonesGuardados.push(texto);
        localStorage.setItem('botonesGuardados', JSON.stringify(botonesGuardados));
    }
    
    // Agregar botón y botón de borrar al contenedor
    keyboardButtonsContainer.appendChild($button[0]);
    keyboardButtonsContainer.appendChild($deleteButton[0]);
}


    // Cargar la lista de teclas al cargar la página
    cargarListaTeclas();

    // Al hacer clic en el botón Guardar
    $('#saveButton').on('click', function() {
        // Cerrar la modal
        $('#keyboardModal').modal('hide');
    });
    if (!toggleCheckboxes.checked){$('.delete-button').toggle();}
    // Al hacer clic en el botón de toggle para ocultar botones de borrar
    $('#toggleCheckboxes').on('click', function() {
        $('.delete-button').toggle();
    });
});



function guardarEstadoCheckboxes() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        localStorage.setItem(checkbox.id, checkbox.checked);
    });
}

// Función para aplicar el estado guardado de los checkboxes al cargar la página
function aplicarEstadoCheckboxes() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        const estadoGuardado = localStorage.getItem(checkbox.id);
        if (estadoGuardado !== null) {
            checkbox.checked = estadoGuardado === 'true';
        }
        console.log(estadoGuardado);
    });
}

window.addEventListener('load', aplicarEstadoCheckboxes);
console.log(KeyboardList);
window.addEventListener('beforeunload', guardarEstadoCheckboxes);