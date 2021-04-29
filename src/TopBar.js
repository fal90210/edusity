import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
// import "./TopBar.css";
// import { useState, useEffect } from "react";
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
                <Navbar.Brand href="/" title="Edusity Home" >
                    <i aria-label="Edusity Logo" className="edusity-logo"></i>
                </Navbar.Brand>
                <Navbar.Toggle style={{display: "none"}} aria-controls="basic-navbar-nav"/>
                <Navbar.Toggle aria-controls="courses-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {/*
                        <Nav.Link href="/" active={pathname == "/"}>
                            {t("Home")}
                        </Nav.Link>
                        <Nav.Link href="/search" active={pathname.includes("/search")}>
                            {t("Search")}
                        </Nav.Link>
                        */}
                        <NavDropdown title={t("Language")} id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={() => changeLanguage("en")}>
                                {t("English")}
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => changeLanguage("fr")}>
                                {t("Français")}
                            </NavDropdown.Item>
                            {/**/}
                            <NavDropdown.Item onClick={() => changeLanguage("de")}>
                                {t("Deutsch")}
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => changeLanguage("es")}>
                                {t("Español")}
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => changeLanguage("pt")}>
                                {t("Português")}
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => changeLanguage("jp")}>
                                {t("日本語")}
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => changeLanguage("hi")}>
                                {t("हिंदी")}
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => changeLanguage("ru")}>
                                {t("Pусский")}
                            </NavDropdown.Item>
                        </NavDropdown>

                        <div className="btn courses-btn">
                            <a className="pinoo" href="#">{t("nav.courses")}</a>

                            <div className="hover-menu">
                                <ul>
                                    <li><a href="#">One</a></li>
                                    <li><a href="#">Two</a></li>
                                    <li><a href="#">Three</a></li>
                                    <li><a href="#">Four</a></li>
                                    <li><a href="#">Five</a></li>
                                </ul>

                                <div>{t("nav.one")}</div>
                            </div>
                        </div>

                        <Nav.Link href="/enterprise" active={pathname.includes("/enterprise")}>
                            {t("Enterprise")}
                        </Nav.Link>
                        <Nav.Link href="/teaching" active={pathname.includes("/teaching")}>
                            {t("Teach with edusity")}
                        </Nav.Link>
                        {/*
                        <Nav.Link href="/blog" active={pathname.includes("/blog")}>
                            {t("Blog")}
                        </Nav.Link>
                        */}

                        <div className="cookie">
                        <div className="btn login-btn">
                        <Nav.Link href="/login" active={pathname.includes("/login")}>
                                {t("Login")}
                        </Nav.Link>
                    </div>
                    <div className="btn signup-btn">
                        <Nav.Link href="/register" active={pathname.includes("/register")}>
                                {t("Signup")}
                        </Nav.Link>
                    </div>
                        </div>
                    </Nav>
                </Navbar.Collapse>

                <div className="button-wrapper">
                    <div className="btn login-btn">
                        <Nav.Link href="/login" active={pathname.includes("/login")}>
                                {t("Login")}
                        </Nav.Link>
                    </div>
                    <div className="btn signup-btn">
                        <Nav.Link href="/register" active={pathname.includes("/register")}>
                                {t("Signup")}
                        </Nav.Link>
                    </div>

                </div>
            </Navbar>
    );
}

export default withRouter(TopBar);
