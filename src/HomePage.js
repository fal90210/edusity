import React from "react";
import { useState, useEffect } from "react";
//import Form from "react-bootstrap/Form";
//import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import { getArticles } from "./requests";
import { withRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HeroBanner from "./HeroBanner";
import FlowerDiag from "./FlowerDiag";
import GlobalReach from "./GlobalReach";
import FeaturedOn from "./FeaturedOn";

import LearningBeyond from "./LearningBeyond";
import CourseList from "./CourseList";
import TeacherFeature from "./TeacherFeature";
import Footer from "./Footer";
//import "./HomePage.css"; TODO Remove if not needed

const sections = `arts, automobiles, books, business, fashion, food, health,
home, insider, magazine, movies, national, nyregion, obituaries,
opinion, politics, realestate, science, sports, sundayreview,
technology, theater, tmagazine, travel, upshot, world`
        .replace(/ /g, "")
        .split(",");

function HomePage() {
    const [selectedSection, setSelectedSection] = useState("arts");
    const [articles, setArticles] = useState([]);
    const [initialized, setInitialized] = useState(false);
    const { t, i18n } = useTranslation();

    //const load = async section => {
    //    setSelectedSection(section);
    //    const response = await getArticles(section);
    //    setArticles(response.data.results || []);
    //};

    //const loadArticles = async e => {
    //    if (!e || !e.target) {
    //        return;
    //    }
    //    setSelectedSection(e.target.value);
    //    load(e.target.value);
    //};

    //const initializeArticles = () => {
    //    load(selectedSection);
    //    setInitialized(true);
    //};

    //useEffect(() => {
    //    if (!initialized) {
    //        initializeArticles();
    //    }
    //});

    return (
            <main className="HomePage">
                {/*className="col-12"*/}
                <div>
                    <div className="row">
                        {/*
                        <div className="col-md-3 d-none d-md-block d-lg-block d-xl-block">
                            <ListGroup className="sections">
                                {sections.map(s => (
                                        <ListGroup.Item
                                                key={s}
                                                className="list-group-item"
                                                active={s == selectedSection}
                                        >
                                            <a
                                                    className="link"
                                                    onClick={() => {
                      load(s);
                    }}
                                            >
                                                {t(s)}
                                            </a>
                                        </ListGroup.Item>
                                ))}
                            </ListGroup>

                        </div>
                         */}

                        <div className="col right">
                            {/*
                            <Form className="d-sm-block d-md-none d-lg-none d-xl-none">
                                <Form.Group controlId="section">
                                    <Form.Label>{t("Section")}</Form.Label>
                                    <Form.Control
                                            as="select"
                                            onChange={loadArticles}
                                            value={selectedSection}
                                    >
                                        {sections.map(s => (
                                                <option key={s} value={s}>{t(s)}</option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>
                            </Form>

                            <h1>{t(selectedSection)}</h1>
                             */}
                            {articles.map((a, i) => (
                                    <Card key={i}>
                                        <Card.Body>
                                            <Card.Title>{a.title}</Card.Title>
                                            <Card.Img
                                                    variant="top"
                                                    className="image"
                                                    src={
                      Array.isArray(a.multimedia) &&
                      a.multimedia[a.multimedia.length - 1]
                        ? a.multimedia[a.multimedia.length - 1].url
                        : null
                    }
                                            />
                                            <Card.Text>{a.abstract}</Card.Text>
                                            <Button
                                                    variant="primary"
                                                    onClick={() => (window.location.href = a.url)}
                                            >
                                                {t("Go")}
                                            </Button>
                                        </Card.Body>
                                    </Card>
                            ))}

                            {/*
                            <div className="cta-banner">
                                <div className="cta-wrapper">
                                    <h1 className="welcome">{t("welcome")}</h1>
                                    <p className="introduction">{t("introduction")}</p>
                                </div>
                            </div>
                            */}

                            <HeroBanner />
                            <FeaturedOn />
                            <LearningBeyond />

                            {/*<FlowerDiag />*/}

                            <CourseList />
                            <GlobalReach />
                            <TeacherFeature />
                            <Footer />
                        </div>
                    </div>
                </div>
            </main>
    );
}

export default HomePage;
