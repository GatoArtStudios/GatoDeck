import keyboard
from api_obs import apiObs

class API_BACK:
    def __init__(self) -> None:
        self.actions = {
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

    def action_btn(self, action: str):
        '''
        Ejecuta acciones de atajos de teclado.
        '''
        if action == 'version':
            return apiObs.get_obs_version()
        elif action == 'stream-on' or action == 'stream-of':
            return apiObs.stream(action) # Llama a la funcion encargada de encender o apagar stream
        elif action == 'record-on' or action == 'record-off':
            return apiObs.record(action) # Llama a la funcion encargada de encender o apagar grabacion
        elif action in self.actions:
            keyboard.press_and_release(self.actions[action])
            return f'Accion realizada: {action}'
        else:
            return 'Accion no realizadd'

    def press(self, action: str):
        keyboard.press_and_release(action)

apiBack = API_BACK()
