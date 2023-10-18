import { useAtom } from "jotai";
import { TypingAnimation, getTypingAnimationClasses } from "../TypingAnimation";
import { caretTypeAtom, typingAnimationAtom } from "../state";
import { SingleLetter } from "../types/SingleLetter";
import { CaretType } from "../CaretType";

function getLetterClasses(
  letter: SingleLetter,
  progress: number,
  typingAnimation: TypingAnimation,
  caretType: CaretType
) {
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
      if (caretType == CaretType.Square) {
        result.push("w-3");
      }else{
        result.push("w-1");
      }
    }
    {
      const animation = getTypingAnimationClasses(typingAnimation);

      if (caretType == CaretType.Square) {
        result.push(
          "bg-primary",
          "px-1",
          "text-white",
          "rounded",
          ...animation
        );
      }
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
  const [typingAnimation] = useAtom(typingAnimationAtom);
  const [caretType] = useAtom(caretTypeAtom);
  const classes = getLetterClasses(
    letter,
    progress,
    typingAnimation,
    caretType
  );

  const isActive = letter.index === progress;
  const caret =
    isActive && caretType == CaretType.Classic ? (
      <div
        id="caret"
        className="animate-pulse relative top-0 left-0 text-white flex-shrink "
        style={{
          width: '1px'
        }}
      >
        |
      </div>
    ) : (
      ""
    );
  let display = (
    <div className="flex">
      {caret}
      <p>{letter.character}</p>
    </div>
  );

  return <div className={classes}>{display}</div>;
}
