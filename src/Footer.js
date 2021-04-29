import React from 'react';
import { translate, useTranslation } from "react-i18next";

const { t } = useTranslation();

function Footer() {
    const { t } = useTranslation();
    //const [articles, setArticles] = useState([]);
    //const [count, setCount] = useState(0);

    return (
            <footer className="footer">
                <div className="">

                    <div className="inner-wrapper">
                        <div className="footer-col">
                            <ul>
                                <li>
                                    <a href="/enterprise">
                                        {t("Enterprise")}
                                    </a>
                                </li>
                                <li>
                                    <a href="/pricing">
                                        {t("Pricing")}
                                    </a>
                                </li>
                                <li>
                                    <a href="/teaching">
                                        {t("Teach with edusity")}
                                    </a>
                                </li>
                                <li>
                                    <a href="/about">
                                        {t("About Edusity")}
                                    </a>
                                </li>
                                <li className="new">
                                    <a href="/blog">
                                        {t("Edusity Blog")}
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <ul>
                                <li>
                                    <a href="#">
                                        {t("All Categories")}
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        {t("All Courses")}
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        {t("For Post Secondary")}
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        {t("For Corporate Training")}
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <ul>
                                <li>
                                    <a href="#">
                                        {t("events")}
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        {t("press")}
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        {t("careers")}
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        {t("sitemap")}
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        {t("Help and Support")}
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <div className="footer-subtitle">{t("Connect with us")}</div>

                            <ul className="social-icons">
                                <li className="twitter-icon">
                                    <a aria-label="Link to Twitter" href="https://twitter.com/Edusityglobal" target="_blank"></a>
                                </li>

                                <li className="facebook-icon">
                                    <a aria-label="Link to Facebook" href="https://www.facebook.com/Edusitycom/" target="_blank"></a>
                                </li>

                                <li className="instagram-icon">
                                    <a  aria-label="Link to Instagram" href="https://www.instagram.com/edusityglobal/" target="_blank"></a>
                                </li>

                                <li className="linkedin-icon">
                                    <a aria-label="Link to Linked In" href="https://www.linkedin.com/company/edusity/" target="_blank"></a>
                                </li>
                            </ul>

                            <div className="footer-subtitle">{t("Coming Soon")}</div>

                            <ul>
                                <li><a href="#">MacOS</a></li>
                                <li><a href="#">Android</a></li>
                            </ul>

                            <ul>
                                <li>
                                    <a href="#">
                                        {t("terms")}
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        {t("Privacy Policy")}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="bottom-footer">
                        <div>
                            <a href="/" title="Edusity Home" className="navbar-brand">
                                <i aria-label="Edusity Logo" className="edusity-logo"></i>
                            </a>
                        </div>
                        <div>&copy; Copyright 2021. Edusity Inc.</div>
                    </div>
                </div>
            </footer>
    );
}

// extended main view with translate hoc
//export default translate("translations")(HeroBanner);
export default Footer;
