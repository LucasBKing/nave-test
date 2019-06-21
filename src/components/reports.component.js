import React, { useState, useEffect } from 'react'
import { getReports, postNewReport } from '../functions/reports';
import { Card, Feed } from 'semantic-ui-react';
import { Form } from 'semantic-ui-react';
import '../assets/css/reports.css'

export default function Reports() {
    const [reports, setReports] = useState([]);
    const [newMessage, setNewMessage] = useState("");

    async function fetchReports() {
        const response = await getReports();
        setReports(response);
    }
    
    useEffect(() => {
        fetchReports();
    }, []);

    useEffect(() => {
        // Scrolling div to bottom with js
        var cardObj = document.getElementById("reportsCard");
        cardObj.scrollTop = cardObj.scrollHeight;
    }, [reports]);

    function handleSubmit(e) {
        e.preventDefault();
        
        async function postReport() {
            await postNewReport(newMessage);
            alert("Message sent!");
            setNewMessage("");
            /*
            * The best way I've figure out to get current reports array is calling the fetch function
            * after submit a valid new message.
            * Using useEffect like componentDidMount and componentWillUnmount the fecthReports function
            * is calling infinitive.
            */
            fetchReports();            
        }

        if(newMessage.length < 1) 
            alert("Incorret input");        
        else 
            postReport();        
    }

    return (
        <Card 
            className={`cardCustom`}
        >
            <Card.Content 
                style={{ marginTop: 10 }}
            >
                <Card.Header 
                    className={`reportsTitle`}
                >
                    <h3>Reports</h3>
                </Card.Header>
            </Card.Content>
            <Card.Content 
                id={`reportsCard`} 
                className={`hiddenContent`}   
                style={{ height: 340 }}
            >
                { reports.map(reports => (
                    <Feed 
                        key={reports.id}
                    >
                        <Feed.Event>
                            <Feed.Label 
                                style={{ marginTop: 5 }} 
                                image={reports.image} 
                            />
                            <Feed.Content>
                                <Feed.Summary>{reports.user}</Feed.Summary>
                                <Feed.Date 
                                    style={{ marginTop: 5 }}
                                >
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
                <Form 
                    className={`customSubmitForm`} 
                    onSubmit={handleSubmit}
                >
                    <Form.Group>
                        <Form.Input 
                            placeholder={`Type your comment here...`}
                            value={newMessage} 
                            onChange={e => setNewMessage(e.target.value)} 
                        />
                        <Form.Button 
                            type={`submit`} 
                            content={`SEND`} 
                        />
                    </Form.Group>
                </Form>
            </Card.Content>
        </Card>
    );
}