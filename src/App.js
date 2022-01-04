import React from 'react';
import './App.css';
import Header from './components/Header';
import Landing from './components/Landing';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  const Home = () => {
    return (
      <>
        <Landing />
        <About />
      </>
    );
  };

  return (
    <div>
      <Router>
        <Header />
        <Landing />
        <About />
        <Contact />
        <Footer />

        <Routes>
          <Route path='/' component={Home} />
          {/* <Route exact path='/' component={} />
          <Route exact path='/' component={} />
          <Route exact path='/' component={} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
