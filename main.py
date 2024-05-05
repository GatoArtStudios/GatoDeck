from flask import Flask, render_template, request, jsonify
from flask_socketio import SocketIO, send, emit
from api_back import apiBack
from api_obs import apiObs
from AudioMixer import *
import os
import concurrent.futures
import time
import webbrowser
import threading
import subprocess
#from ui import run_ui

# configuraciones de Flask

app = Flask(__name__)
app.secret_key = os.urandom(24)
socketio = SocketIO(app)

# Api

@app.route('/api/v1', methods=['GET', 'POST'])
def api_back():
    if request.method == 'POST':
        pass

# Web Frontend

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/qr')
def qr():
    return render_template('qr.html', data = apiBack.qr_data, data2 = apiBack.qr_svg)

@app.errorhandler(404)
def not_found(error):
    return render_template('error.html'), 404

@socketio.on('obs_connect')
def connect_obs(data):
    localhost = data['localhost']
    port = data['port']
    password = data['password']
    print(localhost, port, password)
    apiObs.connect_to_obs(localhost, port, password)

    socketio.emit('data-obs_connect', data)


#@socketio.on('socket_data_obs')
#def self.ocket_obs(data):
    #data1 = apiObs.get_data1()
    #data3 = apiObs.get_data3()
    #if data1:
        #socketio.emit('data-update1', data1)
    #if data3:
        #socketio.emit('data-update2', data3)
    #list_scenes = apiObs.get_list_obs_scenes()
    # Obtener la información de los programas con audio
    #audio_sessions_info = obtener_programas_con_audio()

    # Convertir a JSON
    #audio_sessions_json = json.dumps(audio_sessions_info, indent=4)

    # Imprimir el JSON
    #print(audio_sessions_json)
    #emit('lista_programas', audio_sessions_json)
    #emit('post-list-scenes', list_scenes)

@socketio.on('set_volume')
def establecerVolumen(data):
    nombre_proceso = data['nombre']
    volumen = float(data['volumen'])
    resultado = set_audio_volume(nombre_proceso, volumen)
    print(resultado)

    # Convertir el diccionario en formato JSON
    json_data = json.dumps({
        'nombre_proceso': nombre_proceso,
        'volumen': volumen,
        'resultado': resultado
    })

    # Emitir el evento con los datos en formato JSON
    emit('volumen_actualizado', json_data)

@socketio.on('set_scenne')
def socket_obs(data):
    print(data['name'])
    apiObs.set_scenne(data['name'])

@socketio.on('action')
def socket_obs(data):
    emit('action-response', apiBack.action_btn(data))
@socketio.on('TestButton')
def test_button(data):
        apiBack.press(data)

def flask_thread_function():
    socketio.run(app, host='0.0.0.0', port=8080, allow_unsafe_werkzeug=True, debug=False)

def main():
    ip = apiBack.get_ip()

    # Iniciar el hilo de Flask
    flask_thread = threading.Thread(target=flask_thread_function)
    flask_thread.start()

    # Ejecutar el otro proceso (run_ui)
    #run_ui(ip)

    # Esperar a que Flask termine
    flask_thread.join()

#apiObs.connect_to_obs("localhost", 4455, "123456")

if __name__ == '__main__':
    main()
# if __name__ == '__main__':
#     ui = threading.Thread(target=run_ui(apiBack.get_ip())) # run_ui() corre flet
#     ui.start()
#     socketio.run(app, host='0.0.0.0', port=80, allow_unsafe_werkzeug=False, debug=False)
