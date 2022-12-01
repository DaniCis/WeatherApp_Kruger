/**
 * location.name
 * location.country
 * current condition.text
 * current temp_c
 */
const WeatherInfo = ({weather}) => {
    return(
        <>
        <div>
            <img src={`http:${weather?.current.condition.icon}`}
                width='80'
                alt={weather?.current.condition.text}
            />
        </div>
        <div>
            <iframe src={`https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d127673.56652452116!2d${weather?.location.lon}!3d${weather?.location.lat}627!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sec!4v1669848730857!5m2!1ses!2sec`} width="400" height="300" style={{border:0}} allowfullscreen="" loading="lazy" title="map">
            </iframe>
        </div>
        </>
    )
}
export default WeatherInfo;