import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AppRoutes from './utils/AppRoutes.jsx';
import './index.css';
import './main.css';
import '../src/Scripts/main.js';
import '../src/Scripts/chart.sample.js';

function App() {
  let router = createBrowserRouter(AppRoutes);  

  return (
    <>
      {/* Include Toaster here inside the JSX */}
      <Toaster position="top-right" reverseOrder={false} />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
