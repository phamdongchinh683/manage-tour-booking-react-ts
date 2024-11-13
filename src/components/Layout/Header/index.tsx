import { FC } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import useToken from '../../../jwt/useToken';
import data from "../../../mock/test.json";
import DropDown from '../../DropDown';
export const Header: FC = () => {
 const{deleteToken} = useToken();

 const logout = () =>{
  window.location.reload();
  deleteToken();
 }

  return (
   <Navbar expand="lg" className="bg-body-tertiary">
   <Container>
     <Link to="/">
      <Navbar.Brand>Dashboard</Navbar.Brand>
     </Link>
     <Navbar.Toggle aria-controls="basic-navbar-nav" />
     <Navbar.Collapse id="basic-navbar-nav">
       <Nav className="me-auto">
        {/* <DropDown data={data.user}/> */}
         <NavDropdown title="Feature" id="basic-nav-dropdown">
           <NavDropdown.Item onClick={logout}>
             Logout
           </NavDropdown.Item>
         </NavDropdown>
       </Nav>
     </Navbar.Collapse>
   </Container>
 </Navbar>
  );
}
