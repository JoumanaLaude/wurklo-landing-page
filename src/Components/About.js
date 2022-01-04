import { Container, Row, Col } from 'reactstrap';
import Cards from './Cards';

function About() {

    return (
        <div className="about">
            <Container className="p-5">
                <Row className="p-5">
                    <Col>
                        <h1 id="about">🔨<br /><br />We’re going to put the power of a large scale business in the palm of your hand!</h1>
                    </Col>
                </Row>
                <Cards />
            </Container>
        </div>
    );
};

export default About;