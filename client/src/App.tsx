import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/home';
import Signup from './pages/signup';


const App:React.FC = () => {
  return (
    <div className="App overflow-x-hidden">
      <BrowserRouter> 
            <Routes>
              <Route path='/welcome' index element={<HomePage />} />
              <Route path='/signup' index element={<Signup />} />
            </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;