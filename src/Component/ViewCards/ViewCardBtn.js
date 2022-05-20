import './index.scss'

const ViewCardBtn = ({viewCards, setViewCards, value}) => {
  const classActive = viewCards === value ? 'viewCards__btn_active' : ''

  return (
    <div className={`viewCards__btn ${classActive}`} onClick={() => setViewCards(value)}>{value}</div>
  )
}

export default ViewCardBtn
