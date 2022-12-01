import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/esm/Container';

const Loading = ( ) =>{
    return(
        <Container>
            <Spinner animation="border" role="status" size="lg">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </Container>
    )
}
export default Loading;