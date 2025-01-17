import React from 'react';
import './DetailedHistory.css';
import placeholder_img from '../../../src/assets/sheat.png';
import goBack_button from '../../../src/assets/icon _arrow left.png';

function DetailedHistory() {
  return (
    <div>
      <div className="header">
        <div className="title">
          <h1>HISTORY</h1>
        </div>
        <div className="goBack">
          <button onClick={() => { /* Add functionality to go back */ }}>
            <img src={goBack_button} alt="Go Back" />
          </button>
        </div>
      </div>

      <div className="container">
        <div className="class">
          <h2>Scan #1: </h2>
          <p>Biotic Stress: Sheath Blight</p>
        </div>
        <div className="content">
          <div className="image">
            <img src={placeholder_img} alt="Placeholder" />
          </div>
          <div className="classification">
            <h2>Classification</h2>
            <p>Place your classification text here...</p>
          </div>

          <div className="recommendation">
            <h2>Recommendation</h2>
            <p>Place your recommendation text here...</p>
          </div>

          <div className="references">
            <h2>References</h2>
            <p>Place your references text here...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailedHistory;
