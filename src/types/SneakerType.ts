export type SneakerType = {
  id: number,
  manufacturer?: string,
  title: string,
  shortTitile: string,
  image?: string,
  price: number,
  promotion?: {
    off: number,
    isPromotional: boolean,
  }
};
