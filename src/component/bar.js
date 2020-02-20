import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavbarText
} from "reactstrap";

const Bar = props => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="https://youtube.com.co">
          <img width="50px" height="50px" src="./images/icon.png" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="d-flex justify-content-end mr-auto w-100" navbar>
            <NavbarText className="mx-3">Historial</NavbarText>
            <NavbarText className="mx-3">Cerrar sesión</NavbarText>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Bar;
