import Header from "./Component/Header";
import CityList from "./Component/CityList";
import {useState} from "react";
import ModalDetail from "./Component/ModalDetail";

function App() {
  const [viewCards, setViewCards] = useState(15)
  const [searchValue, setSearchValue] = useState('')
  const [activePage, setActivePage] = useState(1)
  const [modalDetail, setModalDetail] = useState(false)
  const [filterRegion, setFilterRegion] = useState({})

  return (
    <>
      <Header
        viewCards={viewCards}
        setViewCards={setViewCards}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        setFilterRegion={setFilterRegion}
      />
      <CityList
        viewCards={viewCards}
        searchValue={searchValue}
        activePage={activePage}
        setActivePage={setActivePage}
        setModalDetail={setModalDetail}
        filterRegion={filterRegion}
      />
      {modalDetail && <ModalDetail modalDetail={modalDetail} setModalDetail={setModalDetail} />}
    </>
  );
}

export default App;
