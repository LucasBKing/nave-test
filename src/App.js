import React from 'react';
import Information from './components/information.component';
import TrafficGraph from './components/traffic.component';
import Reports from './components/reports.component';
import './assets/css/App.css';

export default function App() {
  return (
    <div>
      <div 
        className={`title`}
      >
        Page Overview
      </div>      
      <Information />
      <div 
        className={`otherInfo`}
      >
        <div 
          col-lg-7="true"
          col-md-6="true"
          col-sm="true"
        >
          <TrafficGraph />
        </div>
        <div 
          col-lg-5="true" 
          col-md-6="true"
          col-sm="true"
        >
          <Reports />
        </div>
      </div>
    </div>
  );
}