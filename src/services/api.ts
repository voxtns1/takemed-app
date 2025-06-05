interface DeviceData {
  steps: number;
  distance: number;
  calories: number;
  lastSync: string;
}

// Simula datos del dispositivo
const fakeDeviceData: DeviceData = {
  steps: Math.floor(Math.random() * 8000) + 2000, // Entre 2000 y 10000 pasos
  distance: Math.floor(Math.random() * 7) + 2, // Entre 2 y 9 km
  calories: Math.floor(Math.random() * 300) + 100, // Entre 100 y 400 calorías
  lastSync: new Date().toISOString(),
};

// Simula un delay en la respuesta
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const syncDeviceData = async (): Promise<DeviceData> => {
  try {
    // Simula el tiempo de respuesta de la API (entre 1 y 3 segundos)
    const responseTime = Math.floor(Math.random() * 2000) + 1000;
    await delay(responseTime);

    // Simula un error aleatorio (20% de probabilidad)
    if (Math.random() < 0.2) {
      throw new Error("Error al sincronizar con el dispositivo");
    }

    return fakeDeviceData;
  } catch (error) {
    throw error;
  }
};
