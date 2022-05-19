import Header from "./Component/Header";
import CityList from "./Component/CityList";
import {useState} from "react";

function App() {
  const [viewCard, setViewCard] = useState(15)


  return (
    <div>
      <Header viewCard={viewCard}/>
      <CityList viewCard={viewCard}/>
    </div>
  );
}

export default App;
