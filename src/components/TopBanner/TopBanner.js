import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";




class TopBanner extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topBanner p-0">
                    <div className="topBannerOverly">
                        <Container className="text-center topContent">
                            <Row>
                                <Col>
                                    <h1 className="topTitle">SOFTWARE ENGINEERING</h1>
                                    <h4 className="topSubTitle">Mobile & Web Application</h4>
                                    <Button variant="primary">More Info</Button>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default TopBanner;