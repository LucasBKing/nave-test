import React, { useState, useEffect } from 'react';
import useWindowSize from '../functions/dimensions';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { getSales } from '../functions/traffic';
import '../assets/css/traffic.css'

export default function TrafficGraph() {
    const windowSize = useWindowSize();

    const [trafficData, setTrafficData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await getSales();
            setTrafficData(response);
        }

        fetchData();        
    }, []);
  
    return (
        <div className="trafficDiv">
            <h3>Site Traffic Overview</h3>
            <BarChart
                width={windowSize.width}
                height={windowSize.height}
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
