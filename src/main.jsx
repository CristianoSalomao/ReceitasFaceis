import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import App from './App.jsx'
import Home from './pages/Home.jsx'
import Search from './pages/Search.jsx'
import Receitas from './pages/Receitas.jsx'
import AddReceita from './pages/AddReceita.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="Receitas/:id" element={<Receitas />} />
          <Route path="Search" element={<Search />} /> 
          <Route path="AddReceita" element={<AddReceita/>} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
