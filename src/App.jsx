import { useEffect } from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './pages/routes/router/router'
import { useDispatch } from 'react-redux'
import { setUser } from './redux/features/users/userSlice'
import { Toaster } from 'react-hot-toast'

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const persistedUser = localStorage.getItem('user')
    if (persistedUser) {
      dispatch(setUser(JSON.parse(persistedUser)));
    }
  }, [dispatch]);

  return (
    <div>
      <RouterProvider router={router} />
      <Toaster />
    </div>
  )
}

export default App
