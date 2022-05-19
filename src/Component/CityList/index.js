import db from '../../db';
import CityCard from "../CityCard";
import './index.scss';
import Pagination from "../Pagination";
import {useState} from "react";

const CityList = ({viewCard}) => {
  const [activePage, setActivePage] = useState(9)

  let subarray = [];
  for (let i = 0; i <Math.ceil(db.length/viewCard); i++){
    subarray[i] = db.slice((i*viewCard), (i*viewCard) + viewCard);
  }


  return (
    <div style={{background: '#263859'}}>
      <div className={'container'}>
        <div className={'city-list'}>
          {subarray[activePage].map((el, index) => <CityCard desc={el.weather[0].description} icon={el.weather[0].icon} city={el.name} temp={el.main.temp} />)}
        </div>

       <Pagination numberPage={subarray.length} activePage={activePage} setActivePage={setActivePage}/>
      </div>
    </div>

  )
}

export default CityList
