import React from 'react';
import Information from './components/information.component';
import TrafficGraph from './components/traffic.component';
import Reports from './components/reports.component';
import './assets/css/App.css';

function App() {
  return (
    <div>
      <h1 className="Title">Page Overview</h1>      
      <Information />
      <div className="otherInfo">
        <div col-lg-7 col-md-6 col-sm>
          <TrafficGraph />
        </div>
        <div col-lg-5 col-md-6 col-sm>
          <Reports />
        </div>
      </div>
    </div>
  );
}

export default App;
