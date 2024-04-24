from obswebsocket import obsws, requests

client = obsws(host='localhost', port=4455, password='123456')
client.connect()

data = client.call(requests.GetVersion())
# print(f'Data de GetVersion | Requests: {vars(data)}')
print(f"Nombre de Llamada: {data.name}")
print(f"Requests Validas: {data.datain['availableRequests']}")
print(f"Version de OBS: {data.datain['obsVersion']}")
print(f"Version de OBS Web Socket: {data.datain['obsWebSocketVersion']}")
print(f"Plataforma: {data.datain['platform']}")
print(f"Descripcion de plataforma: {data.datain['platformDescription']}")
print(f"Version de RPC: {data.datain['rpcVersion']}")
print(f"Formatos soportado de imagenes: {data.datain['supportedImageFormats']}")

dataStats = client.call(requests.GetStats())
# print(f'Data de GetStats | Requests: {vars(dataStats)}')
print(f"Nombre de Llamada: {dataStats.name}")
print(f"FPS actuales renderizados: {dataStats.datain['activeFps']}")
print(f"Espacio disponible: {dataStats.datain['availableDiskSpace']}")
print(f"Tiempo Promedio de renderizado de OBS por FPS: {dataStats.datain['averageFrameRenderTime']}")
print(f"CPU usado actualmente | porcentaje: {dataStats.datain['cpuUsage']}")
print(f"Memoria usada en MB por OBS: {dataStats.datain['memoryUsage']}")
print(f"Fotogramas omitidos por OBS en salida de hilos: {dataStats.datain['outputSkippedFrames']}")
print(f"Total de FPS generados por hilo de salida: {dataStats.datain['outputTotalFrames']}")
print(f"FPS omitidos por OBS en hilo de renderizado: {dataStats.datain['renderSkippedFrames']}")
print(f"FPS Generados por hilo de renderizado: {dataStats.datain['renderTotalFrames']}")
print(f"Mensajes recibidos por el obs-websocket del cliente: {dataStats.datain['webSocketSessionIncomingMessages']}")
print(f"Mensajes enviados por obs-websocket al cliente: {dataStats.datain['webSocketSessionOutgoingMessages']}")
print(f"Datos de salida: {dataStats.dataout}")
print(f"Estado: {dataStats.status}")

dataHotkey = client.call(requests.GetHotKeyList())
# print(f"Data de GetHotkeyList: {vars(dataHotkey)}")
print(f"Nombre de Llamada: {dataHotkey.name}")
print(f"Datos de entrada: {dataHotkey.datain}")
print(f"Datos de salida: {dataHotkey.dataout}")
print(f"Estado: {dataHotkey.status}")

dataScennes = client.call(requests.GetSceneList())
print(f"Datos de GetSceneList | Requests: {vars(dataScennes)}")



































# import keyboard

# while True:
#     try:
#         key = keyboard.read_key()
#         print(key)
#     except Exception as e:
#         print('Programa finalizado')