import React from "react";
//import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./SearchPage.css";

import Footer from "./Footer";

function PricingPage() {
    const { t } = useTranslation();

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
                            <div className="pricing-row header">Lite</div>
                            <div className="pricing-row tallBoy">
                                <span className="pricing-desc">299</span>
                                <div className="per-year">{t("pricing.per year")}</div>
                                <div className="finePrnt">
                                    <span>$16.58 / month</span>
                                    <span>{t("pricing.billed annually")}</span>
                                </div>
                            </div>
                            <div className="pricing-row">
                                <div className="btn purchaseBtn">
                                    <a href="#">{t("pricing.Purchase")}</a>
                                </div>
                            </div>
                            <div className="pricing-row"><span className="highlight">100</span> Max user accounts</div>
                            <div className="pricing-row"><span className="highlight">750MB</span> Max file storage</div>
                            <div className="pricing-row"><span className="highlight">60 Mins</span> Virtual classroom per session</div>
                            <div className="pricing-row"><span className="highlight">3 Days</span> Available session recording</div>
                            <div className="pricing-row"><span className="highlight">4</span> Total virtual sessions per day</div>
                            <div className="pricing-row"><span className="highlight">50 Users</span> Max concurrent video conferencing</div>
                            <div className="pricing-row">
                                <span className="block"><i className="check"></i></span>
                                <span>Upload video course files:</span>
                            </div>
                            <div className="pricing-row greenBg"><span className="highlight">30 Days</span> FREE trial</div>
                            {/*
                            <div className="pricing-row">
                                <span className="block"><i className="checkmark"></i></span>
                                <span>Unlimted courses & activities</span>
                            </div>
                            <div className="pricing-row">
                                <span className="block"><i className="checkmark"></i></span>
                                <span>Web conferencing</span>
                            </div>
                            <div className="pricing-row">
                                <span className="block"><i className="checkmark"></i></span>
                                <span>Webinar recording</span>
                            </div>
                            <div className="pricing-row">
                                <span className="block"><i className="checkmark"></i></span>
                                <span>File sharing</span>
                            </div>
                            <div className="pricing-row">
                                <span className="block"><i className="checkmark"></i></span>
                                <span>Visual scheduling</span>
                            </div>
                            <div className="pricing-row">
                                <span className="block"><i className="checkmark"></i></span>
                                <span>Community forum</span>
                            </div>
                            <div className="pricing-row">
                                <span className="block"><i className="checkmark"></i></span>
                                <span>Reporting</span>
                            </div>
                            <div className="pricing-row">
                                <span className="block"><i className="checkmark"></i></span>
                                <span>Analytics dashboard</span>
                            </div>
                            <div className="pricing-row">
                                <span className="block"><i className="checkmark"></i></span>
                                <span>Concurrent sessions</span>
                            </div>
                            <div className="pricing-row">
                                <span className="block"><i className="checkmark"></i></span>
                                <span>Secure SSL certification</span>
                            </div>
                            <div className="pricing-row">
                                <span className="block"><i className="checkmark"></i></span>
                                <span>Automated backup/restore</span>
                            </div>
                            <div className="pricing-row">
                                <span className="block"><i className="checkmark"></i></span>
                                <span>Customer support</span>
                            </div>
                            */}
                        </div>

                        <div className="pricing-col">
                            <div className="pricing-row header">Advanced<span
                                    className="full-too">{t("pricing.Most Popular")}</span></div>
                            <div className="pricing-row tallBoy">
                                <span className="pricing-desc">499</span>
                                <div className="per-year">{t("pricing.per year")}</div>
                                <div className="finePrnt">
                                    <span>$41.58 / month</span>
                                    <span>{t("pricing.billed annually")}</span>
                                </div>
                            </div>
                            <div className="pricing-row">
                                <div className="btn purchaseBtn">
                                    <a href="#">{t("pricing.Purchase")}</a>
                                </div>
                            </div>
                            <div className="pricing-row"><span className="highlight">250</span> Max user accounts</div>
                            <div className="pricing-row"><span className="highlight">2GB</span> Max file storage</div>
                            <div className="pricing-row"><span className="highlight">90 Mins</span> Virtual classroom per session</div>
                            <div className="pricing-row"><span className="highlight">7 Days</span> Available session recording</div>
                            <div className="pricing-row"><span className="highlight">8</span> Total virtual sessions per day</div>
                            <div className="pricing-row"><span className="highlight">50 Users</span> Max concurrent video conferencing</div>
                            <div className="pricing-row">
                                <span className="block"><i className="checkmark"></i></span>
                                <span>Upload video course files:</span>
                            </div>
                            <div className="pricing-row greenBg"><span className="highlight">30 Days</span> FREE trial</div>
                            {/*
                            <div className="pricing-row">
                                <span className="block"><i className="checkmark"></i></span>
                                <span>Unlimted courses & activities</span>
                            </div>
                            <div className="pricing-row">
                                <span className="block"><i className="checkmark"></i></span>
                                <span>Web conferencing</span>
                            </div>
                            <div className="pricing-row">
                                <span className="block"><i className="checkmark"></i></span>
                                <span>Webinar recording</span>
                            </div>
                            <div className="pricing-row">
                                <span className="block"><i className="checkmark"></i></span>
                                <span>File sharing</span>
                            </div>
                            <div className="pricing-row">
                                <span className="block"><i className="checkmark"></i></span>
                                <span>Visual scheduling</span>
                            </div>
                            <div className="pricing-row">
                                <span className="block"><i className="checkmark"></i></span>
                                <span>Community forum</span>
                            </div>
                            <div className="pricing-row">
                                <span className="block"><i className="checkmark"></i></span>
                                <span>Reporting</span>
                            </div>
                            <div className="pricing-row">
                                <span className="block"><i className="checkmark"></i></span>
                                <span>Analytics dashboard</span>
                            </div>
                            <div className="pricing-row">
                                <span className="block"><i className="checkmark"></i></span>
                                <span>Concurrent sessions</span>
                            </div>
                            <div className="pricing-row">
                                <span className="block"><i className="checkmark"></i></span>
                                <span>Secure SSL certification</span>
                            </div>
                            <div className="pricing-row">
                                <span className="block"><i className="checkmark"></i></span>
                                <span>Automated backup/restore</span>
                            </div>
                            <div className="pricing-row">
                                <span className="block"><i className="checkmark"></i></span>
                                <span>Customer support</span>
                            </div>
                             */}
                        </div>

                        <div className="pricing-col">
                            <div className="pricing-row header">Pro<span
                                    className="full-too next">{t("pricing.Best Value")}</span></div>
                            <div className="pricing-row tallBoy">
                                <span className="pricing-desc">1199</span>
                                <div className="per-year">{t("pricing.per year")}</div>
                                <div className="finePrnt">
                                    <span>$99.91 / month</span>
                                    <span>{t("pricing.billed annually")}</span>
                                </div>
                            </div>
                            <div className="pricing-row">
                                <div className="btn purchaseBtn">
                                    <a href="#">{t("pricing.Purchase")}</a>
                                </div>
                            </div>
                            <div className="pricing-row"><span className="highlight">500</span> Max user accounts</div>
                            <div className="pricing-row"><span className="highlight">3GB</span> Max file storage</div>
                            <div className="pricing-row"><span className="highlight">90 Mins</span> Virtual classroom per session</div>
                            <div className="pricing-row"><span className="highlight">20 Days</span> Available session recording</div>
                            <div className="pricing-row"><span className="highlight">8</span> Total virtual sessions per day</div>
                            <div className="pricing-row"><span className="highlight">100 Users</span> Max concurrent video conferencing</div>
                            <div className="pricing-row">
                                <span className="block"><i className="checkmark"></i></span>
                                <span>Upload video course files:</span>
                            </div>
                            <div className="pricing-row greenBg"><span className="highlight">30 Days</span> FREE trial</div>
                            {/*
                            <div className="pricing-row">
                                <span className="block"><i className="checkmark"></i></span>
                                <span>Unlimted courses & activities</span>
                            </div>
                            <div className="pricing-row">
                                <span className="block"><i className="checkmark"></i></span>
                                <span>Web conferencing</span>
                            </div>
                            <div className="pricing-row">
                                <span className="block"><i className="checkmark"></i></span>
                                <span>Webinar recording</span>
                            </div>
                            <div className="pricing-row">
                                <span className="block"><i className="checkmark"></i></span>
                                <span>File sharing</span>
                            </div>
                            <div className="pricing-row">
                                <span className="block"><i className="checkmark"></i></span>
                                <span>Visual scheduling</span>
                            </div>
                            <div className="pricing-row">
                                <span className="block"><i className="checkmark"></i></span>
                                <span>Community forum</span>
                            </div>
                            <div className="pricing-row">
                                <span className="block"><i className="checkmark"></i></span>
                                <span>Reporting</span>
                            </div>
                            <div className="pricing-row">
                                <span className="block"><i className="checkmark"></i></span>
                                <span>Analytics dashboard</span>
                            </div>
                            <div className="pricing-row">
                                <span className="block"><i className="checkmark"></i></span>
                                <span>Concurrent sessions</span>
                            </div>
                            <div className="pricing-row">
                                <span className="block"><i className="checkmark"></i></span>
                                <span>Secure SSL certification</span>
                            </div>
                            <div className="pricing-row">
                                <span className="block"><i className="checkmark"></i></span>
                                <span>Automated backup/restore</span>
                            </div>
                            <div className="pricing-row">
                                <span className="block"><i className="checkmark"></i></span>
                                <span>Customer support</span>
                            </div>
                             */}
                        </div>

                        <div className="pricing-col">
                            <div className="pricing-row header">Custom Pro</div>
                            <div className="pricing-row tallBoy">
                                <div>{t("pricing.Contact Edusity to")}</div>
                                <div className="btn custom-quote"><a href="#"><span>{t("pricing.Book a Demo")}</span></a></div>
                                <div>{t("pricing.Custom pricing")}</div>
                            </div>
                            <div className="pricing-row">
                                <div className="btn salesBtn">
                                    <a href="#">Contact Sales</a>
                                </div>
                            </div>
                            <div className="pricing-row"><span className="highlight">1000</span> Max user accounts</div>
                            <div className="pricing-row"><span className="highlight">6GB</span> Max file storage</div>
                            <div className="pricing-row"><span className="highlight">120 Mins</span> Virtual classroom per session</div>
                            <div className="pricing-row"><span className="highlight">30 Days</span> Available session recording</div>
                            <div className="pricing-row"><span className="highlight">Unlimited</span> Virtual sessions per day</div>
                            <div className="pricing-row"><span className="highlight">TBD</span>  Max concurrent video conferencing</div>
                            <div className="pricing-row">
                                <span className="block"><i className="checkmark"></i></span>
                                <span>Upload video course files:</span>
                            </div>
                            <div className="pricing-row greenBg"><span className="highlight">30 Days</span> FREE trial</div>
                            {/*
                            <div className="pricing-row">
                                <span className="block"><i className="checkmark"></i></span>
                                <span>Unlimted courses & activities</span>
                            </div>
                            <div className="pricing-row">
                                <span className="block"><i className="checkmark"></i></span>
                                <span>Web conferencing</span>
                            </div>
                            <div className="pricing-row">
                                <span className="block"><i className="checkmark"></i></span>
                                <span>Webinar recording</span>
                            </div>
                            <div className="pricing-row">
                                <span className="block"><i className="checkmark"></i></span>
                                <span>File sharing</span>
                            </div>
                            <div className="pricing-row">
                                <span className="block"><i className="checkmark"></i></span>
                                <span>Visual scheduling</span>
                            </div>
                            <div className="pricing-row">
                                <span className="block"><i className="checkmark"></i></span>
                                <span>Community forum</span>
                            </div>
                            <div className="pricing-row">
                                <span className="block"><i className="checkmark"></i></span>
                                <span>Reporting</span>
                            </div>
                            <div className="pricing-row">
                                <span className="block"><i className="checkmark"></i></span>
                                <span>Analytics dashboard</span>
                            </div>
                            <div className="pricing-row">
                                <span className="block"><i className="checkmark"></i></span>
                                <span>Concurrent sessions</span>
                            </div>
                            <div className="pricing-row">
                                <span className="block"><i className="checkmark"></i></span>
                                <span>Secure SSL certification</span>
                            </div>
                            <div className="pricing-row">
                                <span className="block"><i className="checkmark"></i></span>
                                <span>Automated backup/restore</span>
                            </div>
                            <div className="pricing-row">
                                <span className="block"><i className="checkmark"></i></span>
                                <span>Customer support</span>
                            </div>
                             */}
                        </div>
                    </div>

                    <div className="pricing-points-wrapper">
                        <div className="inner-wrapper">
                            <div className="plus">+</div>
                            <h3>All our plans include the following</h3>

                            <ul className="pricing-list">
                                <li>Unlimted courses & activities</li>
                                <li>Web conferencing</li>
                                <li>Webinar recording</li>
                                <li>File sharing</li>
                                <li>Visual scheduling</li>
                                <li>Community forum</li>
                                <li>Reporting</li>
                                <li>Analytics dashboard</li>
                                <li>Concurrent sessions</li>
                                <li>Secure SSL certification</li>
                                <li>Automated backup &amp; restore</li>
                                <li>Customer support</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
    );
}

export default PricingPage;
