import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import AuthPage from './components/pages/AuthPage';
// import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
// import Supervisor from './Supervisor';
import Supervisor from './components/Supervisor';
import Navbar from './components/Navbar';
import AuthPage from './components/pages/AuthPage';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import EmployeeSelf from './components/Employees/EmployeeSelf';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');

  return (
    <Router>
      {isAuthenticated && <Navbar />}
      <Routes>
        {/* Login / Signup */}
        <Route path="/login" element={<AuthPage onLogin={() => setIsAuthenticated(true)} />} />
        {/* Public Routes */}
        <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <Navigate to="/login" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/employee-self" element={<EmployeeSelf />} />


        {/* Dashboard route — protected */}
        <Route path="/dashboard" element={isAuthenticated ? (
          <div className="flex w-screen h-screen justify-between bg-gray-100">
            <Supervisor activeSection={activeSection} setActiveSection={setActiveSection} />
          </div>
        ) : (
          <Navigate to="/login" />
        )} />
      </Routes>
    </Router>
  );
}
