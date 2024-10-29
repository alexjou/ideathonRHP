import { Routes as Router, Route } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';
import About from '../Pages/About';



function Routes() {

  return (
    <Router>
      <Route path="/" element={ <About /> } />
      <Route path="/dashboard" element={ <Dashboard /> } />
    </Router>
  );
}

export default Routes;
