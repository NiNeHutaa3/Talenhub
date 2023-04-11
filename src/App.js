import React from 'react';
// components
import Header from './components/Header';
import AnimRoutes from './components/AnimRoutes'


//route
import { BrowserRouter as Router,Route } from 'react-router-dom';


const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Router>
        <Header />
        <AnimRoutes />
      </Router>
    </div>
  );
};

export default App;
