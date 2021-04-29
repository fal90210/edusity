import React from 'react';
import { translate, useTranslation } from "react-i18next";
// import { withRouter } from "react-router-dom";

const { t } = useTranslation();

function flowerDiag() {
    //const { t } = useTranslation();
    //const [articles, setArticles] = useState([]);
    //const [count, setCount] = useState(0);

    return (
            <section className="flowerDiag">
                <div className="inner-wrapper">
                    {/*
                    <div className="title">
                        {t("whoIsUsing")}
                    </div>
                     */}
                    <div className="inner-wrapper">

                    </div>

                </div>
            </section>
    );
}

// extended main view with translate hoc
//export default translate("translations")(HeroBanner);
export default flowerDiag;
