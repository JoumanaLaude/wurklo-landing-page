import { Container, Row, Col } from 'reactstrap';
import '../styles/landing.css';
import coin from '../images/wurklo-coin';

function Landing() {

    return (
        <div class="area">
            <Container class="context">
                <Row>
                    <Col md="auto">
                        <img src={coin} alt="wurklo coin" class="coin" />
                        <h1>WURKLO</h1>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Landing;