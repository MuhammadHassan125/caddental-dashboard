import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Login from './pages/Authentication/Login';
import Register from './pages/Authentication/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import FileUpload from './components/dashboard/FileUpload';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register/>
    },
    {
      path: "/dashboard",
      element: <Dashboard/>,

      children: [
        {
          index: true,
          element:<FileUpload/>,
        },
        {
          path: "file-upload",
          element: <FileUpload/>,
        },
        {
          path: "files-list",
          element: <FileList/>
        }
      ]

    },
    
  ]);

  return <RouterProvider router={router} />;
}

export default App;