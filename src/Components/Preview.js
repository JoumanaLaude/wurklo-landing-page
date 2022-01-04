import { Container, Row, Col } from 'reactstrap';
import desktop from '../images/desktop-preview.jpg';

function Preview() {

    return (
        <div className="preview">
            <Container className="p-5">
                <Row className="p-5">
                    <Col>
                        <h1 id="app-preview">Preview</h1>
                        <center><img src={desktop} alt="desktop preview" /></center>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Preview;