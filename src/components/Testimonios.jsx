import { Testimonio } from "./Testimonio";
import emmaPhoto from "../images/testimonio-emma.png";
import sarahPhoto from "../images/testimonio-sarah.png";
import shawnPhoto from "../images/testimonio-emma.png";

export const Testimonios = () => {
  return (
    <div className='testimony-container'>
      <Testimonio
      img={emmaPhoto}
      name='Emma in Bruselas'
      charge='Spotify software developer'
      testimony='hello'      
      />
    </div>
  )
}
