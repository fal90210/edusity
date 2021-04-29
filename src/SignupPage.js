import React from "react";
//import { useState } from "react";
import { useTranslation } from "react-i18next";
import Footer from "./Footer";
import { search } from "./requests";

function SignupPage() {
    const { t } = useTranslation();

    return (
            <div className="LoginPage">

                <div className="signupScreen">
                    {/*
                     <h1 className="center">{t("Sign up")}</h1>
                     <p className="center">{t("Sign up intro")}</p>
                     */}

                    <div className="inner-wrapper">
                        <div className="left-section">
                            <h5>Join over a million students, parents and instructor members from around the world</h5>
                        </div>

                        <div className="right-section">
                            <div className="right-top">
                                <h5>Create Account</h5>
                                <div className="finePrnt">
                                    Already registered? <a href="/login">Log In</a>
                                </div>
                            </div>

                            <div className="register-as">
                                <span className="reg-me">I want to register as a:</span>
                                <div>
                                    <span>
                                        <input type="radio" id="test1" name="radio-group"/>
                                        <label htmlFor="test1">Student</label>
                                    </span>

                                    <span>
                                        <input type="radio" id="test2" name="radio-group"/>
                                        <label htmlFor="test2">Parent</label>
                                    </span>

                                    <span>
                                        <input type="radio" id="test3" name="radio-group"/>
                                        <label htmlFor="test3">Teacher</label>
                                    </span>
                                </div>
                            </div>

                            <div className="form-wrapper">
                                <div className="form-row half">
                                    <div>
                                        <input id="first_name"
                                               className="full"
                                               type="text"
                                               placeholder="first name"
                                        />
                                    </div>

                                    <div>
                                        <input id="last_name"
                                               className="full"
                                               type="text"
                                               placeholder="last name"
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <input id="email_ID"
                                           className="full"
                                           type="text"
                                           placeholder="email"
                                    />
                                </div>

                                <div className="form-row">
                                    <input id="email_ID"
                                           type="password"
                                           className="full"
                                           placeholder="password"
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
    );
}

export default SignupPage;
