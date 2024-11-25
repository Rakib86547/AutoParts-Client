import { useEffect } from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './pages/routes/router/router'
import { onAuthStateChanged } from 'firebase/auth'
import auth from './pages/firebase/firebase.config'
import { useDispatch } from 'react-redux'
import { setUser } from './redux/features/users/userSlice'

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userDetails = {
          name: user?.displayName,
          email: user?.email,
          image: user?.photoURL,
          uid: user?.uid
        };
        dispatch(setUser(userDetails))
      }
    })
  }, [])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
