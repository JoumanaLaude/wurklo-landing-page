import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

function Contact() {

    return (
        <div className="contact">
            <Container className="p-5">
                <Row className="p-5">
                    <h1 id="contact">Contact Us</h1>
                    <Col xs="4" />
                    <Col>
                        <Form>
                            <FormGroup row>
                                <Label for="name" sm={1}>Name:</Label>
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
                                <Label for="email" sm={1}>Email:</Label>
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
                                    Your message:
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