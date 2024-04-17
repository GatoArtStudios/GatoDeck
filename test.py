import keyboard

while True:
    try:
        key = keyboard.read_key()
        print(key)
    except Exception as e:
        print('Programa finalizado')