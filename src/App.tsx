// import Home from '../src/pages/Home';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  Home  from './pages/Home';
import NewRoom from '../src/pages/NewRoom';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/rooms/new-room" element={<NewRoom/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
