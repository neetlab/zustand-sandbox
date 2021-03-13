# zustand-sandbox

## Things I did

```ts
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

// hookなのキモくね？とおもったが、/vanillaからpure-jsも提供してくれている
const useStore = create(persist(devtools(store), { name: 'count' }));

// Equivalent for useSelect from react-redux
export const useCount = () => useStore((state) => state.count);
export const useIncrement = () => useStore((state) => state.increment);
```

### middlewares
- persist: 永続化（ローカルストレージがデフォルト）
- redux: reducer と initial state でアクションを作るやつ
- devtools: Redux DevToolsでデバッグできるようにしてる
- combine: TとT->UからState<U>をやってくれるやつ

### Transient update

- https://codesandbox.io/s/peaceful-johnson-txtws
- useSpringみたいなrefからstyleを更新する場合に便利（out of react-wayな感じが）
