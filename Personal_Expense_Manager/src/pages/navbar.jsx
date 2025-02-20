import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './navbar.css'
export class navbar extends Component {
  render() {
    return (
      <div id='navbar' >
            <nav id='nav'>
                <div className="logo">
                     <h4>CashFlow</h4>
                </div>
                <div id='links'>
                    <Link to="/">Home</Link>
                    <Link to="/view-expense">View Expense</Link>
                    <Link to="/add-expense">Add Expense</Link>
                
                    <Link to="/signup">Signup</Link>
                    
                    <Link to="/login">login</Link>
                  </div>
            </nav>
      </div>
    )
  }
}

export default navbar
