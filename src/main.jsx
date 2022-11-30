import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import UserState from './Api/UserContext';
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <UserState>
      <App />
    </UserState>
    </BrowserRouter>
  </React.StrictMode>
)
