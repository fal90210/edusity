import React, { Component } from 'react';
import { translate, useTranslation } from "react-i18next";
// import { withRouter } from "react-router-dom";
//import ChangeLanguage from "./ChangeLanguage";
//import Header from "./Header";

const { t } = useTranslation();

function HeroBanner() {
    const { t } = useTranslation();
    //const [articles, setArticles] = useState([]);
    //const [count, setCount] = useState(0);

    return (
            <section className="heroBanner">
                <div className="text-wrap">
                    <div className="animate-from-bottom">
                    <h1 className="welcome" dangerouslySetInnerHTML={{ __html: t('welcome') }}></h1>
                    {/*<div dangerouslySetInnerHTML={{ __html: t('welcome') }}></div>*/}
                    <p className="introduction">{t("introduction")}</p>

                    <div className="box-wrapper">
                        <form id="contact-form" method="POST"> {/*onSubmit={this.handleSubmit.bind(this)}*/}
                            <div className="form-group">
                                <div className="input-wrapper">
                                    {/*<label for="search">Search</label>*/}
                                    <input type="text" placeholder={t("Hello")} className="form-control" aria-label="Search" /> {/*value={this.state.name} onChange={this.onNameChange.bind(this)}*/}

                                    <div className="button-wrapper">
                                        <button type="submit" className="btn btn-submit">
                                            Submit
                                            <i className="icon search"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    </div>
                    
                </div>

                <div className="right-banner"></div>

            </section>
    );
}

// extended main view with translate hoc
//export default translate("translations")(HeroBanner);
export default HeroBanner;
