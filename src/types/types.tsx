export interface kofItemOO {
  k1: number;
  k2: number;
  k3: number;
}

export interface kofOO {
  sex: kofItemOO[];
}

interface kofItemOOHB {
  k1: number;
  k2: number;
  k3: number;
  k4: number;
}

export interface kofOOHB {
  sex: kofItemOOHB;
}

export interface KoversKofItem {
  id: number;
  name: string;
  value: number;
}

export interface Sex {
  sex: number;
  setSex: React.Dispatch<React.SetStateAction<number>>;
}

export interface Age {
  age: number;
  setAge: React.Dispatch<React.SetStateAction<number>>;
}

export interface Weight {
  weight: number;
  setWeight: React.Dispatch<React.SetStateAction<number>>;
}

export interface Height {
  height: number;
  setHeight: React.Dispatch<React.SetStateAction<number>>;
}
