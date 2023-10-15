import { useAtom } from "jotai";
import {
  currentPageAtom,
  maxProgressAtom,
  progressAtom,
  userInputAtom,
  wordsPerPageAtom,
} from "../state";
import { repeat } from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStepForward,
  faStepBackward,
} from "@fortawesome/free-solid-svg-icons";

export function PageChangeButtons() {
  const [userInput, setUserInput] = useAtom(userInputAtom);
  const [wordsPerPage, setWordsPerPage] = useAtom(wordsPerPageAtom);
  const [maxProgress] = useAtom(maxProgressAtom);
  const [progress, setProgress] = useAtom(progressAtom);
  const speed = wordsPerPage;
  const finished = userInput.length >= maxProgress;

  const fastForward = (
    <button
      className="btn"
      onClick={() => {
        if (finished) {
          return;
        }
        const newInput = userInput + repeat(" ", speed);
        setUserInput(newInput);
      }}
    >
      <FontAwesomeIcon icon={faStepForward} />
    </button>
  );

  const rewind = (
    <button
      className="btn"
      onClick={() => {
        const newInput = userInput.slice(0, -speed);
        setUserInput(newInput);
      }}
    >
      <FontAwesomeIcon icon={faStepBackward} />
    </button>
  );

  return (
    <div className="flex gap-4">
      {progress > 0 && rewind}
      {!finished && fastForward}
    </div>
  );
}
