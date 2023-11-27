import React from 'react';
import './App.css';
import FormPropsTextFields from './components/Login';
import Register from './components/registration';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Application from './components/Home';
import Home2 from './components/Home2';
import Dashboard from './components/Dashboard';
import Furnitures from './components/Furniture';
import Brand from './components/Brand';
import Fashion from './components/Fashion';

 const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Application/>}/>
          <Route exact path='/lo' element={<FormPropsTextFields/>}/>
          <Route exact path='/re' element={<Register/>}/>
          <Route exact path='/ho' element={<Home2/>}/>
          <Route exact path='/da' element={<Dashboard/>}/>
          <Route exact path='/fu' element={<Furnitures/>} />
          <Route exact path='/br' element={<Brand/>} />
          <Route exact path='/fa' element={<Fashion/>}/>
        </Routes>
      </Router>
    </div>
  )
}
export default App;