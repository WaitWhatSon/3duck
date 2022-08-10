import { Container, Row, Col } from 'react-bootstrap';

function Text()
{
    return(
        <Container>
            <Row>
                <Col>
                    <h3 className="d-flex justify-content-center">🦆</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                </Col>
                <Col>
                    <h3 className="d-flex justify-content-center">🦆</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                </Col>
                <Col>
                    <h3 className="d-flex justify-content-center">🦆</h3>        
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Text;