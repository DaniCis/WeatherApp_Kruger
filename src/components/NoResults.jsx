import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const NoResults = ({city}) =>{
    return(
        <Container className="contenedorNo">
            <Row>
                <Col className="tituloNo">
                    <p>No results found for {city}</p>
                </Col>
            </Row>
            <Row>
                <Col className="imgNo">
                    <img src="https://cdn-icons-png.flaticon.com/512/6134/6134065.png" alt='not-found'/>
                </Col>
            </Row>
        </Container>
    )
}

export default NoResults;