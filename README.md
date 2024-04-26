# GatoDeck

## ¿Qué es el GatoDeck?
El **GatoDeck** es una herramienta en python la cual nos da la posibilidad de tener un **Stream Deck** pero de forma completamente virtual y gratis, la cual se puede conectar al obs por websocket para controlar el obs completamente y tambien puedes usar el GatoDeck para controlar la multimedia de tu computadora con windows y funciones personalizadas que quieras agregar por du cuenta desde la web del GatoDeck, la herramienta esta pensada en ofrecernos una interfaz a traves de web para poder abrir la interfaz desde cualquier dispositivo que soporte un navegador web en tu red local para controlar desde otro equipo tu computadora y el obs.
## INSTRUCCIONES
Clone el repositorio con:
```bash
git clone https://github.com/GatoArtStudios/GatoDeck.git
```
Una ves ingrese a la carpeta/directorio que le a creado el clonar el repositorio que sera `GatoDeck`, una vez dentro de la carpeta, recuerda instalar instalar los requerimientos necesarios para que funcione el programa con el siguiente comando:
```bash
pip install -r requirements.txt
```
lo cual le comenzara a descargar los modulos necesarios para el correcto funcionamiento de la herramienta, listo para poder ejecutar nuestra erramienta puedes hacerlo de la siguiente forma:
```bash
python main.py
```
una ves ejecuta ese comando, en la consola te cargara la herramienta y te saldra las direcciones ip accesibles, en este caso con `127.0.0.1` para locar y la `ip privada, ejemplo: 192.168.100.126` para acceso desde otro equipo de la red, el cual al colocarlo en cualquier navegador de un equipo de tu red de casa le cargara la web de la herramienta.

#### Conectar a OBS
Para conectar al obs nuestra herramienta, por supuesto debes abrir tu **OBS Studio** y dirigirte a la parte superior del obs a `Herramientas > Ajustes del servidor WebSocket`, en **puerto del servidor** asegurece que sea `4455` y que este habilitada la casilla de **Habilitar autenticacion**, luego configura la contraseña en **Contraseña del servidor** debes colocar como contraseña: `123456` y por ultimo y **mas importante** que la casilla de `Habilitar servidor WebSocket` debe estar chuleada / activa para poder hacer uso de **WebSocket** que sera el medio de comunicacion de nuestra herramienta con el obs, como opcional si quieres saber cuando una herramienta se conecta o desconecta del servidor webSocket puedes habilitar la casilla de `Habilitar alertas en la bandeja del sistema` para resibir notificaciones, por ultimo solo el das al boton de `Aplicar` en la parte inferior de la ventana para aplicar los cambios y en la ventana de **Advertencia** le daras `Yes` y `Aceptar` para terminar de configurar el OBS y listo puedes ejecutar nuestra herramienta para que se coneste el OBS y te muestre todas las opciones disponibles para OBS.

> **Nota:** recuerda tener instalado **python** para poder hacer uso de la herramienta.
## USO
Ejecute `python main.py` el archivo principal.

## CONTRIBUCIONES
Si te gustaria contribuir con el proyecto, estariamos felices de que nos ayude al desarrollo de nuestro proyecto, primero tienes que **crearte un fork** del proyecto y trabaja sobre tu fork para realizar los cambios que te gustaria que implementaramos, como **recomendacion** recuerda que al hacer una **Pull Requests**, solo debes hacer PR de los cambios de algo muy espesifico y no modificando varios archivos, por que es ppsible que descartemos tu PR, si quieres hacer cambios en varios archivos, por favor haz PR de cada uno de los archivos modificados por separado, ten en cuenta colocar un titulo conciso y una descripcion resumida de los cambios que has hecho, por que y sus ventajas.
<br>
> **Nota:** Siempre debes tener sincronizado tu **Fork** con el repositorio original para evitar conflictos al hacer una PR y al realizar tus propios cambios, cada ves que vallas a hacer cambios en tu Fork por favor sincroniza commits.

## FEATURES
- Menu
1. Toggle menu
2. Toggle Estadisticas
3. Toggle
- Estadisticas
- Menu
- Fuentes de Audio
- Escenas
1. Toggle Mostrar o no existentes escenas
- Custom Botones perzonalizables (TECLADO)
