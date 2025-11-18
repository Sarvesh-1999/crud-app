import { RouterProvider } from 'react-router-dom'
import { myRoutes } from './routes/Routing'
const App = () => {
  return (
    <div>
      <RouterProvider router={myRoutes}/>
    </div>
  )
}

export default App