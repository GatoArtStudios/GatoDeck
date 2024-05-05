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
}
const KeyboardList2 = {
    "0": "esc",
    "1": "f1",
    "2": "f2",
    "3": "f3",
    "4": "f4",
    "5": "f5",
    "6": "f6",
    "7": "f7",
    "8": "f8",
    "9": "f9",
    "10": "f10",
    "11": "f11",
    "12": "f12",
    "13": "1",
    "14": "2",
    "15": "3",
    "16": "4",
    "17": "5",
    "18": "6",
    "19": "7",
    "20": "8",
    "21": "9",
    "22": "0",
    "23": "`",
    "24": "shift",
    "25": "~",
    "26": "!",
    "27": "@",
    "28": "#",
    "29": "$",
    "30": "%",
    "31": "^",
    "32": "&",
    "33": "*",
    "34": "(",
    "35": ")",
    "36": "_",
    "37": "+",
    "38": "-",
    "39": "=",
    "40": "tab",
    "41": "[",
    "42": "]",
    "43": "\\",
    "44": "{",
    "45": "}",
    "46": "|",
    "47": ";",
    "48": "'",
    "49": ":",
    "50": "\"",
    "51": ",",
    "52": ".",
    "53": "/",
    "54": "<",
    "55": ">",
    "56": "?",
    "57": "right shift",
    "58": "enter",
    "59": "right ctrl",
    "60": "menu",
    "61": "right alt",
    "62": "alt",
    "63": "ctrl",
    "64": "left windows",
    "65": "caps lock",
    "66": "left",
    "67": "down",
    "68": "right",
    "69": "up",
    "70": "delete",
    "71": "end",
    "72": "page down",
    "73": "page up",
    "74": "home",
    "75": "insert",
    "76": "print screen",
    "77": "scroll lock",
    "78": "pause",
    "79": "s",
    "80": "q",
    "81": "w",
    "82": "e",
    "83": "r",
    "84": "t",
    "85": "y",
    "86": "u",
    "87": "i",
    "88": "o",
    "89": "p",
    "90": "l",
    "91": "k",
    "92": "j",
    "93": "h",
    "94": "g",
    "95": "f",
    "96": "d",
    "97": "a",
    "98": "z",
    "99": "x",
    "100": "c",
    "101": "v",
    "102": "b",
    "103": "n",
    "104": "m",
    "105": "space",
    "106": "Q",
    "107": "W",
    "108": "E",
    "109": "R",
    "110": "T",
    "111": "Y",
    "112": "U",
    "113": "I",
    "114": "O",
    "115": "P",
    "116": "L",
    "117": "K",
    "118": "J",
    "119": "H",
    "120": "G",
    "121": "F",
    "122": "D",
    "123": "S",
    "124": "A",
    "125": "Z",
    "126": "X",
    "127": "C",
    "128": "V",
    "129": "B",
    "130": "N",
    "131": "M",
    "132": "start application 1",
    "133": "browser search key",
    "134": "start application 2",
    "135": "select media",
    "136": "previous track",
    "137": "next track",
    "138": "play/pause media",
    "139": "stop media",
    "140": "volume mute",
    "141": "volume down",
    "142": "volume up"
};
function sortKeyboardListsByLengthDescending() {
    // Convertir los objetos en matrices de pares clave-valor
    const keyboardListEntries = Object.entries(KeyboardList);
    const keyboardList2Entries = Object.entries(KeyboardList2);

    // Ordenar las matrices en función de la longitud de los valores en orden descendente
    keyboardListEntries.sort(([, valueA], [, valueB]) => valueB.length - valueA.length);
    keyboardList2Entries.sort(([, valueA], [, valueB]) => valueB.length - valueA.length);

    // Reconstruir los objetos ordenados a partir de las matrices ordenadas
    const sortedKeyboardList = Object.fromEntries(keyboardListEntries);
    const sortedKeyboardList2 = Object.fromEntries(keyboardList2Entries);

    return { sortedKeyboardList, sortedKeyboardList2 };
}
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
const keyboardButtonsContainer = document.getElementById('keyboardButtons');
const toggleCheckboxes = document.getElementById('toggleCheckboxes');

