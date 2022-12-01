import { useState } from 'react';
import { BsSearch} from "react-icons/bs";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
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
                <Col className="contenedorSearch" xs={{span:10,offset:1}} md={{ span:6, offset: 3 }} lg={{span:6, offset:4}} xl={{span:4, offset:4}}>
                    <Form.Control type='text' onChange={getCity} value={city} placeholder='Search' />
                    <Button variant="info" type='submit' onClick={handleSubmit}> <BsSearch /></Button>
                </Col>
            </Form>
        </Container>
    )
}
export default WeatherSearchForm;