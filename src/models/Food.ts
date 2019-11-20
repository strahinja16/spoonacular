export interface CaloricBreakDown {
  percentProtein: number;
  percentFat: number;
  percentCarbs: number;
}

export interface Nutrient {
  title: string;
  amount: number;
  unit: string;
  percentOfDailyNeeds: number;
}

export interface Nutrition {
  nutrients: Nutrient[];
  caloricBreakdown: CaloricBreakDown;
}

export interface Food {
  id: number;
  name: string;
  aisle: string;
  image: string;
  amount: number;
  unit: string;
  nutrition: Nutrition;
}
