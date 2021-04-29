import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./SearchPage.css";

import TeacherBanner from "./TeacherBanner";
import TeacherBenifits from "./TeacherBenifits";
import Footer from "./Footer";
import { search } from "./requests";

function TeachingPage() {
    const { t } = useTranslation();
    //const [articles, setArticles] = useState([]);
    const [count, setCount] = useState(0);

    const handleSubmit = async e => {
        const response = await search({q: e.keyword});
        //setArticles(response.data.response.docs || []);
    };

    return (
            <div className="teacherPage">
                <TeacherBanner />
                <TeacherBenifits />

                <Footer />
            </div>
    );
}

export default TeachingPage;
