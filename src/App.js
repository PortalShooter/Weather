import Header from "./Component/Header";
import CityList from "./Component/CityList";
import {useState} from "react";

function App() {
  const [viewCards, setViewCards] = useState(15)

  return (
    <div>
      <Header viewCards={viewCards} setViewCards={setViewCards}/>
      <CityList viewCards={viewCards}/>
    </div>
  );
}

export default App;
