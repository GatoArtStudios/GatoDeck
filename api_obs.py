from obswebsocket import obsws, requests

connection = False

try:
    client = obsws(host='localhost', port=4455, password='123456')
    client.connect()
    connection = True
except Exception as e:
    print('Error al conectar')

def get_obs_version():
    '''
    Obtiene la version actual de OBS
    '''
    if connection == False:
        try:
            client.reconnect()
        except Exception as e:
            return f'Hubo un error: {e}'
    if connection:
        return f'Version actual: {client.call(requests.GetVersion()).getObsVersion()}'
    else:
        return 'Desconectado de obs | Soporte para Api V5'

def get_list_obs_scenes():
    '''
    Obtiene la lista de escenas disponibles en OBS.
    ```
    def get_list_obs_scenes(): -> Dict and Str in console
    ```
    '''
    if connection == False:
        try:
            client.reconnect()
        except Exception as e:
            return 'Error al obtener la lista de escenas'
    if connection:
        # Obtener la losta de escenas
        try:
            scenes = client.call(requests.GetSceneList())
            # print(vars(scenes))
            print(type(scenes))
            print(f"Escena actual: {scenes.datain['currentProgramSceneName']},\nLista de escenas: {scenes.datain['scenes']},\n Estatus: {scenes.status}")
            return scenes.datain['scenes']
        except Exception as e:
            print(f'error {e}')
            return 'Error al obtener la lista de escenas.'

def set_scenne(name: str):
    '''
    Hay que pasarle el nombre de la escena a usar.
    '''
    client.call(requests.SetCurrentProgramScene(sceneName=name))
    print(f'Ejecutando funcion de cambiar escena {name}')

def stream(action: str):
    '''
    Resibe una accion la cual para prender o apagar stream.
    ```
    def stream(action):
        if action == 'stream-on':
            client.call(requests.StartStream())
            return f'Accion: {action}'
        elif action == 'stream-off':
            client.call(requests.StopStream())
            return f'Accion: {action}'
    ```
    '''
    if action == 'stream-on':
        client.call(requests.StartStream())
        return f'Accion: {action}'
    elif action == 'stream-off':
        client.call(requests.StopStream())
        return f'Accion: {action}'

def record(action: str):
    '''
    Resibe una accion la cual para prender o apagar grabacion.
    ```
    def record(action):
        if action == 'record-on':
            client.call(requests.StartRecord())
            return f'Accion: {action}'
        elif action == 'record-off':
            client.call(requests.StopRecord())
            return f'Accion: {action}'
    ```
    '''
    if action == 'record-on':
        client.call(requests.StartRecord())
        return f'Accion: {action}'
    elif action == 'record-off':
        client.call(requests.StopRecord())
        return f'Accion: {action}'