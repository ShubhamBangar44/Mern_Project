import React, { useState, useEffect } from 'react';

function Add_Expense() {
    const [user, setUser] = useState({
        Description: "",
        Amount: "",
    });

    const [expenses, setExpenses] = useState([]);

    //ye Useeffect MongoDb data base Se Data Fetch Karne k liye h
    useEffect(() => {
        fetch("http://localhost:3000/expenses")
            .then(response => response.json())
            .then(data => setExpenses(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    function Handleclick() {

        //ye Data Database m Add Karne K liye h 
        fetch("http://localhost:3000/Add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setUser({ Description: "", Amount: "" }); // Clear input fields after successful submission
            // Fetch updated expenses after adding a new one
            fetch("http://localhost:3000/expenses")
                .then(response => response.json())
                .then(data => setExpenses(data))
                .catch(error => console.error('Error fetching data:', error));
        });
    }

    return (
        <div>
            <input 
                type='text' 
                value={user.Description} 
                placeholder='Enter Details' 
                onChange={(e) => setUser({ ...user, Description: e.target.value })} 
                required
            />
            <input 
                type='number' 
                value={user.Amount} 
                placeholder='Enter Amount' 
                onChange={(e) => setUser({ ...user, Amount: e.target.value })} 
                required
            />
            <button type="submit" onClick={Handleclick}>Add</button>       
            <h1>{user.Description}</h1>
            <h1>{user.Amount}</h1>
            <h2>Expenses:</h2>
            <ul>
                {expenses.map((expense, index) => (
                    <li key={index}>
                        {expense.Description}: {expense.Amount}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Add_Expense;
