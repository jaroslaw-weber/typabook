import { chunk } from "lodash";
import { SingleLetter } from "../types/SingleLetter";
import { SinglePage, SingleWord } from "../types/SingleWord";

/** convert text to words */
export function parseBook(
  userInput: string,
  book: string,
  wordsPerPage: number
): SinglePage[] {
  const words: SingleWord[] = [];
  let letters: SingleLetter[] = [];
  for (let i = 0; i < book.length; i++) {
    const character = book[i];
    const inputLetter: string = userInput.charAt(i);
    let display = character;
    if (character === " ") {
      const word = { letters: [...letters] };
      words.push(word);
      letters = [];
      const space: SingleLetter = { character: " ", display: " ", index: i };
      words.push({ letters: [space] });
    } else if (character === "\n") {
      const word = { letters: [...letters] };
      words.push(word);
      letters = [];
      const newLine: SingleLetter = {
        character: "\n",
        display: "\n",
        index: i,
      };
      words.push({ letters: [newLine] });
    } else {
      letters.push({ character, display, index: i, input: inputLetter });
    }
  }
  if (letters.length > 0) {
    const word = { letters: [...letters] };
    words.push(word);
  }
  const chunked = chunk(words, wordsPerPage);
  const result: SinglePage[] = [];
  for (const pageWords of chunked) {
    const firstWord = pageWords[0];
    if (firstWord) {
      const firstLetter = firstWord.letters[0];
      if (firstLetter) {
        result.push({
          words: pageWords,
          index: firstLetter.index,
        });
      }
    }
  }
  return result;
}

export function getCurrentPage(
  pages: SinglePage[],
  progress: number
): SinglePage {
  let result = pages[0];
  console.log(
    "indexes",
    pages.map((x) => x.index)
  );
  console.log("progress", progress);
  for (const page of pages) {
    if (progress >= page.index) {
      console.log("page index", page.index, "progress", progress);
      result = page;
    } else {
      return result;
    }
  }
  return result;
}
