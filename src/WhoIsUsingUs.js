import React from 'react';
import { translate, useTranslation } from "react-i18next";

const { t } = useTranslation();

function WhoIsUsingUs() {
    const { t } = useTranslation();

    return (
            <section className="whoIsUsingUs">
                <div className="inner-wrapper">
                    <div className="title">
                        {t("whoIsUsing")}
                    </div>

                    <ul>
                        <li>
                            <span>
                                <img src="https://www.uwo.ca/img/homepage/2017/ttl-westernlogo.svg" alt="University of Western Ontario" />
                            </span>
                        </li>
                        <li>
                            <span>
                                <img src="http://www.steamworksstudio.com/assets/img/logo1-default.png" alt="Steamworks Studio" />
                            </span>
                        </li>
                        <li>
                            <span>
                                <img src="https://dmve9cvmghp5o.cloudfront.net/images/redesign-2017/logo.png" alt="Tutor Doctor" />
                            </span>
                        </li>
                        <li>
                            <span>
                                <img src="https://www.walkinvirtualclinics.com/wp-content/uploads/2019/08/walk-client-page.png" alt="Walk-in Virtual Clinics" />
                            </span>
                        </li>
                        <li>
                            <span>
                                <img src="https://www.senecacollege.ca/content/dam/projects/seneca/seneca-logo.svg" alt="Seneca" />
                            </span>
                        </li>
                    </ul>
                </div>
            </section>
    );
}

// extended main view with translate hoc
//export default translate("translations")(HeroBanner);
export default WhoIsUsingUs;
