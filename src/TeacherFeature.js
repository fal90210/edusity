import React, { Component } from 'react';
import { translate, useTranslation } from "react-i18next";
// import { withRouter } from "react-router-dom";
//import ChangeLanguage from "./ChangeLanguage";
//import Header from "./Header";

import instructorImg from './teacher-feature.png';

const { t } = useTranslation();

function TeacherFeature() {
    const { t } = useTranslation();
    //const [articles, setArticles] = useState([]);
    //const [count, setCount] = useState(0);

    return (
            <section className="teacherFeature">
                {/*<p className="center">{t("Enterprise Intro")}</p>*/}

                <div className="inner-wrapper">
                    <div className="right">
                        {/*<img src={instructorImg} alt="Instructor Feature" />*/}
                    </div>

                    <div className="left">
                        <h6>
                            <span>{t("featured instructor")}</span>
                            <span>Alejandro Aranda</span>
                            <span>Tuzaingó, Argentina</span>
                        </h6>
                        <div className="title-subheader">
                            How edusity is helping me reach my music to a global classroom with full content control
                        </div>
                        <div className="btn bio">
                            <a href="#">Checkout my Bio!</a>
                        </div>
                    </div>
                </div>
            </section>
    );
}

// extended main view with translate hoc
//export default translate("translations")(HeroBanner);
export default TeacherFeature;
