import './App.css';
import Next from "./components/Next"
import "./components/style.css"
import Home from './components/Home';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';


function App() {
  return (
    <div>
    <Router > 
    <Routes> 
    <Route exact path="/" element={<Home></Home>} />
    <Route exact path="/comp/:id" element={<Next/>} />
    </Routes>
    </Router>
    </div>

    
  );
}

export default App;
