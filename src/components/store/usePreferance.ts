
import { create } from "zustand"

type Preferances = {
    soundEnabled : boolean,
    setSoundEnabled:(soundEnabled: boolean)=>void
}
export const usePreferance = create<Preferances>((set) => ({
    soundEnabled: true,
    setSoundEnabled: (soundEnabled: boolean) => set({ soundEnabled })
}))