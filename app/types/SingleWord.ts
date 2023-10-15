import { SingleLetter } from "./SingleLetter";

export interface SingleWord {
  letters: SingleLetter[];
}

export interface SinglePage {
  words: SingleWord[];
  index: number;
}

