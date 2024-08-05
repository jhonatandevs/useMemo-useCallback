import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Mensaje from './components/Mensaje'
function App() {
  const [count, setCount] = useState(0)
  const [mensaje, setMensaje] = useState('Hola')
  const [calculate, setCalculate] = useState(0)
  function calculateCount() {
    console.log("Calculateeee..!!!")
    setCount(count + 1)
  }
  // Solo cuando cambien calculate, se vuelve a hacer el calculo de la function
  const memoCalculateCount = useCallback(() => calculateCount(), [calculate])
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Mensaje texto={mensaje} />
      <div className="card ">
        <button className='btn btn-secondary' onClick={memoCalculateCount}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <div className="row pt-4 align-items-center ">
        <div className="col">
          <input type="text" className='rounded custom-placeholder' placeholder='Ingrese calculate' onChange={(event) => setMensaje(event?.target?.value || '')} />

        </div>
        <div className="col">
          <button className='btn btn-warning ' onClick={() => setCalculate(prev => prev + 1)}>Cambiar calculate</button>
        </div>
      </div>
    </>
  )
}

export default App
