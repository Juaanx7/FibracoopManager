import React from 'react';
import './styles/global.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <>
      <Header />
      <HomePage />
      <Footer />
    </>
  );
};

export default App;
