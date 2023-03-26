import { IApiItem, IItemData } from "../types/index";

const breeds: IItemData[] = [
  {
    heading: "Rottwe",
    img: "../src/assets/1-rottweiler.svg",
    bodyText: "",
  },
  {
    heading: "Dachshund",
    img: "../src/assets/2-dachshund.svg",
    bodyText:
      "Woof Woof (Dachshund breed not found in the DogApi or any other related breed)",
  },
  {
    heading: "American Bulld",
    img: "../src/assets/3-bulldog.svg",
    bodyText: "",
  },
  {
    heading: "Greyh",
    img: "../src/assets/4-greyhound.svg",
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
