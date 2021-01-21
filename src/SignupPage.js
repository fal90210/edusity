import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
// import "./SearchPage.css";
// import * as yup from "yup";
//import { Formik } from "formik";
//import Form from "react-bootstrap/Form";
//import Col from "react-bootstrap/Col";
//import Button from "react-bootstrap/Button";
// import { Trans } from "react-i18next";
import { search } from "./requests";
//import Card from "react-bootstrap/Card";

// const schema = yup.object({
//     keyword: yup.string().required("Keyword is required"),
// });

function SignupPage() {
    const { t } = useTranslation();
    const [articles, setArticles] = useState([]);
    const [count, setCount] = useState(0);

    const handleSubmit = async e => {
        const response = await search({q: e.keyword});
        setArticles(response.data.response.docs || []);
    };

    return (
            <div className="LoginPage">
                <h1 className="center">{t("Sign up")}</h1>
                <p className="center">{t("Sign up intro")}</p>
            </div>
    );
}

export default SignupPage;
