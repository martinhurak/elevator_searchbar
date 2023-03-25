
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, Outlet } from 'react-router-dom';
import {  useState } from 'react';

function Menu() {

  const [offCanvasMenu, setOffCanvasMenu] = useState(false);

  return (
    <> 
    {
        <Navbar key={"md"} bg="dark" variant="dark" expand={"md"} className="mb-3">
          <Container fluid>
            <Navbar.Brand as={Link} to="/elevator_searchbar" href="#">
               Výtahy
            </Navbar.Brand>
            <Navbar.Toggle onClick={()=>setOffCanvasMenu(true)}  aria-controls={`offcanvasNavbar-expand-${"md"}`} />
             <Navbar.Offcanvas 
              show={offCanvasMenu}
              onHide={() => setOffCanvasMenu(false)}
              id={`offcanvasNavbar-expand-${"md"}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${"md"}`}
              placement="end"
            >
              <Offcanvas.Header closeButton  >
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${"md"}`} >
                 Výtahy
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link onClick={()=> setOffCanvasMenu(false)} as={Link} to="/elevator_searchbar" > Vyhladavnie</Nav.Link>
                  <Nav.Link onClick={()=> setOffCanvasMenu(false)} as={Link} to="serviceNote"> Služba </Nav.Link>          
                </Nav>
                <Outlet/>
                <Form className="d-flex">
                </Form>
              </Offcanvas.Body> 
            </Navbar.Offcanvas> 
          </Container>
        </Navbar> 
       }
    </>
  );
}

export default Menu;


