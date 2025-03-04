import { useState } from 'react'
import reactLogo from './assets/react.svg'
import acepharmLogo from '/ACEPHARM.svg'
import './assets/css/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="http://www.xn--9t4b11d99ac3y.com/" target="_blank">
          <img src={acepharmLogo} className="logo" alt="acepharm" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='header-1'>ACEPHARM 사이트 테스트 빌드 v0.1</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className="pan-1">
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        마우스 인터렉트 테스트
      </p>
      
    </>
  )
}

export default App
