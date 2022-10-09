import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Welcome from './pages/welcome';
import Signup from './pages/signup';
import SignIn from './pages/signin';

const App:React.FC = () => {
  return (
    <div className="App overflow-x-hidden">
      <BrowserRouter> 
            <Routes>
              <Route path='/welcome' index element={<Welcome />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/signin' element={<SignIn />} />
            </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;