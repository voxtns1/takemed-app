export const API_CONFIG = {
  minResponseTime: 1000,
  maxResponseTime: 3000,
  errorProbability: 0.2,
} as const;

export const MOCK_DATA_RANGES = {
  steps: {
    min: 2000,
    max: 10000,
  },
  distance: {
    min: 2,
    max: 9,
  },
  calories: {
    min: 100,
    max: 400,
  },
} as const;
