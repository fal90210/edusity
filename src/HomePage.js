import React from "react";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import "./HomePage.css";

const sections = `arts, automobiles, books, business, fashion, food, health,
home, insider, magazine, movies, national, nyregion, obituaries,
opinion, politics, realestate, science, sports, sundayreview,
technology, theater, tmagazine, travel, upshot, world`
  .replace(/ /g, "")
  .split(",");

function HomePage() {
  const [selectedSection, setSelectedSection] = useState("arts");

  const getArticles = async e => {
    console.log(e);
  };

  return (
    <div className="HomePage">
      <div className="row">
        <div className="col-md-3 d-none d-md-block d-lg-block d-xl-block">
          <ListGroup>
            {sections.map(s => (
              <ListGroup.Item
                key={s}
                className="list-group-item"
                active={s == selectedSection}
              >
                <a className="link" onClick={() => setSelectedSection(s)}>
                  {s}
                </a>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
        <div className="col right">
          <Form className="d-sm-block d-md-none d-lg-none d-xl-none">
            <Form.Group controlId="section">
              <Form.Label>Section</Form.Label>
              <Form.Control as="select" onChange={getArticles}>
                {sections.map(s => (
                  <option key={s}>{s}</option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
