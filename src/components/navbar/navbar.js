import Container from 'react-bootstrap/Container'
import { Navbar, Nav } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import discord_logo from '../../assets/discord_logo.png'



const NavBar = () => {

    const navSelect = (key) => {
        console.log(key)
    }

    return(
        <Navbar bg="dark" variant="dark">
        <Container fluid>
            <LinkContainer to="/">
                <Navbar.Brand> 
                    <img
                    alt=""
                    src={discord_logo}
                    width="100"
                    height="100"
                    className="d-inline-block align-top"
                    />{' '}
                </Navbar.Brand>
            </LinkContainer>
            <Nav onSelect={navSelect}>
            <Nav.Item>
                <LinkContainer to="/">
                    <Nav.Link eventKey="home">Home</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer to="/rules">
                    <Nav.Link eventKey="rules">Rules</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer to="/rankings">
                    <Nav.Link eventkey="rankings">Rankings</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            </Nav>
        </Container>
      </Navbar>
    )
}

export default NavBar;