import React from "react";
//import { useState } from "react";
import { useTranslation } from "react-i18next";

import Footer from "./Footer";
import { search } from "./requests";
//import Card from "react-bootstrap/Card";

function LoginPage() {
    const { t } = useTranslation();

    return (
            <div className="LoginPage">
                <h1 className="center">{t("Log in")}</h1>
                <p className="center">{t("Login Intro")}</p>

                <Footer />
            </div>
    );
}

export default LoginPage;
