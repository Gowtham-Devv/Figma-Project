import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Aboutus.css";
import { image } from "../../images";

function Aboutus() {
  return (
    <Container className="aboutus">
      <Row>
        <Col xl={6} md={8}>
          <img src={image} alt="" className="mainimg" />
        </Col>

        <Col xl={6} md={4}>
          <div className="section2">
            <button className="cs">About Us</button>
          <h1 className="texts ">
            Lorem ipshm is <br /> a simple dummy text
          </h1>

          <p className="poppinss-bold mt-2 Lorem">
            Lorem Ipsum has been the industry's standard dummy <br />
            text ever since the 1500s
          </p>

          <p className="fonts lines">
          <i class="fa-solid fa-circle-check colors"></i>   software like Aldus
            PageMaker <br />
            <i class="fa-solid fa-circle-check colors"></i>  using Lorem Ipsum is that
            it has a but also the leap <br />
            <i class="fa-solid fa-circle-check color"></i>   type and scrambled it to
            make <br />
          </p>

          <div className="">
            <button className="btns">About Us</button>
          </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Aboutus;
