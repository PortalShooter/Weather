import db from '../../db';
import CityCard from "../CityCard";
import './index.scss';
import Pagination from "../Pagination";
import {useEffect, useState} from "react";

const CityList = ({viewCards, searchValue, activePage, setActivePage, setModalDetail, filterRegion}) => {
  const [filterDB, setFilterDB] = useState([])
  const [subArray, setSubArray] = useState([])
  const [currentArr, setCurrentArr] = useState([])

  useEffect(() => {
    if (searchValue || Object.keys(filterRegion).length > 0) {
      const arr = [];
      db.map(el => {
        if (el.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1 && !filterRegion.hasOwnProperty(el.region)) {
          arr.push(el)
        }
      })
      setFilterDB(arr)
    } else setFilterDB(db)
  }, [searchValue, filterRegion])

  useEffect(() => {
    const arr = []
    for (let i = 0; i < Math.ceil(filterDB.length/viewCards); i++){
      arr[i] = filterDB.slice((i*viewCards), (i*viewCards) + viewCards);
    }
    setSubArray(arr)
  }, [filterDB])

  useEffect(() => {
    let arr
    if (subArray.length && activePage <= subArray.length) {
      arr = subArray[activePage - 1].map((el) => <CityCard data={el} desc={el.weather[0].description} icon={el.weather[0].icon} city={el.name} temp={el.main.temp} setModalDetail={setModalDetail} />)
    } if (subArray.length && activePage > subArray.length) setActivePage(subArray.length)

    setCurrentArr(arr)
  }, [subArray, activePage])

  return (
    <div style={{background: '#263859', paddingBottom: '0.5rem', height: '100%'}}>
      <div className={'container'}>
        <div className={'city-list'}>
          {currentArr ? currentArr : <div className={'city-list__error'}>Ничего не найдено</div>}
        </div>

       <Pagination numberPage={subArray.length} activePage={activePage} setActivePage={setActivePage}/>
      </div>
    </div>
  )
}

export default CityList
