import { Routes as Router, Route } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';
import About from '../Pages/About';
import Info from '../Pages/Info';
import PatientManagement from '../Components/PatientManagement';

export default function Routes() {

  return (
    <Router>
      <Route path="/" element={<About />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/info" element={<Info />} />
      <Route path="/PatientManagement" element={<PatientManagement />} />
    </Router>
  );
}