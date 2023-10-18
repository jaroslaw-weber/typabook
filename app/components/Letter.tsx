import { useAtom } from "jotai";
import { TypingAnimation, getTypingAnimationClasses } from "../TypingAnimation";
import { typingAnimationAtom } from "../state";
import { SingleLetter } from "../types/SingleLetter";

function getLetterClasses(letter: SingleLetter, progress: number, typingAnimation: TypingAnimation) {
  const result = ["flex-1"];
  if (letter.input) {
    if (letter.character != letter.input) {
      result.push("text-error");
    } else {
      result.push("text-primary");
    }
  }

  const isActive = letter.index === progress;
  const isSpace = letter.character === " ";
  if (isActive) {
    if (isSpace) {
      result.push("w-3");
    }
    {
      const animation = getTypingAnimationClasses(typingAnimation);
      result.push("bg-primary", "px-1", "text-white", "rounded", ...animation);
    }
  } else {
    if (isSpace) {
      result.push("w-1");
    }
  }
  //new line
  if (letter.character == "\n") {
    result.push("w-full h-2");
  }

  return result.join(" ");
}

export function Letter(letter: SingleLetter, progress: number) {
  const [typingAnimation] = useAtom(typingAnimationAtom)
  const classes = getLetterClasses(letter, progress, typingAnimation);

  let display = <div>{letter.character}</div>;

  return <div className={classes}>{display}</div>;
}
