import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import Hero from './Hero.jsx';
import Loader from './Components/Loader.jsx';
// import CartPage from './Components/Cart/CartPage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Loader/>
  </React.StrictMode>,
)
