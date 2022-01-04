import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

function Contact() {

    return (
        <div className="contact">
            <Container className="p-5">
                <Row className="p-5">
                    <Col>
                        <h1 id="creator">Creator</h1>
                        <p id="creator-content">Paragraph about yourself so people can understand you and feel more connected</p>
                    </Col>

                    <Col>
                        <h1 id="contact">Contact</h1>
                        <Form>
                            <FormGroup row>
                                <Label for="name" sm={2}>Name:</Label>
                                <Col sm={{ size: 6 }}>
                                    <Input
                                        type="name"
                                        name="name"
                                        id="name"
                                        placeholder="A name here"
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="email" sm={2}>Email:</Label>
                                <Col sm={{ size: 6 }}>
                                    <Input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Email here"
                                    />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label for="text">
                                    Message:
                                </Label>
                                <Col sm={{ size: 7 }}>
                                    <Input
                                        type="textarea"
                                        name="text"
                                        id="text"
                                        placeholder="Speak to us!"
                                    />
                                </Col>
                            </FormGroup>

                            <FormGroup check row>
                                <Col sm={{ size: 4, offset: 2 }} className="pt-3">
                                    <Button>Submit</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Contact;