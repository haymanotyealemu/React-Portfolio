import React from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import "./Home.css";
import { Link } from "react-router-dom";

function Home(){
    return(
      <div className="main-home">
        <Container className="home">
          <Row className="aboutme">
            <Col size="md-3">
            </Col>
            <Col size="md-6" className="text-center">
              <h3 className="text-center">About Me</h3>
              <hr/>
              <img src="https://drive.google.com/uc?export=view&id=1s-RFiotblylLkNjFTaHScHiPw9oHqOdq" alt=""className="card-img-top rounded mx-auto thumbnail  d-block" style={{width:250, height:250}}></img>
              <div className="card-body text-center">
                <h5 className="card-title">Welcome!</h5>
                <p className="card-text">Hi, My name is Haymanot Wolde, I am a Full stack web developer with four plus years of hands-on experience in design and implementing modern web applications. Certified in an intensive training program focused on gaining technical programming skills in HTML5, CSS, JavaScript, jQuery, Bootstrap, Node.js, Web- APIs, MySQL, MongoDB, Express.js, & React and Redux.</p>
                <br/>
                <p className="card-text">
                I have strong analytical, web content management, collaborative, detail-focus and fast learning skills. You can find my contact details here:
                </p>
                <p className="card-text">GitHub:<a href="https://github.com/haymanotyealemu"><i className="fab fa-github fa-2x"></i></a></p>
                <hr/>
                <p className="card-text">LinkedIn:<a href="https://www.linkedin.com/in/haymanot-w-482b021ab/"><i className="fab fa-linkedin fa-2x"></i></a></p>

                <hr/>
                <p className="card-text">Email:<Link to="#">haymanotalemu21@gmail.com</Link></p>
                <hr/>
                <p className="card-text">Phone:<i classname="far fa-phone-square-alt fa-2x"></i>+1 614-962-76-68</p>
              </div>
            </Col>
            <Col size="md-3"></Col>
          </Row>
        </Container>
      </div>
    );
}
export default Home;