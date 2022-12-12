import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <>
      <center>
        <h1>
          <Link to="/">MyNotes</Link>
        </h1>
      </center>
    </>
  );
}

export default Navigation;
