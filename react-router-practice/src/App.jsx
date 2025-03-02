import { BrowserRouter } from 'react-router-dom'
import ReactDom from 'react-dom/client'
import { useState } from 'react'
import './App.css'

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
    <>
    <p>hello</p>
    </>
  )
}

export default App
