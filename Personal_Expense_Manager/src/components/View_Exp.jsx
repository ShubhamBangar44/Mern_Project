import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route ,Link } from 'react-router-dom';

import './View_Exp.css'
function View_Exp() {
     const [expenses, setExpenses] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    
    useEffect(() => {
            fetchExpenses();
    }, []);
    const fetchExpenses = () => {
        fetch("http://localhost:3000/expenses")
            .then(response => response.json())
            .then(data => {
                setExpenses(data);
                calculateTotal(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    };
    const calculateTotal = (data) => {
        const total = data.reduce((acc, expense) => acc + Number(expense.Amount), 0);
        setTotalAmount(total);
    };

    const handleClick=()=>{
        console.log("hello");
    }
  return (
    <div className='main_Container'>
       <div className="expense-list-container">
                <h2>Expenses:</h2>
                <ul className="expense-list">
                    {expenses.map((expense, index) => (
                        <li key={index}>
                            {expense.Description}: <strong>${expense.Amount}</strong><span onClick={handleClick}>-</span>
                        </li>
                    ))}
                </ul>
                <h3>Total Amount: ${totalAmount}</h3>
            </div>
    </div>
  )
}

export default View_Exp
