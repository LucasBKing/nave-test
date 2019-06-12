import React, { Component } from 'react'
import { getReports, postNewReport } from '../functions/reports';
import { Card, Feed } from 'semantic-ui-react';
import { Form } from 'semantic-ui-react';
import '../assets/css/reports.css'

export default class Reports extends Component {
    constructor(props) {
        super(props);

        this.state = {
            reports: [],
            newMessage: ''
        }
    }
    
    componentDidMount() {
        getReports().then(res => {
            this.setState({
                reports: res
            })
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // Getting last report
        // let lastReport = this.state.reports[this.state.reports.length -1];
        // let nextId = lastReport.id+1

        // let newPost = {
        //     id: nextId,
        //     user: "John Doe",
        //     image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        //     message: this.state.newMessage,
        //     time: "32 hours ago"
        // }

        postNewReport(this.state.newMessage).then(res => {
            if(res)
                getReports().then(reports => {
                    this.setState({
                        reports: reports
                    })
                })
        })
    }

    render() {
        const { reports } = this.state;
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
                    { reports.map(reports => {
                        return <Feed  key={reports.id}>
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
                    })}
                    
                </Card.Content>
                <Card.Content>
                    <Form className="customSubmitForm" onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Input placeholder='Type your comment here...' id='newMessage' onChange={this.handleChange} />
                            <Form.Button type="submit" content='SEND' />
                        </Form.Group>
                    </Form>
                </Card.Content>
            </Card>
        );
    }
}