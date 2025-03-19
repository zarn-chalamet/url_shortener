import {
  RouterProvider,
} from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import router from "./router";
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <>
    <Toaster />
    <RouterProvider router={router} />
  </>
)
