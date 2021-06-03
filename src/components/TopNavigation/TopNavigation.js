import React, {Component, Fragment} from 'react';
import { Nav, Navbar} from "react-bootstrap";
import '../../asset/css/style.css';
import '../../asset/css/bootstrap.min.css';
import whiteLogo from '../../asset/image/navlogo.svg';
import blueLogo from '../../asset/image/navlogoScroll.svg';


class TopNavigation extends Component {
    constructor() {
        super();
        this.state={
            navBarTitle:"navTitle",
            navBarLogo:[whiteLogo],
            menuBarTitle:"menuTitle",
            menuBarColor:"menuColor",
        }

    }

    onScroll=()=>{
        if(window.scrollY>100){this.setState({navBarTitle:"navTitleScroll", navBarLogo:[blueLogo], menuBarTitle:"menuTitleScroll", menuBarColor:"menuColorScroll",})}
       else if(window.scrollY<100){this.setState({navBarTitle:"navTitle", navBarLogo:[whiteLogo], menuBarTitle:"menuTitle", menuBarColor:"menuColor",})}
    }

    componentDidMount() {window.addEventListener('scroll', this.onScroll)
    }

    render() {
        return (
            <Fragment>
                <Navbar fixed="top" className={this.state.menuBarColor} collapseOnSelect expand="lg" variant="dark">
                        <Navbar.Brand className={this.state.navBarTitle} href="#home"><img src={this.state.navBarLogo} /> React Testing</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                            </Nav>
                            <Nav>
                                <Nav.Link className={this.state.menuBarTitle} href="#">HOME</Nav.Link>
                                <Nav.Link className={this.state.menuBarTitle} href="#">SERVICES</Nav.Link>
                                <Nav.Link className={this.state.menuBarTitle} href="#">COURSES</Nav.Link>
                                <Nav.Link className={this.state.menuBarTitle} href="#">PORTFOLIO</Nav.Link>
                                <Nav.Link className={this.state.menuBarTitle} href="#">CONTACT</Nav.Link>
                                <Nav.Link className={this.state.menuBarTitle} href="#">ABOUT</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                </Navbar>
            </Fragment>
        );
    }
}

export default TopNavigation;