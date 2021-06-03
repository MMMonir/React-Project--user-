import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";

class RecentProjects extends Component {
    render() {
        return (
            <Fragment>
<Container className="text-center">
    <h1 className="serviceMainTitle">MY SERVICES</h1>
    <Row>
        <Col lg={4} md={6} sm={12}>
            <Card className="projectCard">
                <Card.Img variant="top" src="https://d3k81ch9hvuctc.cloudfront.net/company/R7x2tW/images/46e4f4d5-c17f-4770-8e4a-5bca96a27dc5.png" />
                <Card.Body>
                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                    <Card.Text className="projectCardDes">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Details</Button>
                </Card.Body>
            </Card>
        </Col>
        <Col lg={4} md={6} sm={12}>
            <Card className="projectCard">
                <Card.Img variant="top" src="https://d3k81ch9hvuctc.cloudfront.net/company/R7x2tW/images/46e4f4d5-c17f-4770-8e4a-5bca96a27dc5.png" />
                <Card.Body>
                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                    <Card.Text className="projectCardDes">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Details</Button>
                </Card.Body>
            </Card>
        </Col>
        <Col lg={4} md={6} sm={12}>
            <Card className="projectCard">
                <Card.Img variant="top" src="https://d3k81ch9hvuctc.cloudfront.net/company/R7x2tW/images/46e4f4d5-c17f-4770-8e4a-5bca96a27dc5.png" />
                <Card.Body>
                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                    <Card.Text className="projectCardDes">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Details</Button>
                </Card.Body>
            </Card>
        </Col>
    </Row>
</Container>
            </Fragment>
        );
    }
}

export default RecentProjects;