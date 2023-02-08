import React, { Component } from 'react';
import Display from './Display';
import { Container, Row, Col } from 'react-bootstrap';
import g from '../p.png';

class Home extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#F5F5F5", padding: "20px" }}>
        <Container>
          <Row>
            <Col xs={12}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ width: "60%", marginRight: "40px" }}>
                  <img
                    src={g}
                    alt="Health Assistant"
                    style={{
                      width: "100%",
                      borderRadius: "10px",
                      boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"
                    }}
                  />
                </div>
                <div style={{ width: "40%" }}>
                  <h1 style={{ fontSize: "36px" }}>Artificial Intelligence</h1>
                </div>
              </div>
            </Col>
          </Row>
          <br />
          <br />
          <p style={{ fontSize: "18px" }}>save your time and pay me</p>
          <br />
          <br />
          <Row>
            <Col>
              <Display
                header="Symptoms Explanation"
                title="Generate a sufficient explanation"
                text="get to understand better your disease "
                theLink="/about"
              />
            </Col>

            <Col>
              <Display
                header="Generate an Image"
                title="Type any description "
                text="get beautiful designs using your imagination"
                theLink="/contact"
              />
            </Col>

            <Col>
              <Display
                header="Disease Description "
                title="Search any disease"
                text="get to know the history of any disease"
                theLink="/error"
              />
            </Col>

            <Col>
              <Display
                header="Drug Description "
                title="Search any drug"
                text="get to know the benefits of a specific drug"
                theLink="/drug"
              />
            </Col>
          </Row>
        </Container>
      </div>
      );
    }
    }
    export default Home;
