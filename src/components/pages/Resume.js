import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import "./Resume.css";

function Resume(){
    return(
        
        <Container>
            <Row >
                <Col md={12}>           
                    <embed style={{height:'620px', width:'100%'}}src="https://drive.google.com/uc?export=view&id=11mHp-0DqMisqLSyZOymdbKT6UuTDiL24"></embed>
                </Col>
            </Row>

        </Container>
    )
}

export default Resume;
