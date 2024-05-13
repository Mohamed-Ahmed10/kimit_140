import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./sass/style.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'sweetalert2/src/sweetalert2.scss'
import { BrowserRouter } from "react-router-dom"
import ThemeProvider from './context/ThemeContext.jsx';
import { Provider } from 'react-redux';
import store from './redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <Provider store={store}>
        <App />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
