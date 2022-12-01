import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/esm/Col";
import WeatherSearchForm from "./WeatherSearchForm";
import WeatherInfo from "./WeatherInfo";
import Loading from "./Loading";
import NoResults from "./NoResults";

const Weather = () => {
    const [weather,setWeather] = useState(null)
    const [error, setError] = useState(false)
    const [city,setCity] = useState('')

    useEffect( () => {
        loadInfo()
    },[])

    useEffect( () => {
        document.title = `Weather | ${weather?.location.name ?? 'App' }`
    },[weather])

    const loadInfo = async (city = 'quito') =>{
        try{
            const response = await fetch(`${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`)
            if(response.ok){
                const responseJSON = await response.json()
                setError(false)
                setTimeout(() => {
                    setWeather(responseJSON);
                }, 1000);
            }else
                setError(true)
            
        }catch(e){
            console.log(e)
        }
    }
    const handleChangeCity = (city) =>{
        setCity(city)
        setWeather(null)
        loadInfo(city)
    }

    return(
       <Container>
            <Row>
                <Col xs={{span:6,offset:3}} md={{span:4,offset:4}} lg={{span:6,offset:5}} xl={{span:4,offset:5}}>
                    <p className="weatherTitle">Weather App</p>
                </Col>
            </Row>
            <Row className="contenedorForm">
                <WeatherSearchForm onChangeCity={handleChangeCity} />
            </Row>
            <Row className="contenedorInfo">
                <Col  xs={{span:10,offset:1}} md={{span:8,offset:2}} lg={{span:8,offset:3}} xl={{span:6,offset:3}}>
                    {!error
                        ? ( weather 
                            ? <WeatherInfo weather={weather}/> 
                            : <Loading />  )
                        : <NoResults city={city} /> 
                    }
                </Col>
            </Row>
       </Container>
    )
}
export default Weather;