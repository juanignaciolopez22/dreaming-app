import { create } from "zustand";

export const useDreamersStore = create((set) => ({
  dreamers: [],
  loggedDreamer: null,
  notifications: [],
  // Agregar un dreamer
  addDreamer: (dreamer) =>
    set((state) => ({
      dreamers: [...state.dreamers, { ...dreamer, dreams: [] }],
    })),

  // Login
  loginDreamer: (name, password) =>
    set((state) => {
      const found = state.dreamers.find(
        (d) => d.name === name && d.password === password
      );
      return { loggedDreamer: found || null };
    }),

  // Logout
  logoutDreamer: () => set({ loggedDreamer: null }),

  // Agregar un sueño al dreamer logueado
  addDreamToLoggedDreamer: (dream) =>
    set((state) => ({
      dreamers: state.dreamers.map((d) =>
        d.name === state.loggedDreamer.name
          ? {
              ...d,
              dreams: [
                ...d.dreams,
                { ...dream, likes: 0 }, // cada sueño arranca con 0 likes
              ],
            }
          : d
      ),
      loggedDreamer: {
        ...state.loggedDreamer,
        dreams: [...state.loggedDreamer.dreams, { ...dream, likes: 0 }],
      },
    })),

  // Sumar un like a un sueño por índice
  likeDream: (dreamerName, dreamIndex) =>
    set((state) => ({
      dreamers: state.dreamers.map((d) =>
        d.name === dreamerName
          ? {
              ...d,
              dreams: d.dreams.map((dream, idx) =>
                idx === dreamIndex
                  ? { ...dream, likes: dream.likes + 1 }
                  : dream
              ),
            }
          : d
      ),
    })),
  publishDream: (dreamerName, dreamIndex) =>
    set((state) => ({
      dreamers: state.dreamers.map((d) =>
        d.name === dreamerName
          ? {
              ...d,
              dreams: d.dreams.map((dream, idx) =>
                idx === dreamIndex ? { ...dream, publicado: true } : dream
              ),
            }
          : d
      ),
    })),
  addNotification: (notif) =>
    set((state) => ({
      notifications: [
        ...state.notifications,
        {
          ...notif,
          id: Date.now() + Math.random(),
          read: false,
        },
      ],
    })),

  markNotificationRead: (id) =>
    set((state) => ({
      notifications: state.notifications.map((n) =>
        n.id === id ? { ...n, read: true } : n
      ),
    })),
}));
