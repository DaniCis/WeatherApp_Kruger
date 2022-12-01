import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import WeatherSearchForm from "./WeatherSearchForm";
import WeatherInfo from "./WeatherInfo";
import Loading from "./Loading";


const Weather = () => {
    const [weather,setWeather] = useState(null)
    //se ejucta solamente al renderizar por primera vez
    useEffect(()=>{
        loadInfo()
    },[])

    //se ejecuta siempre que cambia el valor de "weather"
    useEffect(()=>{
        document.title = `Weather | ${weather?.location.name ?? '' }`
    },[weather])

    const loadInfo = async (city = 'london') =>{
        try{
            const response = await fetch(`${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`)
            const responseJSON = await response.json()
            setTimeout(() => {
                setWeather(responseJSON);
            }, 1000);
        }catch(e){
            console.log(e)
        }
    }

    const handleChangeCity = (city) =>{
        setWeather(null)//mientras se carga no existe nada
        loadInfo(city)
    }

    return(
       <Container>
        <Row>
            <WeatherSearchForm onChangeCity={handleChangeCity} />
            {weather 
                ? <WeatherInfo weather={weather}/>
                : <Loading />
            }
        </Row>
       </Container>
    )
}
export default Weather;