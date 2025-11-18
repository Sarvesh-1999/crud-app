import { RouterProvider } from 'react-router-dom'
import { myRoutes } from './routes/Routing'
import { Toaster } from 'react-hot-toast'
const App = () => {
  return (
    <div>
      <RouterProvider router={myRoutes}/>
      <Toaster/>
    </div>
  )
}

export default App