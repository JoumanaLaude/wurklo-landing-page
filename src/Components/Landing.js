import { Container, Row, Col, Button } from 'reactstrap';
import '../App.css';
import coin from '../images/wurklo-coin';

function Landing() {

    return (
        <div className="landing">
            <Container className="pt-5 px-5">
                <Row className="pt-5 px-5">
                    <Col md={8}>
                        <h1>Wurklo</h1>
                        <h2>Improving the service industry by providing wurkers with equal power.</h2>
                        <p id="launch">Anticipated Launch:<br />August 2022 - December 2022</p>
                        <Button id="about-button">Read About Us</Button>{' '}
                        <Button id="roadmap-button">View Roadmap</Button>
                    </Col>
                    <Col>
                        <img src={coin} alt="wurklo coin" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Landing;