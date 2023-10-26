import '../css/Testimonios.css'
import { Testimonio } from "./Testimonio";
import emmaPhoto from "../images/testimonio-emma.png";
import sarahPhoto from "../images/testimonio-sarah.png";
import shawnPhoto from "../images/testimonio-shawn.png";

export const Testimonios = () => {
  return (
    <div className='testimonies-container'>
      <Testimonio
      img={emmaPhoto}
      name='Emma Bostian en Suecia'
      charge='Ingeniera de Software en Spotify'
      testimony='"Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."'      
      />
      <Testimonio
      img={sarahPhoto}
      name='Sarah Chima en Nigeria'
      charge='Ingeniera de Software en ChatDesk'
      testimony='"freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble."'      
      />
      <Testimonio
        img={shawnPhoto}
        name='Shawn Wang en Singapur'
        charge='Ingeniero de Software en Amazon'
        testimony='"Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida."'      
      />
    </div>
  )
}
