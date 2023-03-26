import { IApiItem, IItemData } from "../types/index";
import rottweilerImg from "../assets/rottweiler.svg";
import dachshundImg from "../assets/dachshund.svg";
import bulldogImg from "../assets/bulldog.svg";
import greyhoundImg from "../assets/greyhound.svg";

const breeds: IItemData[] = [
  {
    heading: "Rottwe",
    img: rottweilerImg,
    bodyText: "",
  },
  {
    heading: "Dachshund",
    img: dachshundImg,
    bodyText:
      "Woof Woof (Dachshund breed not found in the DogApi or any other related breed)",
  },
  {
    heading: "American Bulld",
    img: bulldogImg,
    bodyText: "",
  },
  {
    heading: "Greyh",
    img: greyhoundImg,
    bodyText: "",
  },
];

export const getTemperaments = (data: IApiItem[]) => {
  breeds.forEach((breed: IItemData) => {
    data.map((d: IApiItem) => {
      if (d.name.startsWith(breed.heading)) {
        breed.heading = d.name;
        breed.bodyText = d.temperament;
      }
    });
  });
  return breeds;
};
