import './index.scss'
import {MdClose} from 'react-icons/md';
import {useRef} from "react";

const ModalDetail = ({setModalDetail, modalDetail}) => {
  const modalRef = useRef()
  const closeModal = e => {
    if (modalRef.current === e.target) {setModalDetail(false)}
  }

  const {region, name, img, wind, main, clouds} = modalDetail
  const desc = modalDetail.weather[0].description[0].toUpperCase() + modalDetail.weather[0].description.slice(1);

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className={'modal__background'}
    >
      <div className={'modal__wrapper'}>
        <div className="modal__main-info main-info">
          <div className="main-info__img">
            <img src={img} alt="Иконка погоды"/>
          </div>
          <div>
            <div className={'main-info__city'}>{name}</div>
            <div className={'main-info__desc'}>{desc}</div>
            <div className={'main-info__temp'}>{main.temp} ℃</div>
          </div>
        </div>

        <div className="modal__detail-info detail-info">
          <MdClose onClick={() => setModalDetail(false)} className={'modal__close'}/>

          <div className={'detail-info__title'}>Подробности:</div>

          <div className={'detail-info__param'}>
            <div className="detail-info__region">Регион - {region}</div>
            <div className="detail-info__region">Облачность - {clouds.all} %</div>
            <div className="detail-info__humidity">Влажность - {main.humidity} %</div>
            <div className="detail-info__wind">
              <div>Скорость ветра - {wind.speed} m/s</div>
              <div>Порыв ветра - {wind.gust} m/s</div>
              <div>Направление ветра - {wind.deg}°</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalDetail
