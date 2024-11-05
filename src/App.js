import React from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import FeaturedProducts from './components/FeaturedProducts';
import CustomerReviews from './components/CustomerReviews';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <FeaturedProducts />
      <CustomerReviews />
      <Footer />
    </div>
  );
}

export default App;
