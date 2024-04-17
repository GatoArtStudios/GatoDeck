import keyboard
from api_obs import get_obs_version

def action_btn(action):
    if action == 'copy':
        keyboard.press_and_release('ctrl+c')
    elif action == 'page':
        keyboard.press_and_release('ctrl+v')
    elif action == 'cute':
        keyboard.press_and_release('ctrl+x')
    elif action == 'paper':
        keyboard.press_and_release('win+v')
    elif action == 'version':
        return get_obs_version()
    elif action == 'mute':
        keyboard.press_and_release('ctrl+shift+pagedown')
    elif action == 'ensor':
        keyboard.press_and_release('ctrl+shift+pageup')
    elif action == 'next':
        keyboard.press_and_release('next track')
    elif action == 'previous':
        keyboard.press_and_release('previous track')
    elif action == 'play/pause':
        keyboard.press_and_release('play/pause media')
    elif action == 'stop':
        keyboard.press_and_release('stop media')
    elif action == 'volume-mute':
        keyboard.press_and_release('volume mute')
    elif action == 'volume-down':
        keyboard.press_and_release('volume down')
    elif action == 'volume-up':
        keyboard.press_and_release('volume up')
    return f'Accion realizada: {action}'