export interface Amount {
  metric: {
    value: number;
    unit: string;
  };
  us: {
    value: number;
    unit: string;
  };
}

export interface Ingredient {
  name: string;
  image: string;
  price: number;
  amount: Amount;
}
