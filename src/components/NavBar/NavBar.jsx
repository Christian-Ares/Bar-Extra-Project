import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

export const NavBar = () => {
    return (
    <div>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">BarExtra</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Button variant="outline-info">Acceso Empresa</Button>
                    <Button variant="outline-info">Acceso Candidato</Button>
                </Nav>
                {/* <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form> */}
        </Navbar>
    </div>
    )
}
