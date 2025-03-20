import {
  RouterProvider,
} from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import router from "./router";
import { Toaster } from 'react-hot-toast';
import { AppContextProvider } from "./context-api/AppContext";
import { UrlContextProvider } from "./context-api/UrlContext";

createRoot(document.getElementById('root')).render(
  <>
    <AppContextProvider>
      <UrlContextProvider>
        <Toaster />
        <RouterProvider router={router} />
      </UrlContextProvider>
    </AppContextProvider>
  </>
)
