import React from "react";
import { Card, Container} from "react-bootstrap";
import "./Home.css";

function Home(){
    return(
      <div>
        <Container className="home">
          <Card className=" mx-auto card p-3 mt-2 mb-5" style={{ width: '30rem'}}>
            <Card.Title className="text-center ">About Me</Card.Title>
            <hr/>
            <Card.Img className="rounded mx-auto thumbnail" style={{width:'20rem' }}variant="top" src="https://drive.google.com/uc?export=view&id=1s-RFiotblylLkNjFTaHScHiPw9oHqOdq" />
            <Card.Body className="text-center">
              <Card.Title className="text-center">Welcome!</Card.Title>
              <Card.Text>
                Hi, My name is Haymanot Wolde, I am a full stack web developer certified from Case Western Reserve University Coding Bootcamp Cleveland, Ohio! I have a Bsc in Construction And Technology Management from Addis Ababa University, Ethiopia.
              </Card.Text>
              <br/>
              <Card.Text>
                I have a hands on skills in JavaScript, Express.js, Node.js, MySQL, MongoDB, CSS, HTML5, Bootstrap and Bulma Frameworks. You can find my contact details here:
              </Card.Text>
              <Card.Text>
                GitHub:<Card.Link href="https://github.com/haymanotyealemu"  target="_blank"><i className="fab fa-github fa-2x"></i></Card.Link>
                <hr/>
              </Card.Text>
              <Card.Text>
                LinkedIn:<Card.Link href="https://www.linkedin.com/in/haymanot-wolde-4ab3771a9/"  target="_blank"><i className="fab fa-linkedin fa-2x"></i></Card.Link>
                <hr/>
              </Card.Text>
              <Card.Text>
                Email:<Card.Link href="#">haymanotalemu21@gmail.com</Card.Link>
                <hr/>
              </Card.Text>
              <Card.Text>
                Phone:+1 614-927-94-99
                <hr/>
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </div>
    )
}
export default Home;