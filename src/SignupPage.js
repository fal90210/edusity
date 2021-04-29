import React from "react";
//import { useState } from "react";
import { useTranslation } from "react-i18next";
import Footer from "./Footer";
import { search } from "./requests";

// const schema = yup.object({
//     keyword: yup.string().required("Keyword is required"),
// });

function SignupPage() {
    const { t } = useTranslation();
    //const [articles, setArticles] = useState([]);
    //const [count, setCount] = useState(0);

    //const handleSubmit = async e => {
    //const response = await search({q: e.keyword});
    //setArticles(response.data.response.docs || []);
    //};

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
                                        <input checked type="radio" id="test1" name="radio-group"/>
                                        <label for="test1">Student</label>
                                    </span>

                                    <span>
                                        <input type="radio" id="test2" name="radio-group"/>
                                        <label for="test2">Parent</label>
                                    </span>

                                    <span>
                                        <input type="radio" id="test3" name="radio-group"/>
                                        <label for="test3">Teacher</label>
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

                                {/*
                                 <div className="form-row half">
                                 <div>
                                 <select>
                                 <option>Select Country Code</option>
                                 <option></option>
                                 <option></option>
                                 </select>
                                 </div>
                                 <div>
                                 <input id="email_ID"
                                 className="full"
                                 placeholder="phone"
                                 />
                                 </div>
                                 </div>
                                 */}

                                <div className="form-row">
                                    <input id="email_ID"
                                           type="password"
                                           className="full"
                                           placeholder="password"
                                    />
                                </div>

                                {/*
                                 <div className="form-row">
                                 <input id="email_ID"
                                 type="password"
                                 className="full"
                                 placeholder="confirm password"
                                 />
                                 </div>
                                 */}
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
    );
}

export default SignupPage;
