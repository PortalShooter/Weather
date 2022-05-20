import './index.scss'
import ViewCardBtn from "../ViewCards/ViewCardBtn";

const Header = ({viewCards, setViewCards}) => {

  return (
    <div className={'header__wrapper'}>
      <div className={'container header__body'}>

        <div className={'header-search'}>
          <input className={'header-search__input'} placeholder={'Поиск по годорам'}/>
        </div>

        <div className={'filter'}>
          фильтр
        </div>

        <div className="header__viewCards viewCards">
          Города на странице:
          <div className={'viewCards__btns'}>
            <ViewCardBtn viewCards={viewCards} setViewCards={setViewCards} value={15} />
            <ViewCardBtn viewCards={viewCards} setViewCards={setViewCards} value={30} />
            <ViewCardBtn viewCards={viewCards} setViewCards={setViewCards} value={45} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header;
