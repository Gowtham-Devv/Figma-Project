import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../Home/Content1.css"
;

function Content1() {
  return (
      <div  className="contain">
         <Container >
      <Row >
        <Col>  <h1 className="text-center poppins-bold bgr"> Future <span className="fst-italic">Technology </span> <br />  <span>Company</span></h1></Col>
        <div>
    </div>
      </Row>
      <Row>
        <Col> <p  className="text-center poppinss-bold mt-2 ">
        {" "}
        Softech provides all customer management service within one software.<br />
        Our landing works on all devices.{" "}
      </p>
     </Col>
       
      </Row>
      <Row>
      <Col>
      <div  className="d-flex justify-content-center">    <button  className="btns">Contact Us</button>  </div>
  
      </Col>
      </Row>
    </Container>
    
    </div>
    
     
   
  );
}

export default Content1;
