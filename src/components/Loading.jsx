import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/esm/Container';

const Loading = () =>{
    return(
        <Container className='contenedorCarga'>
            <Spinner animation="border" variant="light" role="status" size="lg">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </Container>
    )
}
export default Loading;