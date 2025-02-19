import React from 'react';
import Home from './components/home';
import Add_Expense from './components/Add_Expense';
import Login from './pages/login';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link><br /><br />
          <Link to="/add-expense">Add Expense</Link>
          <br />
          <br />
          <Link to="/login">Login</Link>
          <br />
          <br />
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-expense" element={<Add_Expense />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
