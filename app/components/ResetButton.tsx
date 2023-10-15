import { useAtom } from "jotai";
import { defaultWordsPerPage, userInputAtom, wordsPerPageAtom } from "../state";

export default function ResetButton() {
  const [userInput, setUserInput] = useAtom(userInputAtom);
  const [wordsPerPage, setWordsPerPage] = useAtom(wordsPerPageAtom);

  function resetAll(){
    localStorage.clear()
    window.location.reload()
  }
  function resetSettings() {
    setWordsPerPage(defaultWordsPerPage);
  }
  function resetProgress() {
    setUserInput("");
  }
  return (
    <div className="flex gap-4 w-full">
      <button
        className="flex-1 btn btn-error  text-white"
        onClick={resetProgress}
      >
        Reset Progress
      </button>
      <button
        className="flex-1 btn btn-error  text-white "
        onClick={resetSettings}
      >
        Reset Settings
      </button>
      <button
        className="flex-1 btn btn-error  text-white "
        onClick={resetAll}>
        Reset all
      </button>
    </div>
  );
}
