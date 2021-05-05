import React from "react";
//import { useState } from "react";
import { useTranslation } from "react-i18next";

import Footer from "./Footer";
import { search } from "./requests";

function LoginPage() {
    const { t } = useTranslation();

    return (
            <div className="LoginPage">
                <h1 className="center">{t("Log in")}</h1>
                <p className="center">{t("Login Intro")}</p>
                <form className="center">
                    <label>
                    <p>Username</p>
                    <input type="text" />
                    </label>
                    <label>
                    <p>Password</p>
                    <input type="password" />
                    </label>
                    <div>
                    <button type="submit">Submit</button>
                    </div>
                 </form>

                <Footer />
            </div>
    );
}

export default LoginPage;
