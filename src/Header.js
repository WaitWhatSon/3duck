import { useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function Header() {

    useEffect(()=>{
        document.title = "3DUCK";
    });

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand>3DUCK</Navbar.Brand>
                <Nav.Link>🦆🦆🦆</Nav.Link>
            </Container>
        </Navbar>
    );
}

export default Header;