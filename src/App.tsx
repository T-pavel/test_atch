
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Layout } from './containers/Layout'
import { StepTwoPage } from './features/ifc/pages/StepTwoPage'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <StepTwoPage />
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
