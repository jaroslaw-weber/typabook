import { useAtom } from "jotai";
import { useEffect } from "react";
import {
  bookAtom,
  isFinishedAtom,
  isStartAtom,
  maxProgressAtom,
  progressAtom,
  userInputAtom,
  wordsPerPageAtom,
} from "../state";
import { repeat } from "lodash";

export default function TypingInput() {
  const [book] = useAtom(bookAtom);
  const [userInput, setUserInput] = useAtom(userInputAtom);
  const [progress] = useAtom(progressAtom);
  const [maxProgress] = useAtom(maxProgressAtom);
  const [speed] = useAtom(wordsPerPageAtom);
  const [isFinished] = useAtom(isFinishedAtom)
  const [isStart] = useAtom(isStartAtom)
  useEffect(() => {
    function onPress(e: KeyboardEvent) {
      e.preventDefault();
      console.log("key pressed", e.key);
      if (e.key == "ArrowRight") {
        if(isFinished){
          return
        }
        //fast forward
        const start = userInput.length;
        const end = start + speed;
        const substring = book.substring(start, end);
        const newInput = userInput + substring
        setUserInput(newInput);
        return;
      }
      if (e.key == "ArrowLeft") {
        if(isStart){
          return
        }
        //rewind
        const newInput = userInput.slice(0, -speed);
        console.log('rewinding')
        setUserInput(newInput);
        return;
      }
      if (progress >= maxProgress) {
        //typed everything!
        return;
      }

      if (e.key === "Backspace") {
        //remove last letter
        const newInput = userInput.substring(0, userInput.length - 1);
        setUserInput(newInput);
        return;
      }
      if (e.key === "Enter") {
        e.preventDefault();
        const newInput = userInput + "\n";
        setUserInput(newInput);
        return;
      }
      
      if (e.key.length > 1) {
        return;
      }
      const newInput = userInput + e.key;
      setUserInput(newInput);
    }
    document.addEventListener("keydown", onPress);
    return () => {
      document.removeEventListener("keydown", onPress);
    };
  }, [setUserInput, userInput, progress, maxProgress, speed, isFinished, isStart, book]);
  return <></>;
}
