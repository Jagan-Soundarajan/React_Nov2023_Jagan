import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import FormPropsTextFields from './components/Login';
import Register from './components/Registration';

 const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/lo' element={<FormPropsTextFields/>}/>
          <Route exact path='/re' element={<Register/>}/>
        </Routes>
      </Router>
    </div>
  )
}
export default App;