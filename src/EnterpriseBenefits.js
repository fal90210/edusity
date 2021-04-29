import React from 'react';
import { translate, useTranslation } from "react-i18next";
// import { withRouter } from "react-router-dom";

const { t } = useTranslation();

function EnterpriseBenefits() {
    //const { t } = useTranslation();
    //const [articles, setArticles] = useState([]);
    //const [count, setCount] = useState(0);

    return (
            <section className="enterpriseBenefits">
                <div className="inner-wrapper">
                    {/*
                    <div className="title">
                        {t("whoIsUsing")}
                    </div>
                     */}

                    <div className="title-holder">
                        <i className="ent-logo"></i>
                        {/*<h3>Enterprise Benefits</h3>*/}
                    </div>

                    <div className="benefits-wrapper">
                        <div className="ben-white-label product-img"></div>
                        <div>
                            <span>
                                <span className="ben-title">White Label Solutions</span><br />
                                <span className="ben-description">The perfect solution for any Institution looking to take their services online. Available for institutes from universities and businesses to health care consulting. Customizable to each institute’s needs and preferences</span>
                            </span>
                        </div>
                    </div>

                    <div className="benefits-wrapper">
                        <div>
                            <span>
                                <span className="ben-title">Interactive Whiteboard</span><br />
                                <span className="ben-description">The perfect solution for any Institution looking to take their services online. Available for institutes from universities and businesses to health care consulting. Customizable to each institute’s needs and preferences</span>
                            </span>
                        </div>
                        <div className="ben-interactive-wb product-img"></div>
                    </div>

                    <div className="benefits-wrapper">
                        <div className="ben-live-interactive product-img"></div>
                        <div>
                            <span>
                                <span className="ben-title">Live & Interactive Learning</span><br />
                                <span className="ben-description">The perfect solution for any Institution looking to take their services online. Available for institutes from universities and businesses to health care consulting. Customizable to each institute’s needs and preferences</span>
                            </span>
                        </div>
                    </div>

                    <div className="benefits-wrapper">
                        <div>Content</div>
                        <div></div>
                    </div>

                    <div className="benefits-wrapper">
                        <div></div>
                        <div>Content</div>
                    </div>
                </div>
            </section>
    );
}

// extended main view with translate hoc
//export default translate("translations")(HeroBanner);
export default EnterpriseBenefits;
