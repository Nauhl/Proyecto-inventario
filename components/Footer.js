import 'bootstrap/dist/css/bootstrap.min.css';
//mport React from 'react'
import { Form, FormControl, Button, Nav, Navbar, Card } from 'react-bootstrap';

export default function Footer() {
    return (
        <>
            <nav>
                <div className="container" >
                    <footer className="page-footer bg-blue" id="footer">
                        <div className="bg-success">
                            <div className="container">
                                <div className="row py-4 d-flex align-items-center">
                                    <div className="col-md-12 text-center">
                                        <h4 className="text-center text-light" >Inventory </h4>
                                        <a className="text-center text-light">Designed by me</a> &nbsp;
                                        <a href="https://github.com/Nauhl"><i className="fab fa-github text-white mr-4"></i></a>
                                        <a href="#"><i className="fab fa-twitter-square text-white mr-4"></i></a>
                                        <a className="text-right text-light">@ Vivenda 2020 </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </nav>
            <br />
            {/* Better and easier fotter
        <Navbar bg="dark" variant="dark" fixed="top">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
        */}


        {/*   Better and easier fotter 
        <Navbar fixed="bottom" >
            <Card className="text-center">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
            </Navbar>
        */}
        </>
    )
}