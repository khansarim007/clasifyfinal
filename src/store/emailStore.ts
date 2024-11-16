import { create } from 'zustand';
import { supabase } from '../lib/supabase';

interface EmailPlatform {
  id: string;
  name: 'Gmail' | 'Outlook';
  connected: boolean;
  email?: string;
}

interface EmailState {
  platforms: EmailPlatform[];
  connecting: boolean;
  error: string | null;
  addPlatform: (platform: EmailPlatform) => void;
  removePlatform: (platformId: string) => void;
  setConnecting: (status: boolean) => void;
  setError: (error: string | null) => void;
}

export const useEmailStore = create<EmailState>((set) => ({
  platforms: [],
  connecting: false,
  error: null,
  addPlatform: (platform) =>
    set((state) => ({
      platforms: [...state.platforms, platform],
      error: null,
    })),
  removePlatform: (platformId) =>
    set((state) => ({
      platforms: state.platforms.filter((p) => p.id !== platformId),
    })),
  setConnecting: (status) => set({ connecting: status }),
  setError: (error) => set({ error }),
}));