let botons;
$(document).ready(function() {  
    botons = JSON.parse(localStorage.getItem("botons")) || []; // Asignar valor a la variable botons

    const botonesAgregados = new Set();

    function cargarListaTeclas() {
        const $container = $('#keyboardListContainer');
        $container.empty(); // Limpiar el contenedor
    
        // Iterar sobre la lista de teclas y agregar elementos con botones
        Object.entries(KeyboardList).forEach(([keyCode, nombreBotton]) => {
            // Verificar si el elemento ya ha sido agregado
                const $button = $('<button>', { class: "bg-blue-500 hover:bg-blue-700 w-32 text-white font-bold py-5 px-4 rounded-lx m-1", text: nombreBotton });
                $button.on('click', function() {
                    createButton(nombreBotton);
                });
                $container.append($button);

        });
    }
    cargarListaTeclas()
    loadButtonsFromLocalStorage();
  

    function saveButtonToLocalStorage(nom, date) {
        var exists = botons.some(function(button) {
            return button.nom === nom;
        });
    
        // Si el botón no existe, añadirlo al array y al localStorage
        if (!exists) {
            botons.push({ nom: nom, date: date});
            localStorage.setItem("botons", JSON.stringify(botons));
        }
    }
    function createButton(nombreBotton) {
        if (nombreBotton && !botonesAgregados.has(nombreBotton)) {
        var dateCreation = new Date().toLocaleDateString();
        saveButtonToLocalStorage(nombreBotton, dateCreation);
        var $botonItem = $(`<div data-nom=' ${nombreBotton} '> <button class='clic-boton' id='text'>${nombreBotton} </button>`);
        $("#keyboardButtons").append($botonItem);
        
            // Agregar el nombre del botón al conjunto de botones agregados
            botonesAgregados.add(nombreBotton);
            $botonItem.on('click', function() {
            const inputValue = nombreBotton
            //console.log(inputValue)
            if (!toggleCheckboxes.checked){
            socket.emit('TestButton', inputValue); // Enviar el valor 
            }

        });
        if (toggleCheckboxes.checked) {
            $('.clic-boton').addClass('delete-button');
        } else {
            $('.clic-boton').removeClass('delete-button');
        }
        }
    }
    $('#toggleCheckboxes').on('click', function() {
        if (toggleCheckboxes.checked) {
            $('.clic-boton').addClass('delete-button');
        } else {
            $('.clic-boton').removeClass('delete-button');
        }
    });

    $(document).on('click', '.delete-button', function() {
        var nomBouton = $(this).closest("div").attr("data-nom").trim(); // Eliminar espacios
    
        //console.log("Contenido del array botons:", botons);
        //console.log("Nombre del botón (nomBouton):", nomBouton);
    
        let indexToRemove = botons.findIndex(function(button) {
            console.log("Nombre del botón en el array:", button.nom); // Verificar nombres
            return button.nom.trim() === nomBouton; 
        });
        botonesAgregados.delete(nomBouton);
        //console.log("Índice del elemento a eliminar:", indexToRemove);
        if (indexToRemove !== -1) {
            // Eliminar el elemento del array botons
            botons.splice(indexToRemove, 1);
            // Actualizar el almacenamiento local
            localStorage.setItem("botons", JSON.stringify(botons));
            // Eliminar el botón del DOM
            $(this).closest("div").remove();
        }
    });
    
    // Función para cargar los botones desde el almacenamiento local
    function loadButtonsFromLocalStorage() {
        console.log(botons);
        for (var i = 0; i < botons.length; i++) {
            var boton = botons[i];
            nombreBottonLoad = boton.nom
            createButton(nombreBottonLoad)
        }
    }
});
