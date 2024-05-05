from obswebsocket import obsws, requests
import asyncio
import json

class API_OBS:
    def __init__(self, host: str, port: int, password: str) -> None:
        self.host = host
        self.port = port
        self.password = password
        self.connection = False
        self.client = None

    async def connect_to_obs(self) -> None:
        """
        Connect to OBS using the provided host, port, and password.
        """
        try:
            self.client = obsws(host=self.host, port=self.port, password=self.password)
            await self.client.connect()
            self.connection = True
            print("Connected to OBS.")
        except Exception as e:
            print('Error connecting to OBS:', e)

    async def handle_events(self) -> None:
        """
        Handle OBS events and reconnect if necessary.
        """
        while True:
            if not self.connection:
                print("Disconnected from OBS. Attempting to reconnect...")
                await self.connect_to_obs()
            await asyncio.sleep(10)  # Check every 10 seconds

    def start(self) -> None:
        """
        Start the API and event loop.
        """
        loop = asyncio.get_event_loop()
        loop.run_until_complete(self.connect_to_obs())
        loop.create_task(self.handle_events())
        loop.run_forever()

apiObs = API_OBS("localhost", 4455, "123456")
apiObs.start()
