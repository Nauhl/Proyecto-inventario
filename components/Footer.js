//import 'bootstrap/dist/css/bootstrap.min.css';
//mport React from 'react'
import { Form, FormControl, Button, Nav, Navbar, Card } from 'react-bootstrap';
import styles from '../styles/Home.module.css';

export default function Footer() {
    return (
        <>
            {/*
                <footer className={styles.Footer}>
                    <div className={styles.inner_footer}>
                        <div className="container" >
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
                </footer>*/
            }
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

            <div className={styles.foooter} >
                
                <div>
                    <h5 className="text-center text-light">Designed by me </h5> 
                    &nbsp;
                    <a href="https://github.com/Nauhl"><i className="fab fa-github text-white mr-4 text-center"></i></a>
                    <a href="#"><i className="fab fa-twitter-square text-white mr-4 text-center"></i></a>
                    <a className=".text-*-center text-light">@ Vivenda 2020 </a>
                </div>
            </div>
        </>
    )
}
  /*Better and easier fotter
              <Navbar fixed="bottom" className="bg-success">
                  <Navbar.Brand href="#" className=" text-light" >Nauhl</Navbar.Brand>
                  <Navbar.Toggle />
                  <Navbar.Collapse className="justify-content-end">
                      <Navbar.Text>
                          <a className="text-center text-light">Designed by me </a> &nbsp;
                          <a href="https://github.com/Nauhl"><i className="fab fa-github text-white mr-4"></i></a>
                          <a href="#"><i className="fab fa-twitter-square text-white mr-4"></i></a>
                          <a className="text-right text-light">@ Vivenda 2020 </a>
                      </Navbar.Text>
                  </Navbar.Collapse>
              </Navbar>
          }*/