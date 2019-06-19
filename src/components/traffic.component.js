import React, { useState, useEffect } from 'react';
import useWindowSize from './dimensions';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { getSales } from '../functions/traffic';
import '../assets/css/traffic.css'


export default function TrafficGraph() {
    const dimensions = useWindowSize();
    const [trafficData, setTrafficData] = useState([]);
    const [widthGraph, setWidthGraph] = useState();
    const [heightGraph, setheightGraph] = useState();
    
    useEffect(() => {
        async function fetchData() {
            const response = await getSales();
            setTrafficData(response);
        }

        fetchData();
        getDimensions();
 
        return () => {
            getDimensions();
        }
    }, []);
  
    function getDimensions() {
        if (dimensions.width >= 991) {
            setWidthGraph(644);
            setheightGraph(373);
        }
        
        if (dimensions.width <= 990) {
            setWidthGraph(410);
            setheightGraph(380);
        }
        
        if (dimensions.width <= 880) {
            setWidthGraph(330);
            setheightGraph(250);
        }        
        if (dimensions.width <= 719) {
            setWidthGraph(260);
        }
        if (dimensions.width <= 559) {
            setWidthGraph(300);
        }

        console.log(dimensions.width);
        
    }
  
    return (
        <div className="trafficDiv">
            <h3>Site Traffic Overview</h3>
            <BarChart
                width={widthGraph}
                height={heightGraph}
                data={trafficData}
                margin={{
                    top: 5, right: 30, left: 5, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" fill="#4c84ff" />   
            </BarChart>

        </div>
    );
}
