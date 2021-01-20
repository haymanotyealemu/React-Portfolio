import React from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import resume from "../../HaymanotWolde.pdf";


function Resume(){
    return(
            <Container>
                <Row >
                    <Col size="md-12">           
                        <embed style={{height:'620px', width:'100%'}}src={resume}></embed>
                    </Col>
                </Row>
        </Container>
    );
}

export default Resume;
