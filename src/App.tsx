import React from 'react'
import { useCount, useIncrement } from './hooks/useCounter';

function App() {
  const count = useCount();
  const increment = useIncrement();

  return (
    <main>
      <h2>Current count {count}</h2>
      <button onClick={increment}>Add up</button>
    </main>
  );
}

export default App
