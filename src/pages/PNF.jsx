import React from 'react';
import { Link } from 'react-router-dom';

function PNF() {
  return (
    <div className="pnf-container">
      <div className="pnf-graphic">404</div>
      <h2>This page isn't available. Sorry about that.</h2>
      <p>Try searching for something else or return to the PheW TuBe Home page.</p>
      <Link to="/" className="pnf-home-btn">
        Go to Home
      </Link>
    </div>
  );
}

export default PNF;
