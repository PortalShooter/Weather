import Header from "./Component/Header";
import CityList from "./Component/CityList";
import {useState} from "react";

function App() {
  const [viewCards, setViewCards] = useState(15)
  const [searchValue, setSearchValue] = useState('')
  const [activePage, setActivePage] = useState(1)

  return (
    <>
      <Header
        viewCards={viewCards}
        setViewCards={setViewCards}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <CityList
        viewCards={viewCards}
        searchValue={searchValue}
        activePage={activePage}
        setActivePage={setActivePage}
      />
    </>
  );
}

export default App;
