import {useEffect, useState} from "react";
import './index.scss'
import RegionCheckbox from "./RegionCheckbox";
import {regionsDB} from "../../db";

const Regions = ({setFilterRegion}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [columns, setColumns] = useState([])
  const CheckboxInColumn = 18

  useEffect(() => {
    const arr = []
    for (let i = 0; i < Math.ceil(regionsDB.length/CheckboxInColumn); i++){
      arr[i] = regionsDB.slice((i*CheckboxInColumn), (i*CheckboxInColumn) + CheckboxInColumn);
    }
    setColumns(arr)
  }, []);

  return (
    <div className={'regions'}>
      <button
        onClick={() => setModalVisible(!modalVisible)} className={'regions__btn'}>
        Выбрать регионы
      </button>
        <div className={`regions__modal ${modalVisible ? 'regions__modal_visible' : null}`}>
          {columns.map((el, index) => {
            return <div className="regions__column">
              {columns[index].map((el) => {return <RegionCheckbox setFilterRegion={setFilterRegion} name={el}/>})}
            </div>
          })}

        </div>
    </div>

  )
}

export default Regions
