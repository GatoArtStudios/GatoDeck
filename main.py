from flask import Flask, render_template, request, jsonify
from flask_socketio import SocketIO, send, emit
import api_back
from api_back import *
from api_obs import *
import os

# configuraciones de Flask

app = Flask(__name__)
app.secret_key = os.urandom(24)
socketio = SocketIO(app)

# Api

@app.route('/api/v1', methods=['GET', 'POST'])
def api_back():
    if request.method == 'POST':
        pass
        # try:
        #     data = request.json
        #     if data.get('action'):
        #         if data.get('action') == 'copy':
        #             copy()
        #             print('Accion realizada de copy')
        #         elif data.get('action') == 'page':
        #             page()
        #             print('Accion realizada de page')
        #         elif data.get('action') == 'paper':
        #             paper()
        #             print('Accion realizada de paper')
        #         elif data.get('action') == 'version':
        #             version = get_obs_version()
        #             print('Accion realizada de version')
        #             return jsonify({'mensaje': f'{version}'})
        #         elif data.get('action') == 'mute':
        #             mute_discord()
        #             return jsonify({'mensaje': 'Accion realizada de Mute'})
        #         elif data.get('action') == 'ensor':
        #             ensor_discord()
        #             return jsonify({'mensaje': 'Accion realizada de Ensor'})
        #         else:
        #             return jsonify({'mensaje': f'No se encontro accion'})
        #         return jsonify({'mensaje': f'Accion {data.get("action")} realizada'})
        #     else:
        #         return jsonify({'mensaje': f'No se encontro accion'})
        # except Exception as e:
        #     return jsonify({'mensaje': f'Error {e}'})
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
    list_scenes = get_list_obs_scenes()
    emit('post-list-scenes', list_scenes)

@socketio.on('set_scenne')
def socket_obs(data):
    print(data['name'])
    set_scenne(data['name'])

@socketio.on('action')
def socket_obs(data):
    emit('action-response', action_btn(data))


if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=80, allow_unsafe_werkzeug=True, debug=True)
