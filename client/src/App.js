import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import About from './pages/About/About';
import HomeIndex from './HomeIndex' ;
import Navbar from './components/Navbar/Navbar';



const App = () => {
  return (
   <Router>
    <Navbar/>
    <main>
      <Routes>
        <Route path="/" element={<HomeIndex />} />
          
        <Route path="/about" element={<About />} />
        
      </Routes>
    </main>
   </Router>
  );
}

export default App;