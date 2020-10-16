import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../Card";
 function Home(){
    return(
        <div>
            <Container>
                <Row>
                    <Col size="md-3">
                    </Col>
                    <Col size="md-6">
                        <Card/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
 }
export default Home;