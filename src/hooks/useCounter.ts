import create, { SetState } from 'zustand';
import { devtools, persist } from 'zustand/middleware'

// https://github.com/pmndrs/zustand#typescript
type CountState = {
  readonly count: number;
  readonly increment: () => void;
}

const store = (set: SetState<CountState>): CountState => ({
  count: 0,
  increment: () => set(state => ({ count: state.count + 1 })),
});

const useStore = create(persist(devtools(store), { name: 'count' }));
export const useCount = () => useStore((state) => state.count);
export const useIncrement = () => useStore((state) => state.increment);
