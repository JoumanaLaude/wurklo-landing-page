import { Container, Row, Col, Button } from 'reactstrap';
import '../App.css';
import '../styles/background.css';
import coin from '../images/wurklo-coin';

function Landing() {

    return (
        <>
            <div className="area">
                <div className="center">
                    <Container>
                        <Row>
                            <Col>
                                <img src={coin} alt="wurklo coin" className="coin" />
                                <h1>WURKLO</h1>
                                <h2>Improving the service industry by providing wurkers with equal power.</h2>
                                <p>Anticipated Launch:<br />August 2022 - December 2022</p>
                                <p><Button id="roadmap-button">Roadmap</Button></p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
};

export default Landing;