import '../css/Testimonio.css';

export const Testimonio = ({img, imgName, name, country, charge, company, testimony}) => {
  return (
    <div className='testimony-container'>
      <img className='testimony-img' src={img} alt={imgName}/>
        <div className='testimony__text-container'>
          <p className='testimony__name'>{name} en <strong className='testimony__country'>{country}</strong></p>
          <p className='testimony__charge'>{charge} en <strong className="testimony__company">{company}</strong></p>
          <p className='testimony__text'>{testimony}</p>
        </div>
    </div>
  )
}
