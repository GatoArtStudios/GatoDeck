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