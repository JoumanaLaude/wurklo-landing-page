import { Container, Row, Col } from 'reactstrap';
import desktop from '../images/desktop-preview.jpg';

function About() {

    return (
        <div className="about">
            <Container className="p-5">
                <Row className="p-5">
                    <Col>
                        <h1 id="about">🔨<br /><br />We’re going to put the power of a large scale business in the palm of your hand!</h1>
                    </Col>
                </Row>
                <Row className="p-5">
                    <Col sm="12">
                        <h2 id="app-preview">Preview</h2>
                        <img src={desktop} alt="desktop preview" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;