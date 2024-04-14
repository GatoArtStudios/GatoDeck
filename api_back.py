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
    return f'Accion realizada: {action}'