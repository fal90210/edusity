import React from "react";
import { Router, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import TopBar from "./TopBar";
import { createBrowserHistory as createHistory } from "history";
//import "./App.css";

import SearchPage from "./SearchPage";
import EnterprisePage from "./EnterprisePage";
import PricingPage from "./PricingPage";
import TeachingPage from "./TeachingPage";
import BlogPage from "./BlogPage";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";

import Advert from "./Advert";

import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
const history = createHistory();

function App({ location }) {
    const { t, i18n } = useTranslation();
    const [initialized, setInitialized] = useState(false);
    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
    };

    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        if (!initialized) {
            changeLanguage(localStorage.getItem("language") || "en");
            setInitialized(true);
        }

        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 100);
        });
    });


    return (
            <div className={scroll ? "scrolled" : ""}>

                {/*
                <div className={scroll ? "showAd" : "hide"}>
                    <Advert />
                </div>
                 */}

                <Router history={history}>
                    <TopBar />
                    <Route path="/" exact component={HomePage}/>
                    <Route path="/search" exact component={SearchPage}/>
                    <Route path="/enterprise" exact component={EnterprisePage}/>
                    <Route path="/pricing" exact component={PricingPage}/>
                    <Route path="/blog" exact component={BlogPage}/>

                    <Route path="/teaching" exact component={TeachingPage}/>

                    <Route path="/login" exact component={LoginPage}/>
                    <Route path="/register" exact component={SignupPage}/>
                </Router>
            </div>
    );
}

export default App;
