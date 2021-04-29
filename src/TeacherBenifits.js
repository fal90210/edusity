import React from "react";
//import React, { Component } from 'react';
import { translate, useTranslation } from "react-i18next";

const { t } = useTranslation();

function TeacherBenifits() {
    const { t } = useTranslation();
    //const [articles, setArticles] = useState([]);
    //const [count, setCount] = useState(0);

    return (
            <section className="teacherBenefits">
                {/*<p className="center">{t("Enterprise Intro")}</p>*/}

                <div className="inner-wrapper">

                    <div className="teacher-title animate-from-bottom">
                        {/*<h2>{t("Take your passion")}</h2>*/}
                        <h2>{t("Instructor Benefits")}</h2>
                    </div>

                    <div className="tiles-wrapper">
                        <div className="tile-col">
                            <div className="col-icon-holder"></div>
                            <div className="col-title">Earn $$$</div>
                            <div className="col-desc">
                                Edusity allows you to have total control over the content you upload, the price for your course, and data. Receive your payment monthly based on the number of students enrolled in each course.
                            </div>
                        </div>

                        <div className="tile-col">
                            <div className="col-icon-holder"></div>
                            <div className="col-title">Curated Content</div>
                            <div className="col-desc">
                                Select a course topic of your choice. Create your course plan, modules, and content. Upload course content to your account and hit publish.
                            </div>
                        </div>

                        <div className="tile-col">
                            <div className="col-icon-holder"></div>
                            <div className="col-title">Interactive Whiteboard</div>
                            <div className="col-desc">
                                Share presentations, allow students to download course materials, and work simultaneously with students on issues or documents on the whiteboard.
                            </div>
                        </div>

                        <div className="tile-col">
                            <div className="col-icon-holder"></div>
                            <div className="col-title">Flex Marketing</div>
                            <div className="col-desc">
                                Create and Market the courses you want to teach, in the language of your choice and with the materials you create for your online classroom.
                            </div>
                        </div>

                        <div className="tile-col">
                            <div className="col-icon-holder"></div>
                            <div className="col-title">Multilingual Courses</div>
                            <div className="col-desc">
                                Create courses in more than just 1 language - more languages are being added every week. We support an extensive list of languages for your online classes.
                            </div>
                        </div>

                        <div className="tile-col">
                            <div className="col-icon-holder"></div>
                            <div className="col-title">Be the Change</div>
                            <div className="col-desc">
                                Our community of expert Instructors continues to grow everyday. With courses in all subject fields, you can be the newest expert by sharing courses in your field of expertise and be the change you want to be.
                            </div>
                        </div>

                        <div className="tile-col">
                            <div className="col-icon-holder"></div>
                            <div className="col-title">Course Builder<span class="new">New</span></div>
                            <div className="col-desc">
                                Create and Market the courses you want to teach, in the language of your choice and with the materials you create for your online classroom.
                            </div>
                        </div>

                        <div className="tile-col">
                            <div className="col-icon-holder"></div>
                            <div className="col-title">Downloadable Content</div>
                            <div className="col-desc">
                                Create courses in more than just 1 language - more languages are being added every week. We support an extensive list of languages for your online classes.
                            </div>
                        </div>

                        <div className="tile-col">
                            <div className="col-icon-holder"></div>
                            <div className="col-title">Online Reports</div>
                            <div className="col-desc">
                                Our community of expert Instructors continues to grow everyday. With courses in all subject fields, you can be the newest expert by sharing courses in your field of expertise and be the change you want to be.
                            </div>
                        </div>
                    </div>

                </div>
            </section>
    );
}

// extended main view with translate hoc
//export default translate("translations")(HeroBanner);
export default TeacherBenifits;
