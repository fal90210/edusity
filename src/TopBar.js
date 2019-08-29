import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./TopBar.css";
import { withRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";

function TopBar({ location }) {
  const { pathname } = location;
  const { t, i18n } = useTranslation();
  const changeLanguage = lng => {
    localStorage.setItem("language", lng);
    i18n.changeLanguage(lng);
  };

  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Navbar.Brand href="#home">{t("New York Times App")}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/" active={pathname == "/"}>
            Home
          </Nav.Link>
          <Nav.Link href="/search" active={pathname.includes("/search")}>
            Search
          </Nav.Link>
          <NavDropdown title="Language" id="basic-nav-dropdown">
            <NavDropdown.Item onClick={() => changeLanguage("en")}>
              English
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => changeLanguage("fr")}>
              French
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default withRouter(TopBar);
