import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/home';


const App:React.FC = () => {
  return (
    <div className="App overflow-x-hidden">
      <BrowserRouter> 
            <Routes>
              <Route path='/' index element={<HomePage />}></Route>
            </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;