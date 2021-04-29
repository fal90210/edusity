import React from 'react';
import { translate, useTranslation } from "react-i18next";
// import { withRouter } from "react-router-dom";

import yahooFin from './yahoo-finance.svg';
import hamSpec from './ham-spec.svg';
import b2BNNLogo from './B2BNNLogo.svg';

const { t } = useTranslation();

function FeaturedOn() {
    const { t } = useTranslation();
    //const [articles, setArticles] = useState([]);
    //const [count, setCount] = useState(0);

    return (
            <section className="whoIsUsingUs">
                <div className="inner-wrapper">
                    <div className="title">
                        {t("featuredOn")}
                    </div>

                    <ul>
                        <li>
                            <span>
                                <img src={yahooFin} alt="Yahoo Finance" />
                            </span>
                        </li>
                        <li>
                            <span>
                                <img src={hamSpec} alt="The Hamilton Spectator" />
                            </span>
                        </li>
                        <li>
                            <span>
                                <img src={b2BNNLogo} alt="B2BNN Logo" />
                            </span>
                        </li>
                    </ul>
                </div>
            </section>
    );
}

// extended main view with translate hoc
//export default translate("translations")(HeroBanner);
export default FeaturedOn;
