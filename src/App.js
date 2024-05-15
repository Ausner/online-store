import './App.css';
import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Cart } from './components/Cart/Cart';
import { Refunds } from './components/Refunds/Refunds';
import { About } from './components/About/About';
import { ProductView } from './components/ProductView/ProductView';
import { Header } from './components/Header/Header';
import 'animate.css';


function AppRouter() {
  return (

    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product-view/:id' element={<ProductView />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/refunds' element={<Refunds />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </BrowserRouter>

  );
}

export default AppRouter;
