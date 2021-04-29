import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./SearchPage.css";

import Footer from "./Footer";

function PricingPage() {
    const { t } = useTranslation();
    //const [articles, setArticles] = useState([]);
    const [count, setCount] = useState(0);

    return (
            <div className="PricingPage">
                <div className="title-wrapper animate-from-bottom">
                    <div className="inner-wrapper">
                        <h1>{t("pricing.No Risk")}</h1>
                        <p>{t("pricing.Pricing Intro")}</p>
                    </div>
                </div>

                <div className="coming-soon">
                    <div className="inner-wrapper">
                        <div className="options-wrapper">
                            <span>{t("pricing.Monthly")}</span>
                            <span>{t("pricing.Yearly")}</span>
                        </div>

                        <div className="cs-title">Coming Soon</div>
                    </div>
                </div>

                <div className="pricing-wrapper">
                    <div className="pricing-inner-wrapper">
                        <div className="pricing-col">
                            <div className="pricing-row header">Plans</div>
                            <div className="pricing-row tallBoy">{t("pricing.Pricing")}</div>
                            <div className="pricing-row">Max user accounts</div>
                            <div className="pricing-row">Max file storage</div>
                            <div className="pricing-row">Virtual classroom</div>
                            <div className="pricing-row">Session Recording</div>
                            <div className="pricing-row">Total Virtual sessions per day</div>
                            <div className="pricing-row">Max concurrent video conferencing</div>
                            <div className="pricing-row">Upload video course files</div>
                            <div className="pricing-row greenBg">Free trial</div>
                            <div className="pricing-row">Unlimted courses & activities</div>
                            <div className="pricing-row">Web conferencing</div>
                            <div className="pricing-row">Webinar recording</div>
                            <div className="pricing-row">File sharing</div>
                            <div className="pricing-row">Visual scheduling</div>
                            <div className="pricing-row">Community forum</div>
                            <div className="pricing-row">Reporting</div>
                            <div className="pricing-row">Analytics dashboard</div>
                            <div className="pricing-row">Concurrent sessions</div>
                            <div className="pricing-row">Secure SSL certification</div>
                            <div className="pricing-row">Automated backup/restore</div>
                            <div className="pricing-row">Customer support</div>
                        </div>

                        <div className="pricing-col">
                            <div className="pricing-row header">Lite</div>
                            <div className="pricing-row tallBoy">
                                <span className="pricing-desc">299</span>
                                <div className="per-year">{t("pricing.per year")}</div>
                                <div className="finePrnt">
                                    <span>$16.58 /month</span>
                                    <span>{t("pricing.billed annually")}</span>
                                </div>
                            </div>
                            <div className="pricing-row">50 Users</div>
                            <div className="pricing-row">500 MB</div>
                            <div className="pricing-row">60 Mins</div>
                            <div className="pricing-row">3 Days</div>
                            <div className="pricing-row">2 Sessions</div>
                            <div className="pricing-row">50 Users</div>
                            <div className="pricing-row">No</div>
                            <div className="pricing-row greenBg">30 Days</div>
                            <div className="pricing-row"><i className="checkmark"></i></div>
                            <div className="pricing-row"><i className="checkmark"></i></div>
                            <div className="pricing-row"><i className="checkmark"></i></div>
                            <div className="pricing-row"><i className="checkmark"></i></div>
                            <div className="pricing-row"><i className="checkmark"></i></div>
                            <div className="pricing-row"><i className="checkmark"></i></div>
                            <div className="pricing-row"><i className="checkmark"></i></div>
                            <div className="pricing-row"><i className="checkmark"></i></div>
                            <div className="pricing-row"><i className="checkmark"></i></div>
                            <div className="pricing-row"><i className="checkmark"></i></div>
                            <div className="pricing-row"><i className="checkmark"></i></div>
                            <div className="pricing-row"><i className="checkmark"></i></div>
                        </div>

                        <div className="pricing-col">
                            <div className="pricing-row header">Advanced<span
                                    className="full-too">{t("pricing.Most Popular")}</span></div>
                            <div className="pricing-row tallBoy">
                                <span className="pricing-desc">499</span>
                                <div className="per-year">{t("pricing.per year")}</div>
                                <div className="finePrnt">
                                    <span>$41.58 /month</span>
                                    <span>{t("pricing.billed annually")}</span>
                                </div>
                            </div>
                            <div className="pricing-row">200 Users</div>
                            <div className="pricing-row">1.5 GB</div>
                            <div className="pricing-row">60 Mins</div>
                            <div className="pricing-row">5 Days</div>
                            <div className="pricing-row">4 Sessions</div>
                            <div className="pricing-row">100 Users</div>
                            <div className="pricing-row">No</div>
                            <div className="pricing-row greenBg">30 Days</div>
                            <div className="pricing-row"><i className="checkmark"></i></div>
                            <div className="pricing-row"><i className="checkmark"></i></div>
                            <div className="pricing-row"><i className="checkmark"></i></div>
                            <div className="pricing-row"><i className="checkmark"></i></div>
                            <div className="pricing-row"><i className="checkmark"></i></div>
                            <div className="pricing-row"><i className="checkmark"></i></div>
                            <div className="pricing-row"><i className="checkmark"></i></div>
                            <div className="pricing-row"><i className="checkmark"></i></div>
                            <div className="pricing-row"><i className="checkmark"></i></div>
                            <div className="pricing-row"><i className="checkmark"></i></div>
                            <div className="pricing-row"><i className="checkmark"></i></div>
                            <div className="pricing-row"><i className="checkmark"></i></div>
                        </div>

                        <div className="pricing-col">
                            <div className="pricing-row header">Pro<span
                                    className="full-too next">{t("pricing.Best Value")}</span></div>
                            <div className="pricing-row tallBoy">
                                <span className="pricing-desc">1199</span>
                                <div className="per-year">{t("pricing.per year")}</div>
                                <div className="finePrnt">
                                    <span>$99.91 /month</span>
                                    <span>{t("pricing.billed annually")}</span>
                                </div>
                            </div>
                            <div className="pricing-row">500 Users</div>
                            <div className="pricing-row">3 GB</div>
                            <div className="pricing-row">90 Mins</div>
                            <div className="pricing-row">20 Days</div>
                            <div className="pricing-row">15 Sessions</div>
                            <div className="pricing-row">200 Users</div>
                            <div className="pricing-row">Yes</div>
                            <div className="pricing-row greenBg">30 Days</div>
                            <div className="pricing-row"><i className="checkmark"></i></div>
                            <div className="pricing-row"><i className="checkmark"></i></div>
                            <div className="pricing-row"><i className="checkmark"></i></div>
                            <div className="pricing-row"><i className="checkmark"></i></div>
                            <div className="pricing-row"><i className="checkmark"></i></div>
                            <div className="pricing-row"><i className="checkmark"></i></div>
                            <div className="pricing-row"><i className="checkmark"></i></div>
                            <div className="pricing-row"><i className="checkmark"></i></div>
                            <div className="pricing-row"><i className="checkmark"></i></div>
                            <div className="pricing-row"><i className="checkmark"></i></div>
                            <div className="pricing-row"><i className="checkmark"></i></div>
                            <div className="pricing-row"><i className="checkmark"></i></div>
                        </div>

                        <div className="pricing-col">
                            <div className="pricing-row header">Custom Pro</div>
                            <div className="pricing-row tallBoy">
                                <div>{t("pricing.Contact Edusity to")}</div>
                                <div className="btn custom-quote"><a href="#"><span>{t("pricing.Book a Demo")}</span></a></div>
                                <div>{t("pricing.Custom pricing")}</div>
                            </div>
                            <div className="pricing-row">1000 Users</div>
                            <div className="pricing-row">6 GB</div>
                            <div className="pricing-row">120 Mins</div>
                            <div className="pricing-row">30 Days</div>
                            <div className="pricing-row">Unlimited Sessions</div>
                            <div className="pricing-row">TBD</div>
                            <div className="pricing-row">Yes</div>
                            <div className="pricing-row greenBg">30 Days</div>
                            <div className="pricing-row"><i className="checkmark"></i></div>
                            <div className="pricing-row"><i className="checkmark"></i></div>
                            <div className="pricing-row"><i className="checkmark"></i></div>
                            <div className="pricing-row"><i className="checkmark"></i></div>
                            <div className="pricing-row"><i className="checkmark"></i></div>
                            <div className="pricing-row"><i className="checkmark"></i></div>
                            <div className="pricing-row"><i className="checkmark"></i></div>
                            <div className="pricing-row"><i className="checkmark"></i></div>
                            <div className="pricing-row"><i className="checkmark"></i></div>
                            <div className="pricing-row"><i className="checkmark"></i></div>
                            <div className="pricing-row"><i className="checkmark"></i></div>
                            <div className="pricing-row"><i className="checkmark"></i></div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
    );
}

export default PricingPage;
