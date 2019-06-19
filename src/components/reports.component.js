import React, { useState, useEffect } from 'react'
import { getReports, postNewReport } from '../functions/reports';
import { Card, Feed } from 'semantic-ui-react';
import { Form } from 'semantic-ui-react';
import '../assets/css/reports.css'

export default function Reports() {
    const [reports, setReports] = useState([]);
    const [newMessage, setNewMessage] = useState([]);

    useEffect(() => {
        async function fetchReports() {
            const response = await getReports();
            setReports(response);
        }     

        fetchReports();

    }, [reports]);

    function handleSubmit(e) {
        e.preventDefault();
        
        async function postReport() {
            const response = await postNewReport(newMessage);
            alert(response);
        }

        if(newMessage.length < 1)
            alert("Incorret input");        
        else 
            postReport();
    }

    return (
        <Card className="cardCustom">
            <Card.Content style={{ marginTop: 10 }}>
                <Card.Header className="reportsTitle">
                    <h3>
                        Reports    
                    </h3>
                </Card.Header>
            </Card.Content>
            <Card.Content className="hiddenContent" style={{ height: 340 }}>
                { reports.map(reports => (
                    <Feed  key={reports.id}>
                        <Feed.Event>
                            
                            <Feed.Label style={{ marginTop: 5 }} image={reports.image} />
                            <Feed.Content>
                                <Feed.Summary>{reports.user}</Feed.Summary>
                                <Feed.Date style={{ marginTop: 5 }}>
                                    {reports.message}
                                </Feed.Date>
                                <Feed.Meta>
                                    <Feed.Like>
                                        {reports.time}
                                    </Feed.Like>
                                </Feed.Meta>
                            </Feed.Content>
                        </Feed.Event>
                    </Feed>
                ))}
                
            </Card.Content>
            <Card.Content>
                <Form className="customSubmitForm" onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Input placeholder='Type your comment here...' id='newMessage' onChange={e => setNewMessage(e.target.value)} />
                        <Form.Button type="submit" content='SEND' />
                    </Form.Group>
                </Form>
            </Card.Content>
        </Card>
    );
}