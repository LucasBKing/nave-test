import React, { Component } from 'react';
import { faEye, faUsers, faDollarSign, faShoppingCart } from '@fortawesome/free-solid-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getInformation } from '../functions/information';

import '../assets/css/info.css';

var bgColors = { "Visitors": "#29cb97",
                "Users": "#FCC200",
                "Sales": "#4c84ff",
                "Orders": "#ca66ff",

};

export default class Information extends Component {
    constructor(props) {
        super(props);

        this.state = {
            information: []
        }
    }

    componentDidMount() {
        getInformation().then(res => {
            this.setState({
                information: res
            })
        })
    }

    render() {
        const { information } = this.state;
        return(
            <div className="flexRectangles">
                <div className="rectangle" style={{ marginLeft: "21.6px", backgroundColor: bgColors.Visitors }}>
                    <div>
                        <FontAwesomeIcon
                            size= "3x"
                            icon={faEye}
                            style={{ color: 'white' }}
                        />
                    </div>
                    <div className="rectContent">
                        <h2>{information.visitors}</h2>
                        <p>
                            Visitors
                        </p>
                    </div>
                    
                </div>
                <div className="rectangle" style={{ backgroundColor: bgColors.Users }}>
                    <div>
                        <FontAwesomeIcon
                            size= "3x"
                            icon={faUsers}
                            style={{ color: 'white' }}
                        />
                    </div>
                    <div className="rectContent">
                        <h2>{information.users}</h2>
                        <p>
                            Users
                        </p>
                    </div>
                </div>
                <div className="rectangle" style={{ backgroundColor: bgColors.Sales }}>
                    <div>
                        <FontAwesomeIcon
                            size= "3x"
                            icon={faDollarSign}
                            style={{ color: 'white' }}
                        />
                    </div>
                    <div className="rectContent">
                        <h2>{information.sales}</h2>
                        <p>
                            Sales
                        </p>
                    </div>
                </div>
                <div className="rectangle" style={{ backgroundColor: bgColors.Orders }}>
                <div>
                        <FontAwesomeIcon
                            size= "3x"
                            icon={faShoppingCart}
                            style={{ color: 'white' }}
                        />
                    </div>
                    <div className="rectContent">
                        <h2>{information.orders}</h2>
                        <p>
                            Orders
                        </p>
                    </div>
                </div>
            </div>
        )
    }

}