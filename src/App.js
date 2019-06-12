import React from 'react';
import Information from './components/information.component';
import TrafficGraph from './components/traffic.component';
import Reports from './components/reports.component';
import { Container, Col } from 'react-bootstrap';
import './assets/css/App.css';

function App() {
  return (
    <Container>
      <h1 className="Title">Page Overview</h1>      
      <Information />
      <div className="otherInfo">
        
        <Col lg={7} md={6} sm>
          <TrafficGraph />
        </Col>
        <Col lg={5} md={6} sm>
          <Reports />
        </Col>
     
      </div>
      
    </Container>
  );
}

export default App;
