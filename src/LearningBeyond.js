import React from 'react';
import { translate, useTranslation } from "react-i18next";
// import { withRouter } from "react-router-dom";
import img1 from './swBanner.svg';

const { t } = useTranslation();

function LearningBeyond() {
    const { t } = useTranslation();
    //const [articles, setArticles] = useState([]);
    //const [count, setCount] = useState(0);

    return (
            <section className="LearningBeyond">
                {/*
                <div className="inner-wrapper">
                    <span className="title">
                        {t("Why Edusity?")}
                    </span>
                </div>
                 */}

                <div className="inner-wrapper">
                    {/*
                    <div className="title">
                        {t("Learning Beyond Boundaries")}
                    </div>
                     */}

                    <div className="inner-half">
                        <div>
                            <h6 className="sub-title">
                                {t("Expert Instructors")}
                            </h6>
                            <span className="description">
                                {t("Expert Instructors Description")}
                            </span>
                        </div>

                        <div>
                            <h6 className="sub-title">
                                {t("Adaptive Learning")}
                            </h6>
                            <span className="description">
                                {t("Adaptive Learning Description")}
                            </span>
                        </div>

                    </div>

                    <div className="inner-half">

                        <div>
                            <h6 className="sub-title">
                                {t("Convinient & Safe")}
                            </h6>
                            <span className="description">
                                {t("Convinient & Safe Description")}
                            </span>
                        </div>

                        <div>
                            <h6 className="sub-title">
                                {t("Live & Interactive")}
                            </h6>
                            <span className="description">
                                {t("Live & Interactive Description")}
                            </span>
                        </div>
                    </div>

                    <div className="image-container">
                        <img alt="Software Banner" src={img1} />
                    </div>
                </div>
            </section>
    );
}

// extended main view with translate hoc
//export default translate("translations")(HeroBanner);
export default LearningBeyond;
