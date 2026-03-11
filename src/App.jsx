import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FullStackDemo from './FullStackDemo'
import BackendDisplay from './BackendDisplay'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       {/* <FullStackDemo/> */}
      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <BackendDisplay/>
    </>
  )
}

export default App
