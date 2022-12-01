import {useState} from 'react';
import {BsClock} from "react-icons/bs";
import {BsThermometerHalf} from "react-icons/bs"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
 
const WeatherInfo = ({weather}) => {
    const [degrees,setDegrees] = useState(true)
    const date = weather?.location.localtime
    const time = date.split(' ')
    
    return(
        <Container className='contenedorCard'>
            <Row>
                <Col>
                    <Container>
                        <Row>
                            <Col className='tituloCiudad'>
                                <h4>{weather?.location.name}</h4>
                                <p>{weather?.location.country}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={{span:6,offset:1}} sm={{span:5,offset:1}} md={{span:5,offset:2}} lg={{span:4,offset:3}}>
                                <p className='tituloClima'>{weather?.current.condition.text}</p>
                                {degrees 
                                    ? ( 
                                        <>
                                            <h1><BsThermometerHalf fill='red' /> {weather?.current.temp_c}°C</h1>
                                            <Form.Switch onChange={() => setDegrees(!degrees)} label="Change to °F" />
                                        </>
                                    ) : (
                                        <>
                                            <h1><BsThermometerHalf fill='orange' /> {weather?.current.temp_f}°F</h1>
                                            <Form.Switch onChange={() => setDegrees(!degrees)} label="Change to °C" />
                                        </>
                                    )
                                }
                            </Col>
                            <Col xs={4} sm={{span:4,offset:1}} md={{span:4,offset:0}}>
                                <h5><BsClock fill='blue'/> <span>{time[1]}</span></h5>
                                <div className={`contenedorIcon ${weather?.current.is_day === 0 ? 'isNight' : 'isDay'}`}>
                                    <img  
                                        src={`http:${weather?.current.condition.icon}`} 
                                        alt={weather?.current.condition.text}
                                        width='100'/>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
            <Row>
                <Col className='contenedorMapa'>
                    <iframe src={`https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d127673.56652452116!2d${weather?.location.lon}!3d${weather?.location.lat}627!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sec!4v1669848730857!5m2!1ses!2sec`} 
                        width="350" 
                        height="250"
                        loading="lazy" 
                        title="map">
                    </iframe>
                </Col>
            </Row>
        </Container>
    )
}
export default WeatherInfo;