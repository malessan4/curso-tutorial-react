import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

      </div>
      <h1>Curso de React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          contador: {count}
        </button>
        <p>
          Sumale 1 al contador
        </p>
      </div>
      <p className="read-the-docs">
        Clickea en el logo de react vite para mas informacion
      </p>
    </>
  )
}

export default App
