import React from 'react';
import { translate, useTranslation } from "react-i18next";
// import { withRouter } from "react-router-dom";

import Tabs from "./Tabs";

import cookingImg from './cooking.jpg';
import aiImg from './aiImg.jpg';
import pythonImg from './pythonImg.jpg';
import travelImg from './travelImg.jpg';
import langImg from './langImg.jpg';

import artImg from './artImg.jpg';

const { t } = useTranslation();

function CourseList() {
    const { t } = useTranslation();

    return (
            <section className="CourseList">

                <div className="inner-wrapper">

                    <div className="header-wrapper">

                        <h5>
                            <span>{t("tabs.Learn a new skill today")}</span>
                            <span><a href="/register">{t("Signup")}</a></span>
                            <span>{t("tabs.for LIVE online courses")}</span>
                        </h5>

                        <p>NEW and LIVE course video and training materials offered everyday in multiple languages to
                            choose from</p>
                    </div>

                    <div id="tabs">
                        <Tabs>
                            <div label="All">
                                <div className="course-tile">
                                    <div className="image-wrapper">
                                        <img alt="testing" src={aiImg}/>
                                    </div>

                                    <div className="content-wrapper">
                                        <div className="category">Technology</div>
                                        <div className="tile-header">Artificial Intelligence - How it changed our day to
                                            day life and what is the future
                                        </div>

                                        <div className="author">Daniela Ericsson-Sanchez</div>

                                        <div className="rating">
                                            <div className="star-rating">
                                                <span className="full-star"></span>
                                                <span className="full-star"></span>
                                                <span className="full-star"></span>
                                                <span className="full-star"></span>
                                                <span className="full-star"></span>
                                            </div>

                                            <div className="contributors">(15)</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="course-tile">
                                    <div className="image-wrapper">
                                        <img alt="testing" src={cookingImg}/>
                                    </div>

                                    <div className="content-wrapper">
                                        <div className="category">Cooking</div>
                                        <div className="tile-header">The perfect pizza dough, perfecting the the craft
                                            of making a delicious pizza!
                                        </div>

                                        <div className="author">Estavio Novask</div>

                                        <div className="rating">
                                            <div className="star-rating">
                                                <span className="full-star"></span>
                                                <span className="full-star"></span>
                                                <span className="full-star"></span>
                                                <span className="full-star"></span>
                                                <span className="half-star"></span>
                                            </div>

                                            <div className="contributors">(546)</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="course-tile">
                                    <div className="image-wrapper">
                                        <img alt="testing" src={pythonImg}/>
                                    </div>

                                    <div className="content-wrapper">
                                        <div className="category">Web Development</div>
                                        <div className="tile-header">Python programming for beginers</div>

                                        <div className="author">Peter Wortmierz</div>

                                        <div className="rating">
                                            <div className="star-rating">
                                                <span className="full-star"></span>
                                                <span className="full-star"></span>
                                                <span className="full-star"></span>
                                                <span className="full-star"></span>
                                                <span className="full-star"></span>
                                            </div>

                                            <div className="contributors">(236)</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="course-tile">
                                    <div className="image-wrapper">
                                        <img alt="testing" src={artImg}/>
                                    </div>

                                    <div className="content-wrapper">
                                        <div className="category">Painting</div>
                                        <div className="tile-header">The art of painting 3 classes to make you an
                                            artiste
                                        </div>

                                        <div className="author">Rosario Gomez</div>

                                        <div className="rating">
                                            <div className="star-rating">
                                                <span className="full-star"></span>
                                                <span className="full-star"></span>
                                                <span className="full-star"></span>
                                                <span className="half-star"></span>
                                                <span className="star"></span>
                                            </div>

                                            <div className="contributors">(1546)</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="course-tile">
                                    <div className="image-wrapper">
                                        <img alt="testing" src={travelImg}/>
                                    </div>

                                    <div className="content-wrapper">
                                        <div className="category">Travel</div>
                                        <div className="tile-header">Travels and Experiences in Mexico</div>

                                        <div className="author">Ernesto Diaz</div>

                                        <div className="rating">
                                            <div className="star-rating">
                                                <span className="full-star"></span>
                                                <span className="full-star"></span>
                                                <span className="full-star"></span>
                                                <span className="full-star"></span>
                                                <span className="full-star"></span>
                                            </div>

                                            <div className="contributors">(46)</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="course-tile">
                                    <div className="image-wrapper">
                                        <img alt="testing" src={langImg}/>
                                    </div>

                                    <div className="content-wrapper">
                                        <div className="category">Languages</div>
                                        <div className="tile-header">90日で流暢な日本語の初心者ガイド</div>

                                        <div className="author">Nakamuri Fujimoto</div>

                                        <div className="rating">
                                            <div className="star-rating">
                                                <span className="full-star"></span>
                                                <span className="full-star"></span>
                                                <span className="full-star"></span>
                                                <span className="full-star"></span>
                                                <span className="half-star"></span>
                                            </div>

                                            <div className="contributors">(22)</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div label="React JS">
                                <div className="course-tile-alt">
                                    <div className="image-wrapper">
                                        <div className="category">Languages</div>
                                        <img alt="testing" src={langImg}/>
                                    </div>

                                    <div className="content-wrapper">
                                        <div className="tile-header">90日で流暢な日本語の初心者ガイド</div>

                                        <div className="author">
                                            <div className="auth-title">Author</div>
                                            <div className="auth-name">Nakamuri Fujimoto</div>
                                        </div>

                                        <div className="rating">
                                            <div className="star-rating">
                                                <span className="full-star"></span>
                                                <span className="full-star"></span>
                                                <span className="full-star"></span>
                                                <span className="full-star"></span>
                                                <span className="half-star"></span>
                                            </div>

                                            <div className="contributors">(22)</div>
                                        </div>

                                        <div className="price-wrapper">
                                            <div>
                                                <span>usd</span>
                                                <span>49</span>
                                            </div>
                                            <div className="btn buy">
                                                <a href="#">Purchase</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="course-tile-alt">
                                    <div className="image-wrapper">
                                        <div className="category">Web Development</div>
                                        <img alt="testing" src={pythonImg}/>
                                    </div>

                                    <div className="content-wrapper">
                                        <div className="tile-header">Python programming for beginers</div>

                                        <div className="author">
                                            <div className="auth-title">Author</div>
                                            <div className="auth-name">Peter Wortmierz</div>
                                        </div>

                                        <div className="rating">
                                            <div className="star-rating">
                                                <span className="full-star"></span>
                                                <span className="full-star"></span>
                                                <span className="full-star"></span>
                                                <span className="full-star"></span>
                                                <span className="full-star"></span>
                                            </div>

                                            <div className="contributors">(236)</div>
                                        </div>

                                        <div className="price-wrapper">
                                            <div>
                                                <span>usd</span>
                                                <span>49</span>
                                            </div>
                                            <div className="btn buy">
                                                <a href="#">Purchase</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="course-tile-alt">
                                    <div className="image-wrapper">
                                        <div className="category">Technology</div>
                                        <img alt="testing" src={aiImg}/>
                                    </div>

                                    <div className="content-wrapper">
                                        <div className="tile-header">Artificial Intelligence - How it changed our day to
                                            day life and what is the future
                                        </div>

                                        <div className="author">
                                            <div className="auth-title">Author</div>
                                            <div className="auth-name">Daniela Ericsson-Sanchez</div>
                                        </div>

                                        <div className="rating">
                                            <div className="star-rating">
                                                <span className="full-star"></span>
                                                <span className="full-star"></span>
                                                <span className="full-star"></span>
                                                <span className="full-star"></span>
                                                <span className="full-star"></span>
                                            </div>

                                            <div className="contributors">(15)</div>
                                        </div>

                                        <div className="price-wrapper">
                                            <div>
                                                <span>usd</span>
                                                <span>49</span>
                                            </div>
                                            <div className="btn buy">
                                                <a href="#">Purchase</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="course-tile-alt">
                                    <div className="image-wrapper">
                                        <div className="category">Cooking</div>
                                        <img alt="testing" src={cookingImg}/>
                                    </div>

                                    <div className="content-wrapper">
                                        <div className="tile-header">The perfect pizza dough, perfecting the the craft
                                            of making a delicious pizza!
                                        </div>

                                        <div className="author">
                                            <div className="auth-title">Author</div>
                                            <div className="auth-name">Estavio Novask</div>
                                        </div>

                                        <div className="rating">
                                            <div className="star-rating">
                                                <span className="full-star"></span>
                                                <span className="full-star"></span>
                                                <span className="full-star"></span>
                                                <span className="full-star"></span>
                                                <span className="half-star"></span>
                                            </div>

                                            <div className="contributors">(546)</div>
                                        </div>

                                        <div className="price-wrapper">
                                            <div>
                                                <span>usd</span>
                                                <span>49</span>
                                            </div>
                                            <div className="btn buy">
                                                <a href="#">Purchase</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="course-tile-alt">
                                    <div className="image-wrapper">
                                        <div className="category">Painting</div>
                                        <img alt="testing" src={artImg}/>
                                    </div>

                                    <div className="content-wrapper">
                                        <div className="tile-header">The art of painting 3 classes to make you an
                                            artiste
                                        </div>

                                        <div className="author">
                                            <div className="auth-title">Author</div>
                                            <div className="auth-name">Rosario Gomez</div>
                                        </div>

                                        <div className="rating">
                                            <div className="star-rating">
                                                <span className="full-star"></span>
                                                <span className="full-star"></span>
                                                <span className="full-star"></span>
                                                <span className="half-star"></span>
                                                <span className="star"></span>
                                            </div>

                                            <div className="contributors">(1546)</div>
                                        </div>

                                        <div className="price-wrapper">
                                            <div>
                                                <span>usd</span>
                                                <span>49</span>
                                            </div>
                                            <div className="btn buy">
                                                <a href="#">Purchase</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="course-tile-alt">
                                    <div className="image-wrapper">
                                        <div className="category">Travel</div>
                                        <img alt="testing" src={travelImg}/>
                                    </div>

                                    <div className="content-wrapper">
                                        <div className="tile-header">Travels and Experiences in Mexico</div>

                                        <div className="author">
                                            <div className="auth-title">Author</div>
                                            <div className="auth-name">Ernesto Diaz</div>
                                        </div>

                                        <div className="rating">
                                            <div className="star-rating">
                                                <span className="full-star"></span>
                                                <span className="full-star"></span>
                                                <span className="full-star"></span>
                                                <span className="full-star"></span>
                                                <span className="full-star"></span>
                                            </div>

                                            <div className="contributors">(46)</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div label="Javascript">
                                Javascript Stuff
                            </div>
                            <div label="Wordpress">
                                Wordpress Stuff
                            </div>

                            <div label="Artificial Intelligence">
                                Artificial Intelligence stuff
                            </div>
                            <div label="Laravel">
                                Laravel stuff
                            </div>
                            <div label="Web Development">
                                Web Development stuff
                            </div>
                        </Tabs>
                    </div>

                </div>
            </section>
    );
}

// extended main view with translate hoc
//export default translate("translations")(HeroBanner);
export default CourseList;
