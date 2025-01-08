import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/routing';

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>

  )
}

export default App