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
                                <CardTitle>Connect</CardTitle>
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
                                <CardTitle>Earn</CardTitle>
                                <CardText>
                                    Earn cash for any skill.
                                </CardText>
                                <Button>Learn more</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            {/* <CardImg alt="..." src="" top></CardImg> */}
                            <CardBody>
                                <CardTitle>Grow</CardTitle>
                                <CardText>
                                    Join our No Experience Neccessary Program (NEx) to learn more valuable skills.
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