import './index.scss'
import ViewCardBtn from "../ViewCards/ViewCardBtn";
import Search from "../Search";
import Regions from "../Regions";

const Header = ({viewCards, setViewCards, searchValue, setSearchValue, setFilterRegion}) => {

  return (
    <div className={'header__wrapper'}>
      <div className={'container header__body'}>

        <Search searchValue={searchValue} setSearchValue={setSearchValue} />

        <Regions setFilterRegion={setFilterRegion} />

        <div className="header__viewCards viewCards">
          Городов на странице:
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
