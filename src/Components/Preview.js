import { Container, Row, Col } from 'reactstrap';
import mobile from '../images/mobile-preview.png';

function Preview() {

    return (
        <div className="preview" id="preview-bg">
            <Container className="p-5">
                <Row className="p-5">
                    <Col sm={8} className="pt-5">
                        <h1 id="app-preview">Wurklo App</h1>
                        <p id="app-content">Wurklo focuses on accelerating and improving the service industry by
                            providing wurkers with advanced software in a simple design that will give
                            the average person the power of a large scale business in the palm of
                            their hands. Wurklo strives to provide an equal level of power to people
                            who want to purchase those services, and leverages blockchain power to
                            integrate payments on a global scale.
                        </p>
                    </Col>
                    <Col>
                        <center><img src={mobile} alt="desktop preview" id="mobile" /></center>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Preview;