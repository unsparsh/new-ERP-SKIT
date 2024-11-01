import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Attendance from './pages/Attendance';
import Schedule from './pages/Schedule';
import Teachers from './pages/Teachers';
import ExamMarks from './pages/ExamMarks';
import GatePass from './pages/GatePass';
import Login from './components/Login';
import Layout from './components/Layout';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<{
    name: string;
    id: string;
    role: 'student' | 'admin';
  } | null>(null);

  const handleLogin = (credentials: { id: string; password: string }) => {
    if (credentials.id === 'student123' && credentials.password === 'password') {
      setUser({
        name: 'John Doe',
        id: 'student123',
        role: 'student'
      });
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        {!isLoggedIn ? (
          <Login onLogin={handleLogin} />
        ) : (
          <div className="flex flex-col h-screen">
            <Navbar user={user} onLogout={handleLogout} />
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Dashboard user={user} />} />
                <Route path="attendance" element={<Attendance />} />
                <Route path="schedule" element={<Schedule />} />
                <Route path="teachers" element={<Teachers />} />
                <Route path="exam-marks" element={<ExamMarks />} />
                <Route path="gate-pass" element={<GatePass />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Route>
            </Routes>
          </div>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;