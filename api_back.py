import keyboard
from api_obs import apiObs

class API_BACK:
    def __init__(self) -> None:
        self.actions2 = {
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
        '''
        Codigo de Melsern para manejar excepciones de errores.
        '''
        try:
            keyboard.press_and_release(action)
            print(f"Tecla '{action}' existe y se puede presionar y soltar correctamente.")
        except ValueError:
            print(f"Tecla '{action}' no existe o no se puede presionar y soltar.")
            for key, value in self.actions2.items():
                if value.lower() == action.lower():
                    try:
                        keyboard.press_and_release(key)
                        print(f"Se encontró una tecla similar en actions2: '{value}', y se presionó y soltó correctamente.")
                        break
                    except ValueError:
                        print(f"No se pudo simular la tecla '{value}' desde actions2.")
            else:
                print("No se encontró ninguna tecla similar en actions2.")

apiBack = API_BACK()
