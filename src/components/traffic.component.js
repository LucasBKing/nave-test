import React, { Component } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip 
} from 'recharts';
import { getSales } from '../functions/traffic';
import '../assets/css/traffic.css'


export default class TrafficGraph extends Component {
    constructor(props) {
        super(props);

        this.state = {
            trafficData: []
        }
    }

    componentDidMount() {
        getSales().then(res => {                

            this.setState({
                trafficData: res
            })

        })
    }

    render() {
        const { trafficData } =  this.state;
        
        return (
            <div className="trafficDiv">
                <h3>Site Traffic Overview</h3>
                <BarChart
                    width={644}
                    height={373}
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
}