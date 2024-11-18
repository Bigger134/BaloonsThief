import './App.css'
import Math from './components/math/Math.tsx'
import { StoreProvider, createStore } from './store/utils/index.ts'

const store = createStore();

function App() {
  return (
    <>
      <StoreProvider value={store}>
        <Math />
      </StoreProvider>
    </>
  )
}

export default App
