import './index.scss'

const CityCard = (props) => {
  let imgName = () => {
    const {icon} = props
    if(icon === '10d' || icon === '10n') return  require("./assets/partly-cloudy-rain.png")
    else if(icon === '01d' || icon === '01n') return  require("./assets/summer.png")
    else if(icon === '04d' || icon === '04n') return  require("./assets/cloud-lighting--v2.png")
    else if(icon === '03d' || icon === '02d' || icon === '03n') return  require("./assets/partly-cloudy-day--v2.png")
    else if(icon === '09d') return  require("./assets/rain.png")
    else if(icon === '13n') return  require("./assets/winter.png")
  }
  const desc = props.desc[0].toUpperCase() + props.desc.slice(1);

  return (
    <div className={'card__wrapper'}>
      <div className={'card__icon'}>
        <img src={imgName()} alt="Иконка погоды"/>
      </div>

      <div className={'card__desc'}>{desc}</div>

      <div className={'card__header'}>
        <div className={'card__city'}>{props.city}</div>
        <div className={'card__temp'}>{props.temp}°C</div>
      </div>
    </div>
  )
}

export default CityCard;
