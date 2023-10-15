import { useAtom } from "jotai";
import { Letter } from "./Letter";
import { pagesAtom, playPageChangeAnimationAtom, progressAtom } from "../state";
import { SingleWord } from "../types/SingleWord";
import { getCurrentPage } from "../utils/bookUtils";

export function Text() {
  const [progress] = useAtom(progressAtom);
  const [pages] = useAtom(pagesAtom);
  const currentPage = getCurrentPage(pages, progress);

  const words = currentPage.words;

  function getWordClasses(word: SingleWord) {
    const result = [];
    if (word.letters.length == 1 && word.letters[0].character == "\n") {
      result.push("w-full");
    } else {
      result.push("flex-shrink flex");
    }
    return result.join(" ");
  }
  const [playPageChangeAnimation] = useAtom(playPageChangeAnimationAtom);
  const animation = playPageChangeAnimation ? "animate-slide-in-right-fade" : "";
  return (
    <div className={"flex w-full flex-wrap py-10 " + animation}>
      {words.map((word, wordIndex) => (
        <div key={wordIndex} className={getWordClasses(word)}>
          {word.letters.map((letter) => Letter(letter, progress))}
        </div>
      ))}
    </div>
  );
}