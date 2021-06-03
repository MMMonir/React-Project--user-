import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class Courses extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">OUR COURSES</h1>
                    <Row>
                        <Col lg={6} md={6} sm={12} className="courseMargin">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImg" src="https://d3k81ch9hvuctc.cloudfront.net/company/R7x2tW/images/46e4f4d5-c17f-4770-8e4a-5bca96a27dc5.png"/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="courseTitle">Web Development</h5>
                                    <p className="courseDes">In publishing and graphic design, Lorem ipsum is a placeholder text commonly.</p>
                                    <a href="#" className="courseDetails float-left">Details</a>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={6} sm={12} className="courseMargin">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImg" src="https://d3k81ch9hvuctc.cloudfront.net/company/R7x2tW/images/46e4f4d5-c17f-4770-8e4a-5bca96a27dc5.png"/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="courseTitle">Web Development</h5>
                                    <p className="courseDes">In publishing and graphic design, Lorem ipsum is a placeholder text commonly.</p>
                                    <a href="#" className="courseDetails float-left">Details</a>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={6} sm={12} className="courseMargin">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImg" src="https://d3k81ch9hvuctc.cloudfront.net/company/R7x2tW/images/46e4f4d5-c17f-4770-8e4a-5bca96a27dc5.png"/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="courseTitle">Web Development</h5>
                                    <p className="courseDes">In publishing and graphic design, Lorem ipsum is a placeholder text commonly.</p>
                                    <a href="#" className="courseDetails float-left">Details</a>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={6} sm={12} className="courseMargin">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImg" src="https://d3k81ch9hvuctc.cloudfront.net/company/R7x2tW/images/46e4f4d5-c17f-4770-8e4a-5bca96a27dc5.png"/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="courseTitle">Web Development</h5>
                                    <p className="courseDes">In publishing and graphic design, Lorem ipsum is a placeholder text commonly.</p>
                                    <a href="#" className="courseDetails float-left">Details</a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Courses;