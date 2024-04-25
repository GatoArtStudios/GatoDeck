from flask import Flask, render_template, request, jsonify
from flask_socketio import SocketIO, send, emit
import api_back
from api_back import *
from api_obs import *
import os
import time

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

@app.errorhandler(404)
def not_found(error):
    return render_template('error.html'), 404

# SocketIO

@socketio.on('socket_data_obs')
def socket_obs(data):
    data1 = get_data1()
    data3 = get_data3()
    if data1:
        socketio.emit('data-update1', data1)
    if data3:
        socketio.emit('data-update2', data3)
    list_scenes = get_list_obs_scenes()
    emit('post-list-scenes', list_scenes)

@socketio.on('set_scenne')
def socket_obs(data):
    print(data['name'])
    set_scenne(data['name'])

@socketio.on('action')
def socket_obs(data):
    emit('action-response', action_btn(data))

@socketio.on('TestButton')
def test_button(data):
        simular_presion_y_suelta(data)


# Función para simular la presión y liberación de una tecla
def simular_presion_y_suelta(tecla):
    try:
        keyboard.press_and_release(tecla)
        print(f"Tecla '{tecla}' existe y se puede presionar y soltar correctamente.")
    except ValueError as e:
        print(f"Tecla '{tecla}' no existe o no se puede presionar y soltar.")
        for key, value in actions2.items():
            if value.lower() == tecla.lower():
                try:
                    keyboard.press_and_release(key)
                    print(f"Se encontró una tecla similar en actions2: '{value}', y se presionó y soltó correctamente.")
                    break
                except ValueError as e:
                    print(f"No se pudo simular la tecla '{value}' desde actions2.")
        else:
            print("No se encontró ninguna tecla similar en actions2.")
if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=80, allow_unsafe_werkzeug=True, debug=True)
