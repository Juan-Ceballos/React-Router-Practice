import { BrowserRouter } from 'react-router-dom'
import ReactDom from 'react-dom/client'
import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import About from './About'

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
)

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </div>
  )
}

export default App
