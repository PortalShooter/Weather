import '../../global.scss'
import './index.scss'

const Header = ({viewCard}) => {

  return (
    <div className={'header__wrapper'}>
      <div className={'container flex'}>

        <div className={'header-search'}>
          <input className={'header-search__input'} placeholder={'Поиск по годорам'}/>
        </div>

        <div className={'filter'}>
          фильтр
        </div>

        <div className="viewCard">
          {viewCard}
        </div>
      </div>
    </div>
  )
}
export default Header;
