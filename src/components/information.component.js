import React, { useState, useEffect } from 'react';
import { faEye, faUsers, faDollarSign, faShoppingCart } from '@fortawesome/free-solid-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getInformation } from '../functions/information';
import { Container, Col } from 'react-bootstrap';
import '../assets/css/info.css';

var bgColors = { "Visitors": "#29cb97",
                "Users": "#FCC200",
                "Sales": "#4c84ff",
                "Orders": "#ca66ff"
};

export default function Information() {
    const [information, setInformation] = useState([]);

    useEffect(() => {
        async function fetchInfo() {
            const response = await getInformation();
            setInformation(response);
        }
        fetchInfo();
    }, []);

 
    return(
        <Container className="flexRectangles">
            
            <Col lg={3} md={6} sm={12}>
                <div className="rectangle" id="visitorsRect" style={{ backgroundColor: bgColors.Visitors }}>
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
            </Col>
            <Col lg={3} md={6} sm={12}>
                <div className="rectangle" id="usersRect" style={{ backgroundColor: bgColors.Users }}>
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
            </Col>
            <Col lg={3} md={6} sm={12}>
                <div className="rectangle" id="salesRect" style={{ backgroundColor: bgColors.Sales }}>
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
            </Col>
            <Col lg={3} md={6} sm={12}>
                <div className="rectangle" id="orderRect" style={{ backgroundColor: bgColors.Orders }}>
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
            </Col>
            
            
        </Container>
    )
    

}