import { Container, Row, Col } from 'reactstrap';
// import { PageContent } from './PageContent';

function AboutPage() {

    return (
        <div className="about">
            <Container className="p-5">
                <Row className="p-5">
                    <Col>
                        <h1>About Wurklo</h1>
                        What does Wurklo do?
                        Wurklo focuses on accelerating and improving the service industry by
                        providing wurkers with advanced software in a simple design that will give
                        the average person the power of a large scale business in the palm of
                        their hands. Wurklo strives to provide an equal level of power to people
                        who want to purchase those services, and leverages blockchain power to
                        integrate payments on a global scale.
                        How are we organized? (Maybe just say “We are a humanocracy” idk)
                        We are building our organization as a humanocracy focused on
                        developing human beings to their full potential. We are organized as a
                        decentralized structure of people who contribute by building the best and
                        most adaptive system possible. Working in small teams developers have
                        the authority to make changes without having to wait for approval of
                        leaders. Our leaders are called Aggregators, who are voted into those
                        positions and work with other aggregators to form a sort of adhesive
                        between all the micro teams within the organization. We are an
                        organization of groups making decisions together, and no single
                        person/authority is in charge.
                        Team = The NEx Program, Aggregators, Paid Professionals (At first will be lightly
                        directed by single authority to jump start decentralized structure, but will
                        ultimately be run by small groups of people working together in a larger
                        organization held together by aggregators (team leads and stuff but they answer
                        to the smaller teams and have very little authority)
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutPage;