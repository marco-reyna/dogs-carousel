import { useEffect, useState } from "react";
import Carousel from "./components/Carousel/Carousel";
import { IApiItem, IItemData } from "./types/index";
import { getTemperaments } from "./helpers/setBreedsData";
import { api } from "./helpers/api";
import axios from "axios";
import "./App.css";

function App(): JSX.Element {
  const [breeds, setBreeds] = useState<IItemData[]>([]);
  const fetchBreeds = async () => {
    try {
      const response = await axios.get(api);
      const data: IApiItem[] = response.data;
      const breedsData = getTemperaments(data);
      setBreeds(breedsData);
    } catch (error) {
      return console.log(error);
    }
  };

  useEffect(() => {
    fetchBreeds();
  }, []);

  return (
    <div className="landingPageContainer">
      <div className="left" />
      <div className="right">
        <Carousel items={breeds} />
      </div>
    </div>
  );
}

export default App;
