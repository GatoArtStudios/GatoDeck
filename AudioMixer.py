import json
import platform

if platform.system() != 'Windows':
    pass
else:
    import comtypes
    from pycaw.pycaw import AudioUtilities, ISimpleAudioVolume, IAudioMeterInformation

def obtener_programas_con_audio():
    '''
    Obtener información detallada del volumen para todas las sesiones de audio.

    Returns:
        list: Una lista que contiene diccionarios con información detallada sobre cada sesión de audio, o una lista vacía si no se encuentran programas con audio.
    '''


def set_audio_volume(process_name, volume):
    '''
    Set the volume of a specific audio process.

    Args:
        process_name (str): The name of the process to set the volume for.
        volume (float): The volume level to set, ranging from 0 to 1.

    Returns:
        bool: True if the process is found and volume is set, False otherwise.
    '''
    sessions = AudioUtilities.GetAllSessions()
    for session in sessions:
        volume_interface = session._ctl.QueryInterface(ISimpleAudioVolume)
        if session.Process and session.Process.name().startswith(process_name):
            volume_interface.SetMasterVolume(volume, None)
            return True

    print("El proceso", process_name, "no se encontró en la lista de programas con audio.")
    print("Lista de programas con sus volúmenes:")
    for session in sessions:
        if session.Process:
            print(f"Nombre del Proceso: {session.Process.name()}, Volumen: {volume_interface.GetMasterVolume()}")
    return False
