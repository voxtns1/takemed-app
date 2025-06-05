import { HealthTip } from "../types";

export const MESSAGES = {
  welcome: "¡Bienvenido de nuevo!",
  healthTipsTitle: "Consejos para tu bienestar",
  healthTipsSubtitle:
    "Sigue estas recomendaciones para mejorar tu salud y calidad de vida.",
  dailyActivity: "Actividad Diaria",
  dailySteps: "Pasos diarios",
  healthTips: "Consejos de Salud",
  connectDevice: "Conectar Dispositivo",
} as const;

export const SYNC_MESSAGES = {
  syncing: "Sincronizando...",
  success: "Sincronización exitosa con el dispositivo BLE",
  syncDevice: "Sincronizar dispositivo",
  syncError: "Error al sincronizar con el dispositivo",
  unknownError: "Error desconocido",
} as const;

export const HEALTH_TIPS: HealthTip[] = [
  {
    id: 1,
    title: "Mantén una rutina de actividad física",
    description:
      "Intenta caminar al menos 30 minutos diarios para mejorar tu salud cardiovascular y mantener un peso saludable.",
    icon: "run",
  },
  {
    id: 2,
    title: "Hidratación constante",
    description:
      "Bebe al menos 2 litros de agua al día para mantener una hidratación óptima y mejorar el funcionamiento de todos tus órganos.",
    icon: "cup-water",
  },
  {
    id: 3,
    title: "Alimentación balanceada",
    description:
      "Incluye frutas y verduras en cada comida. Procura que tu plato tenga variedad de colores para asegurar diferentes nutrientes.",
    icon: "fruit-cherries",
  },
  {
    id: 4,
    title: "Descanso adecuado",
    description:
      "Duerme entre 7-8 horas diarias. Un buen descanso mejora tu sistema inmunológico y tu rendimiento diario.",
    icon: "sleep",
  },
  {
    id: 5,
    title: "Control del estrés",
    description:
      "Practica técnicas de respiración o meditación durante 10 minutos al día para reducir los niveles de estrés y ansiedad.",
    icon: "meditation",
  },
] as const;
