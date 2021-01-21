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
                <p className="card-text">Hi, My name is Haymanot Wolde, I am a full stack web developer certified from Case Western Reserve University Coding Bootcamp Cleveland, Ohio! I have a Bsc in Construction And Technology Management from Addis Ababa University, Ethiopia.</p>
                <br/>
                <p className="card-text">
                I have a hands on skills in JavaScript, Express.js, Node.js, MySQL, MongoDB, React.js, Handlebars, CSS, HTML5, Bootstrap and Bulma Frameworks. You can find my contact details here:
                </p>
                <p className="card-text">GitHub:<Link to="https://github.com/haymanotyealemu"><i className="fab fa-github fa-2x"></i></Link></p>
                <hr/>
                <p className="card-text">LinkedIn:<Link to="https://www.linkedin.com/in/haymanot-wolde-4ab3771a9/"><i className="fab fa-linkedin fa-2x"></i></Link></p>

                <hr/>
                <p className="card-text">Email:<Link to="#">haymanotalemu21@gmail.com</Link></p>
                <hr/>
                <p className="card-text">Phone:<i classname="far fa-phone-square-alt fa-2x"></i>+1 614-926-76-68</p>
              </div>
            </Col>
            <Col size="md-3"></Col>
          </Row>
        </Container>
      </div>
    );
}
export default Home;