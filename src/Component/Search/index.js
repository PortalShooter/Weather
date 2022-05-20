import './index.scss'

const Search = ({searchValue, setSearchValue}) => {

  return (
    <div className={'search'}>
      <input className={'search__input'} onChange={(e) => {setSearchValue(e.target.value)}} value={searchValue} placeholder={'Поиск по годорам'}/>
    </div>
  )
}

export default Search
