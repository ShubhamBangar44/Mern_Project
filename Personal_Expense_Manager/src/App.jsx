import React from 'react';
import Home from './components/home';
import Add_Expense from './components/Add_Expense';
import Signup from './pages/signup';
import Login from './pages/login';
import Navbar from './pages/navbar';
import Footer from './pages/footer';
import View_Expense from './components/View_Exp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const isAuthenticated = localStorage.getItem("user");
  
  return (
    <Router>
      <div className="app-container">
        <Navbar />

        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-expense" element={<Add_Expense />} />
            <Route path="/view-expense" element={<View_Expense />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
