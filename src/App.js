import React from 'react';
import Information from './components/information.component';
import TrafficGraph from './components/traffic.component';
import './assets/css/App.css';

function App() {
  return (
    <div>
      <h1 className="Title">Page Overview</h1>
      <Information />
      <TrafficGraph />
    </div>
  );
}

export default App;
