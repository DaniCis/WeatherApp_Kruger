import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';

const WeatherSearchForm = ({onChangeCity}) =>{
    const [city, setCity] = useState('')
    
    const getCity = (e) =>{
        if(e.target.value !== '')//input vacio
            setCity(e.target.value)
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        onChangeCity(city)
        setCity('')
    }

    return(
        <Container>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col className="contenedorSearch" xs={{span:10,offset:1}} md={{ span: 8, offset: 3 }} lg={{span:4, offset:4}}>
                        <Form.Control type='text' onChange={getCity} value={city}/>
                        <Button variant="info" type='submit' onClick={handleSubmit}>Search</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )

}
export default WeatherSearchForm;