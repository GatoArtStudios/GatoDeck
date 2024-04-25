// Botones por defecto

document.getElementById('btn-copy').addEventListener('click', () => handleAction('copy'));
document.getElementById('btn-page').addEventListener('click', () => handleAction('page'));
document.getElementById('btn-paper').addEventListener('click', () => handleAction('paper'));
document.getElementById('btn-version').addEventListener('click', () => handleAction('version'));
document.getElementById('btn-data').addEventListener('click', () => handleAction('datarequest'));
document.getElementById('btn-Recording').addEventListener('click', () => handleAction('startRecording'));
document.getElementById('btn-mute').addEventListener('click', () => handleAction('mute'));
document.getElementById('btn-ensor').addEventListener('click', () => handleAction('ensor'));
document.getElementById('btn-volume-up').addEventListener('click', () => handleAction('volume-up'));
document.getElementById('btn-previous').addEventListener('click', () => handleAction('previous'));
document.getElementById('btn-play/pause').addEventListener('click', () => handleAction('play/pause'));
document.getElementById('btn-next').addEventListener('click', () => handleAction('next'));
document.getElementById('btn-volume-down').addEventListener('click', () => handleAction('volume-down'));
document.getElementById('btn-volume-mute').addEventListener('click', () => handleAction('volume-mute'));

const KeyboardList = {     
    0: "Нет",    1: 'ЛКМ',    2: 'ПКМ',    3: 'Break',    4: 'Нет',    5: 'Нет',    6: 'Нет',    
    8: 'Backspace',    9: 'Tab',    12: 'Clear',    13: 'Enter',    16: 'Shift',    17: 'Control',    
    18: 'Alt',    19: 'Pause/Break',    20: 'CapsLock',    21: 'Hangul',    23: 'Нет',    24: 'Нет',    
    25: 'Hanja',    27: 'Escape',    28: 'Conversion',    29: 'Non-conversion',    30: 'Нет',    
    31: 'Нет',    32: 'Пробел',    33: 'PageUp',    34: 'PageDown',    35: 'End',    36: 'Home',    
    37: '←',    38: '↑',    39: '→',    40: '↓',    41: 'Select',    42: 'Print',    43: 'Execute',    
    44: 'PrintScreen',    45: 'Insert',    46: 'Delete',    47: 'Help',    48: '0',    49: '1',    
    50: '2',    51: '3',    52: '4',    53: '5',    54: '6',    55: '7',    56: '8',    57: '9',    
    65: 'A',    66: 'B',    67: 'C',    68: 'D',    69: 'E',    70: 'F',    71: 'G',    72: 'H',    
    73: 'I',    74: 'J',    75: 'K',    76: 'L',    77: 'M',    78: 'N',    79: 'O',    80: 'P',    
    81: 'Q',    82: 'R',    83: 'S',    84: 'T',    85: 'U',    86: 'V',    87: 'W',    88: 'X',    
    89: 'Y',    90: 'Z',    91: 'Win(Л)',    92: 'Win(Пр)',    93: 'Windows Menu',    95: 'sleep',    
    96: 'Доп(0)',    97: 'Доп(1)',    98: 'Доп(2)',    99: 'Доп(3)',    100: 'Доп(4)',    101: 'Доп(5)',    
    102: 'Доп(6)',    103: 'Доп(7)',    104: 'Доп(8)',    105: 'Доп(9)',    106: 'Доп(*)',    
    107: 'Доп(+)',    108: 'Нет',    109: 'Доп(-)',    110: 'Доп(,)',    111: 'Доп(/)',    
    112: 'F1',    113: 'F2',    114: 'F3',    115: 'F4',    116: 'F5',    117: 'F6',    118: 'F7',    
    119: 'F8',    120: 'F9',    121: 'F10',    122: 'F11',    123: 'F12',    124: 'F13',    
    125: 'F14',    126: 'F15',    127: 'F16',    128: 'F17',    129: 'F18',    130: 'F19',    
    131: 'F20',    132: 'F21',    133: 'F22',    134: 'F23',    135: 'F24',    144: 'Numlock',    
    145: 'Scrolllock',    160: 'Левый Shift',    161: 'Правый Shift',    162: 'Левый Ctrl',    
    163: 'Правый Ctrl',    164: 'Левый Alt',    165: 'Правый Alt',    166: 'Browser Back',    
    167: 'Browser Forward',    168: 'Browser Refresh',    169: 'Browser Stop',    170: 'Browser Search',    
    171: 'Browser Favorites',    172: 'Browser Home',    173: 'Volume Mute',    174: 'Volume Down',    
    175: 'Volume Up',    176: 'Next Track',    177: 'Previous Track',    178: 'Stop Media',    
    179: 'Play/Pause',    180: 'Start Mail',    181: 'Select Media',    182: 'Start App 1',    
    183: 'Start App 2',    186: ';',    187: '=',    188: ',',    189: '-',    190: '.',    191: '/',
};
const inputElement = document.getElementById('textInput');
const buttonElement = document.getElementById('buttonDatasend');

// Función para enviar evento de socket si hay coincidencia
buttonElement.addEventListener('click', () => {
    const inputValue = inputElement.value.trim(); // Mantener el valor original sin convertir a minúsculas
    const keyboardKeys = Object.values(KeyboardList).map(key => key.toLowerCase()); // Convertir valores a minúsculas para la comparación
    const lowerCaseInputValue = inputValue.toLowerCase(); // Convertir el valor a minúsculas para la comparación
    if (keyboardKeys.includes(lowerCaseInputValue)) {
        socket.emit('TestButton', inputValue); // Enviar el valor original
        console.log(inputValue);
    } else {
        alert("No se encontró ninguna coincidencia en KeyboardList para el valor ingresado.");
    }
});

console.log(KeyboardList);