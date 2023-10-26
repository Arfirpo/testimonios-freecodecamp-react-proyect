import '../css/Testimonios.css'
import { Testimonio } from "./Testimonio";
import emmaPhoto from "../images/testimonio-emma.png";
import sarahPhoto from "../images/testimonio-sarah.png";
import shawnPhoto from "../images/testimonio-shawn.png";
import testimonios from '../json/testimonios.json';

export const Testimonios = () => {
  return (
    <div className='testimonies-container'>
      <Testimonio
        img={shawnPhoto}
        imgName={testimonios.imgNames}
        name={testimonios.names[0]}
        country={testimonios.countries[0]}
        charge={testimonios.charges[0]}
        company={testimonios.companies[0]}
        testimony={testimonios.testimonies[0]}      
      />
      <Testimonio
      img={sarahPhoto}
      imgName={testimonios.imgNames[1]}
      name={testimonios.names[1]}
      country={testimonios.countries[1]}
      charge={testimonios.charges[1]}
      company={testimonios.companies[1]}
      testimony= {testimonios.testimonies[1]}    
      />
      <Testimonio
      img={emmaPhoto}
      imgName={testimonios.imgNames[2]}
      name={testimonios.names[2]}
      country={testimonios.countries[2]}
      charge={testimonios.charges[1]}
      company={testimonios.companies[2]}
      testimony={testimonios.testimonies[2]}    
      />
    </div>
  )
}
