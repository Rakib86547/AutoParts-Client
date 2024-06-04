import { } from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './pages/routes/router/router'

function App() {

  return (
    <div>
      <RouterProvider router={router} />         
    </div>
  )
}

export default App
