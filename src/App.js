import react,{ useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/header/header'
import About from './pages/about/about'
import Headertoggle from './components/header/headertoggle';
function App() {
  const [header,setHeader] = useState(false);
  const headerHandler = () => {
    setHeader(!header)
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Headertoggle open={header} handler={headerHandler}/>
        {header? <Header handler={headerHandler}/> : null }
        <Routes>
          <Route path='/about' element={<About/>}/>
          <Route path='/header' element={<Headertoggle/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
