export interface IItemData {
  heading: string;
  img: string;
  bodyText?: string;
}

export interface IApiItem {
  name: string;
  temperament: string;
}

export interface IData {
  items: IItemData[];
}

export interface IContent {
  next: () => void;
  showImg: boolean;
  items: IItemData[];
  currentIndex: number;
}

export interface IProgressIndicatorDots {
  items: IItemData[];
  currentIndex: number;
  selectSlide: (slideIndex: number) => void;
}

export interface ILoadingText {
  text: string;
}
