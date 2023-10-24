import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from "react-redux";
import {RouterProvider} from "react-router-dom";
import router from "./routes/index.jsx";
import store from "./store/index.js";
import App from './App.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store} >
          <RouterProvider router={router} >
              <App />
          </RouterProvider>
      </Provider>
  </React.StrictMode>,
)
