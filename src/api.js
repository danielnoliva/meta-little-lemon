function normalizeDate(value) {
  if (value instanceof Date) {
    return value;
  }
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? new Date() : parsed;
}

function formatDateKey(date) {
  const normalized = normalizeDate(date);
  return normalized.toISOString().split("T")[0];
}

function getStorage() {
  if (typeof window !== "undefined" && window.localStorage) {
    return window.localStorage;
  }

  // eslint-disable-next-line no-undef
  if (!globalThis.__littleLemonStore) {
    const store = new Map();
    // eslint-disable-next-line no-undef
    globalThis.__littleLemonStore = {
      getItem: (key) => store.get(key) ?? null,
      setItem: (key, value) => store.set(key, value),
      removeItem: (key) => store.delete(key),
    };
  }
  // eslint-disable-next-line no-undef
  return globalThis.__littleLemonStore;
}

function buildDefaultSlots(date) {
  const baseSlots = [
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
  ];

  const normalized = normalizeDate(date);
  const day = normalized.getDay();

  if (day === 5 || day === 6) {
    return baseSlots;
  }

  return baseSlots.filter((slot) => !slot.endsWith(":30"));
}

export function fetchData(dateInput) {
  const date = normalizeDate(dateInput);
  const key = `little-lemon:availability:${formatDateKey(date)}`;
  const storage = getStorage();
  const stored = storage.getItem(key);

  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) {
        return parsed;
      }
    } catch (error) {
      storage.removeItem(key);
    }
  }

  const defaultSlots = buildDefaultSlots(date);
  storage.setItem(key, JSON.stringify(defaultSlots));
  return defaultSlots;
}

export async function submitReservation(formData) {
  const key = `little-lemon:availability:${formatDateKey(formData.date)}`;
  const storage = getStorage();
  const currentSlots = fetchData(formData.date);
  const updatedSlots = currentSlots.filter((slot) => slot !== formData.time);
  storage.setItem(key, JSON.stringify(updatedSlots));

  const reservationsKey = "little-lemon:reservations";
  const existing = storage.getItem(reservationsKey);
  const reservations = existing ? JSON.parse(existing) : [];
  reservations.push({ ...formData, createdAt: new Date().toISOString() });
  storage.setItem(reservationsKey, JSON.stringify(reservations));

  return true;
}
