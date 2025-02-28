import { useState } from 'react'
import './App.css'
import '@coreui/coreui/dist/css/coreui.min.css'
import {Navbar} from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
      </div>
    </>
  )
}

export default App
