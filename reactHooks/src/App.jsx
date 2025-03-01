import { useState } from 'react'
import './App.css'
import '@coreui/coreui/dist/css/coreui.min.css'
import { Navbar } from './components/Navbar'
import Home from './components/Home';
import UseTransitionHook from './components/UseTransitionHook';
import { UseDeferredValueHook } from './components/UseDeferredValue';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <Navbar />
        <Home /> */}
        {/* <UseTransitionHook/> */}
        {/* <UseDeferredValueHook/> */}
      </div>
    </>
  )
}

export default App
