import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import { Bar, BarChart, ResponsiveContainer, XAxis, Tooltip} from 'recharts';


class Analysis extends Component {

    constructor(){
        super();
        this.state={data:[
            {Technology:"Java", Projects: 90},
            {Technology:"Kotlin", Projects: 40},
            {Technology:"Sql", Projects: 60},
            {Technology:"Bootstrap", Projects: 75},
            {Technology:"Jquery", Projects: 50},
            {Technology:"React", Projects: 70},
            {Technology:"PHP", Projects: 90},
            {Technology:"Angular", Projects: 55},
        ]}
    }

    render() {
        var blue="rgba(0,115,230,0.8)"
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">Technology Used</h1>
                    <Row>
                        <Col style={{width:'100%', height: '300px'}} lg={6} md={12} sm={12}>
<ResponsiveContainer>
    <BarChart width={100} height={300} data={this.state.data}>
        <XAxis dataKey="Technology"/>
        <Tooltip/>
        <Bar dataKey="Projects" fill={blue}>
        </Bar>
    </BarChart>
</ResponsiveContainer>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
<p className="technologyDes text-justify">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
<p className="technologyDes text-justify">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
<p className="technologyDes text-justify">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
<p className="technologyDes text-justify">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Analysis;