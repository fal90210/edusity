import React from 'react';
import { translate, useTranslation } from "react-i18next";
// import { withRouter } from "react-router-dom";

const { t } = useTranslation();

function whiteLabelIntro() {
    //const { t } = useTranslation();
    //const [articles, setArticles] = useState([]);
    //const [count, setCount] = useState(0);

    return (
            <section className="whiteLabel">
                <div className="inner-wrapper">
                    {/*
                    <div className="title">
                        {t("whoIsUsing")}
                    </div>
                     */}
                    <div>
                        <ul>
                            <li>For Enterprise</li>
                            <li>For Universities, Colleges & Institutes</li>
                            <li>For Corporate Training</li>
                            <li>White Label Solutions</li>
                        </ul>
                    </div>

                    <div>Right</div>
                </div>
            </section>
    );
}

// extended main view with translate hoc
//export default translate("translations")(HeroBanner);
export default whiteLabelIntro;
