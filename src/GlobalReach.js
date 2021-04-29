import React from 'react';
import { translate, useTranslation } from "react-i18next";

import connectingImg from './connecting.svg';
import dashBoard from './dashboard.svg';

const { t } = useTranslation();

function GlobalReach() {
    const { t } = useTranslation();
    //const [articles, setArticles] = useState([]);
    //const [count, setCount] = useState(0);

    return (
            <section className="globalReach">
                <div className="inner-wrapper">
                    {/*
                    <div className="title">
                        {t("whoIsUsing")}
                    </div>
                     */}
                    <div className="screenBack">
                        <div className="title-wrapper center">
                            <h3>{t("learnBeyondBoundaries")}</h3>
                        </div>

                        <div className="actualScreen animate-from-bottom">
                            <img alt="Dashboard Screenshot" src={dashBoard} />
                        </div>
                    </div>

                </div>
            </section>
    );
}

// extended main view with translate hoc
//export default translate("translations")(HeroBanner);
export default GlobalReach;
