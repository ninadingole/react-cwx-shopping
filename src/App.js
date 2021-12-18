import React from 'react';
import './App.css';
import { Route, Routes, useMatch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import SignInOut from './pages/sign-in-out/sign-in-out.component';
import CheckoutPage from './pages/checkout/checkout.component';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop/*' element={<ShopPage />} />
        <Route path='checkout/*' element={<CheckoutPage />} />
        <Route path='signin/*' element={<SignInOut />} />
      </Routes>
    </div>
  );
}

export default App;
