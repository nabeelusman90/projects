import React from 'react'
import './App.css'
import Header from './Pages/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contant from './Pages/Contant';
import Aboutus from './Pages/Aboutus';
import Productdetiall from './mycompoents/Productdetiall';



function App() {


  return (
    <>
       <BrowserRouter>
   
      <Routes>
        <Route path="/" element={<Header/>} />
        <Route path="/contantus" element={<Contant/>} />
        <Route path="/aboutus" element={<Aboutus/>} />
        <Route path="/product" element={<Productdetiall/>} />
       
     
      </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
