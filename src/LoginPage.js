import React from "react";
//import { useState } from "react";
import { useTranslation } from "react-i18next";

import Footer from "./Footer";
import { search } from "./requests";
//import Card from "react-bootstrap/Card";

// const schema = yup.object({
//     keyword: yup.string().required("Keyword is required"),
// });

function LoginPage() {
    const { t } = useTranslation();
    //const [articles, setArticles] = useState([]);
    //const [count, setCount] = useState(0);

    //const handleSubmit = async e => {
    //    const response = await search({q: e.keyword});
        //setArticles(response.data.response.docs || []);
    //};

    return (
            <div className="LoginPage">
                <h1 className="center">{t("Log in")}</h1>
                <p className="center">{t("Login Intro")}</p>

                <Footer />
            </div>
    );
}

export default LoginPage;
