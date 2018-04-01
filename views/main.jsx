'use babel';

import React from 'react';

function activateLasers() {
  alert('Lasers activated')
}

export default class Main extends React.Component {
  render() {
    return (
      <div>
        Hello from React with ES6 :) 
        <button onClick={activateLasers}>
          Activate Lasers
        </button>
      </div>
    );
  }
}
