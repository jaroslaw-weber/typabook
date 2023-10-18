import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { getCurrentPage, parseBook } from "./utils/bookUtils";
import { Ui } from "./Ui";
import { TypingAnimation } from "./TypingAnimation";
import { defaultTheme } from "./theme";

//export const progressAtom = atom(0);
const defaultText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quam elit, venenatis ac augue quis, faucibus hendrerit libero. Phasellus mi orci, viverra eget aliquam eu, posuere non metus. Sed condimentum justo tellus, in elementum libero tempus non. Nulla purus erat, luctus ut volutpat efficitur, facilisis ac metus. Sed laoreet ipsum est, eu vehicula elit consectetur pellentesque. Nulla elementum lorem quis orci scelerisque varius. Nam venenatis tincidunt felis, eu posuere dui convallis vitae. Phasellus a congue leo. Nam lacinia eros id orci maximus rutrum. Nunc aliquam accumsan vulputate. Sed sed velit at ipsum elementum fermentum sed id sapien. Nam volutpat enim a semper tempor. Praesent hendrerit tortor ipsum, malesuada tempus dolor ullamcorper at. Curabitur neque diam, scelerisque nec sem sit amet, pharetra pretium est. Vivamus in nisl nec arcu elementum iaculis.

Phasellus ac dolor at nulla condimentum tristique at vitae neque. Duis ullamcorper mattis purus ut blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc placerat dui turpis, sed facilisis ipsum dapibus vitae. Sed tempor libero lorem, rutrum sagittis eros bibendum eget. Donec eleifend pellentesque enim, vitae auctor dolor maximus vitae. Curabitur tristique lectus quis ultricies venenatis. Integer in urna velit. Fusce et mollis enim. `;

export const bookAtom = atomWithStorage("book", defaultText);

/** have user seen or read tutorial? */
export const tutorialCompleteAtom = atomWithStorage("tutorial-complete", false);

export const tutorialStepAtom = atomWithStorage("tutorial-step", 1);

export const userInputAtom = atomWithStorage("user-input", "");

export const progressAtom = atom((get) => get(userInputAtom).length);

export const maxProgressAtom = atom((get) => get(bookAtom).length);

export const themeAtom = atomWithStorage("theme", defaultTheme);

export const defaultWordsPerPage = 200;
export const wordsPerPageAtom = atomWithStorage(
  "words-per-page",
  defaultWordsPerPage
);
export const pagesAtom = atom((get) =>
  parseBook(get(userInputAtom), get(bookAtom), get(wordsPerPageAtom))
);

export const playPageChangeAnimationAtom = atom((get) => {
  const page = get(currentPageAtom);
  const progress = get(progressAtom);
  const play =
    page.index == progress ||
    page.index == progress + 1 ||
    page.index == progress + 2;
  return play;
});

export const currentPageAtom = atom((get) =>
  getCurrentPage(get(pagesAtom), get(progressAtom))
);

export const currentUiAtom = atomWithStorage("current-ui", Ui.Type);

export const isFinishedAtom = atom(
  (get) => get(progressAtom) >= get(maxProgressAtom)
);

export const isStartAtom = atom((get) => get(progressAtom) === 0);



export const accuracyAtom = atom((get) => {
  const userInput = get(userInputAtom);
  //start with 100% accuracy
  if (userInput.length == 0) {
    return 100;
  }
  const book = get(bookAtom);
  //console.log('user input ', userInput);

  const testSize = 80;
  const progress = get(progressAtom);
  const start = progress - testSize;
  const end = start + testSize;
  const s1 = userInput.substring(start, end);
  const s2 = book.substring(start, end);
  console.log(`1:${s1}\n\n2:${s2}`);
  return calculateLetterMatchPercentage(s1, s2);
});

function calculateLetterMatchPercentage(str1: string, str2: string) {
  if (str1.length !== str2.length) {
    throw new Error("Strings must have the same length for comparison.");
  }

  let matchingLetters = 0;

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === str2[i]) {
      matchingLetters++;
    }
  }

  const percentage = (matchingLetters / str1.length) * 100;

  return percentage.toFixed(1);
}


export const typingAnimationAtom = atomWithStorage('typing-animation', TypingAnimation.Jump)
