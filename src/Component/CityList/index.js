import db from '../../db';
import CityCard from "../CityCard";
import './index.scss';
import Pagination from "../Pagination";
import {useState} from "react";

const CityList = ({viewCards}) => {
  const [activePage, setActivePage] = useState(1)

  let subarray = [];
  for (let i = 0; i < Math.ceil(db.length/viewCards); i++){
    subarray[i] = db.slice((i*viewCards), (i*viewCards) + viewCards);
  }

  return (
    <div style={{background: '#263859', paddingBottom: '0.5rem'}}>
      <div className={'container'}>
        <div className={'city-list'}>
          {subarray[activePage - 1].map((el, index) => <CityCard desc={el.weather[0].description} icon={el.weather[0].icon} city={el.name} temp={el.main.temp} />)}
        </div>

       <Pagination numberPage={subarray.length} activePage={activePage} setActivePage={setActivePage}/>

      </div>
    </div>

  )
}

export default CityList
