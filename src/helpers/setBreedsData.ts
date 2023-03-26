import { IApiItem, IItemData } from "../types/index";

const breeds: IItemData[] = [
  {
    heading: "Rottwe",
    img: "src/assets/rottweiler.svg",
    bodyText: "",
  },
  {
    heading: "Dachshund",
    img: "src/assets/dachshund.svg",
    bodyText:
      "Woof Woof (Dachshund breed not found in the DogApi or any other related breed)",
  },
  {
    heading: "American Bulld",
    img: "src/assets/bulldog.svg",
    bodyText: "",
  },
  {
    heading: "Greyh",
    img: "src/assets/greyhound.svg",
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
