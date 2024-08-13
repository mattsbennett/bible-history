import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

interface State {
  theme: string
}

interface Actions {
  setTheme: (theme: string) => void
}

export const useStore = create<State & Actions>()(
  devtools(immer((set) => ({
    theme: (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light',
    setTheme: (theme: string) =>
      set((state) => {
        state.theme = theme
      }),
  }))),
)
