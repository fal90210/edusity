import React from 'react';
import { translate, useTranslation } from "react-i18next";
// import { withRouter } from "react-router-dom";

const { t } = useTranslation();

function Advert() {
    const { t } = useTranslation();

    return (
            <section className="flowerDiag">
                <div className="inner-wrapper">

                    <div className="advert">
                        <h1>{t("Enterprise")}</h1>
                    </div>

                </div>
            </section>
    );
}

export default Advert;
