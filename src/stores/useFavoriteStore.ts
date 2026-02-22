import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { Anime } from "@/types";

interface FavoriteState {
  favorites: Anime[];
  addFavorite: (anime: Anime) => void;
  removeFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
  toggleFavorite: (anime: Anime) => void;
}

export const useFavoriteStore = create<FavoriteState>()(
  persist(
    (set, get) => ({
      favorites: [],

      addFavorite: (anime) =>
        set((state) => ({
          favorites: [...state.favorites, anime],
        })),

      removeFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.filter((f) => f.id !== id),
        })),

      isFavorite: (id) => get().favorites.some((f) => f.id === id),

      toggleFavorite: (anime) => {
        const { isFavorite, addFavorite, removeFavorite } = get();
        if (isFavorite(anime.id)) {
          removeFavorite(anime.id);
        } else {
          addFavorite(anime);
        }
      },
    }),

    { name: "anime-favorites" },
  ),
);
