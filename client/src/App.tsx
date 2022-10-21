import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Welcome from './pages/welcome';
import Signup from './pages/signup';
import SignIn from './pages/signin';
import WatchMovie from './pages/watchMoviePage';

const App:React.FC = () => {
  return (
    <div className="App overflow-x-hidden">
      <BrowserRouter> 
            <Routes>
              <Route path='/home' element={<Home />} />
              <Route path='/' index element={<Welcome />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/signin' element={<SignIn />} />
              <Route path="/watch" element={<WatchMovie />} />
            </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;