import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { getSales } from '../functions/traffic';
import '../assets/css/traffic.css'


export default class TrafficGraph extends Component {
    constructor(props) {
        super(props);

        this.state = {
            trafficData: [],
            width: '',
            widthGraph: 644,
            heightGraph: 373
        }
    }
 
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }
  
    getDimensions() {
        const w = window;
        const d = document;
        const documentElement = d.documentElement;
        const body = d.getElementsByTagName('body')[0];
        const width = w.innerWidth || documentElement.clientWidth || body.clientWidth;
        
        if (width >= 991) 
            this.setState({
                width: width,
                widthGraph: 644,
                heightGraph: 373
            });
        
        if (width <= 990) 
            this.setState({
                width: width,
                widthGraph: 410,
                heightGraph: 380
            });
        
        if (width <= 880) 
            this.setState({
                width: width,
                widthGraph: 330,
                heightGraph: 250
            });
        
        if (width <= 719) 
            this.setState({
                width: width,
                widthGraph: 260,
                heightGraph: 250
            });
        if (width <= 559)
            this.setState({
                width: width,
                widthGraph: 300,
                heightGraph: 250
            });        
    }
  
    updateDimensions = () => {
        this.setState(this.getDimensions());
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
        getSales().then(res => {                
            this.setState({
                trafficData: res
            });
        });
    }

    render() {
        const { trafficData } =  this.state;
        
        return (
            <div className="trafficDiv">
                <h3>Site Traffic Overview</h3>
                <BarChart
                    width={this.state.widthGraph}
                    height={this.state.heightGraph}
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