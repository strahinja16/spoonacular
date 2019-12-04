export interface ExtendedIngredient {
  id: number;
  aisle: string;
  image: string;
  name: string;
  amount: number;
  unit: string;
  unitShort: string;
  unitLong: string;
  originalString: string;
  metaInformation: any[];
}

export interface StepIngredient {
  id: number;
  name: string;
  image: string;
}

export interface StepEquipment {
  id: number;
  name: string;
  image: string;
}

export interface InstructionStep {
  number: number;
  step: string;
  ingredients: StepIngredient[];
  equipment: StepEquipment[];
}

export interface AnalyzedInstruction {
  name: string;
  steps: InstructionStep[];
}

export interface RecipeBulk {
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  veryHealthy: boolean;
  cheap: boolean;
  veryPopular: boolean;
  sustainable: boolean;
  lowFodmap: boolean;
  ketogenic: boolean;
  whole30: boolean;
  // tags

  weightWatcherSmartPoints: number;
  gaps: string;
  servings: number;
  sourceUrl: string;
  spoonacularSourceUrl: string;
  aggregateLikes: number;
  spoonacularScore: number;
  healthScore: number;
  creditText: string;
  sourceName: string;
  pricePerServing: number;
  extendedIngredients: ExtendedIngredient[];
  id: number;
  title: string;
  readyInMinutes: number;
  image: string;
  imageType: string;
  cuisines: any[];
  dishTypes: string[];
  instructions: string;
  analyzedInstructions: AnalyzedInstruction[];
}
