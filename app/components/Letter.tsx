import { SingleLetter } from "../types/SingleLetter";

const getLetterClasses = (letter: SingleLetter, progress: number) => {
  const result = ["flex-1"];
  if (letter.input) {
    if (letter.character != letter.input) {
      result.push("text-red-500");
    } else {
      result.push("text-green-800");
    }
  }

  const isActive = letter.index === progress;
  const isSpace = letter.character === " ";
  if (isActive) {
    if (isSpace) {
      result.push("w-3");
    }
    {
      result.push(
        "bg-primary",
        "px-1",
        "text-white",
        "rounded",
        "animate-fade-up",
        "animate-duration-150",
        "animate-ease-out"
      );
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
};

export function Letter(letter: SingleLetter, progress: number) {
  const classes = getLetterClasses(letter, progress);

  let display = <div>{letter.character}</div>;

  return <div className={classes}>{display}</div>;
}
