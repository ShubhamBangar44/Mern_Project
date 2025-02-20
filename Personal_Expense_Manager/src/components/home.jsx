import React from 'react';
import './home.css';

function Home() {
  return (
    <div className="container">
      <section className="home-container">
        <h1 className="animate-text">
          Track Your <span>Finance</span>
        </h1>
        <h2 className="animate-text">"Save money and money will save you."</h2>
        <button type="submit">Add Expense</button>  
      </section>
    </div>
  );
}

export default Home;