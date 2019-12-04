import React from 'react';
import { Col, Row } from 'react-flexbox-grid';
import './styles.scss';

const Showcase = () => (
  <section className="showcase">
    <div className="showcase container">
      <Row className="row" center="xs" middle="xs">
        <Col xs={10} sm={10} md={10} lg={7} className="showcaseContent">
          <h1>
            Welcome to <span className="primaryText">Spoonacular</span>
          </h1>
          <p>Food recipes guide</p>
        </Col>
      </Row>
    </div>
  </section>
);

export default Showcase;
