import React from "react";
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button } from "reactstrap";

function Cards() {
    return (
        <>
            <Container className="p-5">
                <Row>
                    <Col>
                        <Card>
                            {/* <CardImg alt="..." src="" top></CardImg> */}
                            <CardBody>
                                <CardTitle>📱<br />Connect</CardTitle>
                                <CardText>
                                    Connect with trusted neighbors and locals using our safe app.
                                </CardText>
                                <Button>Learn more</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            {/* <CardImg alt="..." src="" top></CardImg> */}
                            <CardBody>
                                <CardTitle>💰<br />Earn</CardTitle>
                                <CardText>
                                    Earn cash for any skill on your own time.
                                </CardText>
                                <Button>Learn more</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            {/* <CardImg alt="..." src="" top></CardImg> */}
                            <CardBody>
                                <CardTitle>🌱<br />Grow</CardTitle>
                                <CardText>
                                    Join our No Experience Neccessary Program (NEx) to learn more valuable skills and work alongside professionals.
                                </CardText>
                                <Button>Learn more</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default Cards;