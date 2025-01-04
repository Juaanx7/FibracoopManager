import React from 'react';
import './styles/Global.scss';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <>
      <Navbar />
      <Dashboard />
      <Footer />
    </>
  );
};

export default App;
