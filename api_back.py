import keyboard
from api_obs import get_obs_version
import api_obs

actions = {
    'copy': 'ctrl+c',
    'page': 'ctrl+v',
    'cute': 'ctrl+x',
    'paper': 'win+v',
    'mute': 'ctrl+shift+pagedown',
    'ensor': 'ctrl+shift+pageup',
    'next': 'next track',
    'previous': 'previous track',
    'play/pause': 'play/pause media',
    'stop': 'stop media',
    'volume-mute': 'volume mute',
    'volume-down': 'volume down',
    'volume-up': 'volume up'
}
actions2 = {
    "132": "start application 1",
    "133": "browser search key",
    "134": "start application 2",
    "135": "select media",
    "135": "play/pause media",
    "140": "volume mute",
    "141": "volume down",
    "142": "volume up",
    "57": "right shift",
    "59": "right ctrl",
    "61": "right alt",
    "62": "alt",
    "63": "ctrl",
    "64": "left windows",
    "65": "caps lock",
    "70": "delete",
    "71": "end",
    "72": "page down",
    "73": "page up",
    "74": "home",
    "75": "insert",
    "76": "print screen",
    "77": "scroll lock",
    "78": "pause",
}
def action_btn(action):
    '''
    Ejecuta acciones de atajos de teclado.
    '''
    if action == 'version':
        return get_obs_version()
    elif action == 'stream-on' or action == 'stream-of':
        return api_obs.stream(action) # Llama a la funcion encargada de encender o apagar stream
    elif action == 'record-on' or action == 'record-off':
        return api_obs.record(action) # Llama a la funcion encargada de encender o apagar grabacion
    elif action in actions:
        keyboard.press_and_release(actions[action])
        return f'Accion realizada: {action}'
    else:
        return 'Accion no realizadd'

    # if action == 'copy':
    #     keyboard.press_and_release('ctrl+c')
    # elif action == 'page':
    #     keyboard.press_and_release('ctrl+v')
    # elif action == 'cute':
    #     keyboard.press_and_release('ctrl+x')
    # elif action == 'paper':
    #     keyboard.press_and_release('win+v')
    # elif action == 'version':
    #     return get_obs_version()
    # elif action == 'mute':
    #     keyboard.press_and_release('ctrl+shift+pagedown')
    # elif action == 'ensor':
    #     keyboard.press_and_release('ctrl+shift+pageup')
    # elif action == 'next':
    #     keyboard.press_and_release('next track')
    # elif action == 'previous':
    #     keyboard.press_and_release('previous track')
    # elif action == 'play/pause':
    #     keyboard.press_and_release('play/pause media')
    # elif action == 'stop':
    #     keyboard.press_and_release('stop media')
    # elif action == 'volume-mute':
    #     keyboard.press_and_release('volume mute')
    # elif action == 'volume-down':
    #     keyboard.press_and_release('volume down')
    # elif action == 'volume-up':
    #     keyboard.press_and_release('volume up')
    # return f'Accion realizada: {action}'