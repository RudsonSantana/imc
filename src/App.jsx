import React from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav'
import BMI from './components/Body/BMI'
import BMIResults from './components/Body/BMIResults'
import BodyFat from './components/Body/BodyFat'
import BodyFatResults from './components/Body/BodyFatResults'
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <div className="container">
        <br />
        <BMI />
        <br />
        <BMIResults />
        <br /><br />
        <BodyFat />
        <br />
        <BodyFatResults />
      </div>
      <br />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;