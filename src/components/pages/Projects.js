import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";

function Projects() {
  return (
    <div className="projects-set">
      <Container>
        <Row>
          <Col md={1}> 
          </Col>
          <Col md={10}>
            <Card>
              <Card.Body>
                <Card.Title className="text-center">Projects</Card.Title>
                <hr/>
                <Row>
                  <Col md={4}>
                    <Card>
                        <Card.Text className="text-center">Weather-Dashboard</Card.Text>
                        <Card.Img variant="top" src="https://drive.google.com/uc?export=view&id=1xnljQRjK2jM60dgG2INwlBX5W7z55Uzd" />
                        <Card.Link>
                          <Button href="https://haymanotyealemu.github.io/Weather-Dashboard/" variant="info"> Deployed</Button>{' '}
                          <Button href="https://github.com/haymanotyealemu/Weather-Dashboard.git" variant="info">
                              Git-Repo
                          </Button>
                        </Card.Link>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card>
                        <Card.Text className="text-center">Project One - speech-text</Card.Text>
                        <Card.Img variant="top" src="https://drive.google.com/uc?export=view&id=1W7NWmiMLJP8yOhlwtFBfotZSsa9NVGr5" />
                        <Card.Link>
                          <Button href="https://johannsp.github.io/CWRUBC-Project01/" variant="info"> Deployed</Button>{' '}
                          <Button href="https://github.com/haymanotyealemu/CWRUBC-Project01.git" variant="info">
                              Git-Repo
                          </Button>
                        </Card.Link>
                      </Card>
                  </Col>
                  <Col md={4}>
                    <Card>
                        <Card.Text className="text-center">Project Two - Build & Flex!</Card.Text>
                        <Card.Img variant="top" src="https://drive.google.com/uc?export=view&id=1fTN2U3Ekl9wSudEKUzAFqHVSW3VjnzWk" />
                        <Card.Link>
                          <Button href="https://projecttwo-cwru.herokuapp.com/" variant="info"> Deployed</Button>{' '}
                          <Button href="https://github.com/haymanotyealemu/ProjectTwo.git" variant="info">
                              Git-Repo
                          </Button>
                        </Card.Link>
                      </Card>
                  </Col>
                </Row>
                <Row>
                  <Col md={4}>
                    <Card>
                        <Card.Text className="text-center">Eat Da Burger!</Card.Text>
                        <Card.Img variant="top" src="https://drive.google.com/uc?export=view&id=1Q6xjv8ak_wvkw4yB4PJa8NaMHfXLZEvE" />
                        <Card.Link>
                          <Button href="https://young-retreat-31053.herokuapp.com/" variant="info"> Deployed</Button>{' '}
                          <Button href="https://github.com/haymanotyealemu/Burger.git" variant="info">
                              Git-Repo
                          </Button>
                        </Card.Link>
                      </Card>
                  </Col>
                  <Col md={4}>
                    <Card>
                        <Card.Text className="text-center">Code Quiz</Card.Text>
                        <Card.Img variant="top" src="https://drive.google.com/uc?export=view&id=1fJLCUSHwcMgdO6zN3wjZee34S6POXUQx" />
                        <Card.Link>
                          <Button href="https://github.com/haymanotyealemu/Code-Quiz.git" variant="info"> Deployed</Button>{' '}
                          <Button href="" variant="info">
                              Git-Repo
                          </Button>
                        </Card.Link>
                      </Card>
                  </Col>
                  <Col md={4}>
                    <Card>
                        <Card.Text className="text-center">Work-day-Scheduler</Card.Text>
                        <Card.Img variant="top" src="https://drive.google.com/uc?export=view&id=1fJLCUSHwcMgdO6zN3wjZee34S6POXUQx" />
                        <Card.Link>
                          <Button href="https://haymanotyealemu.github.io/Work-day-Scheduler/" variant="info"> Deployed</Button>{' '}
                          <Button href="https://github.com/haymanotyealemu/Work-day-Scheduler.git" variant="info">
                              Git-Repo
                          </Button>
                        </Card.Link>
                      </Card>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
  
      </Container>
    </div>
  );
}

export default Projects;
