import React, {Component} from 'react';
import { Navbar, Nav, Container, Image} from 'react-bootstrap'
import '../navbar.css'

export default class NavbarComp extends Component {
    render() {
        const Rule = ({ color }) => (
            <div
              style={{
                borderColor: color,
                backgroundColor: color,
                height: 12,
                padding: 0,
                margin: 0,
                zIndex: 1
              }}
            />
          );
        return (
            <div>
                <div>
                    <Rule color = 'rgba(255,86,45, 1)' />
                </div>
                <div className='navbarSpacer'>
                  <Container>
                    <h1 className='navbarSpacerText'>UNIVERSITY OF ILLINOIS URBANA-CHAMPAIGN</h1>    
                  </Container>
                    
                </div>
               
                <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home" style={{marginTop: 3, marginBottom: 3}}>
                        <img
                            src="/images/University-Wordmark-Full-Color-RGB 2.png"
                            alt = "UIUC Blockchain"
                            className = "d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Navbar.Brand href="#home"></Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                      
                    </Navbar.Toggle>
                    
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto navRespon">
                        <Nav.Link className='navbar-Text' style={{paddingRight: 50}} href="#about">About</Nav.Link>
                        <Nav.Link className='navbar-Text' style={{paddingRight: 50}} href="#link">Explore</Nav.Link>
                        <Nav.Link className='navbar-Text' style={{paddingRight: 50}} href="#people">People</Nav.Link>
                        <Nav.Link className='navbar-Text btn' style={{backgroundColor: '#FF552E', color: 'white', borderRadius: 50, paddingLeft: 10, paddingRight: 10}} href="#link">Give Now</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
               </Container>
                </Navbar>
            </div>
        )
    }
}