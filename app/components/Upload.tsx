import { useAtom } from "jotai";
import { bookAtom, currentUiAtom, tutorialCompleteAtom, tutorialStepAtom, userInputAtom } from "../state";
import { Ui } from "../Ui";

export default function Upload() {
	const [book, setBook] = useAtom(bookAtom)
  const [currentUi, setCurrentUi] = useAtom(currentUiAtom);
  const [, setUserInput] = useAtom(userInputAtom);
  const [tutorialComplete, setTutorialComplete] = useAtom(tutorialCompleteAtom);
  
  const highlightStyle = 'animate-pulse'
  const normalStyle = ''

  const uploadStyle = tutorialComplete ? normalStyle : highlightStyle;
  
  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const fileData = event?.target?.result;
        if (typeof fileData === "string") {
          setBook(fileData);
        } else {
          throw new Error("file is not a text file");
        }
      };

      // Read the selected file as a data URL (base64)
      reader.readAsText(file);
      setUserInput('')
      setCurrentUi(Ui.Type);
      setTutorialComplete(true)
    }
  };
  const result = (
    <div className="flex flex-col gap-2 w-full">
      <p className="">Ready to Type? Upload Your Book Here.</p>
    <input
      type="file"
      accept="text/plain"
      className={`file-input file-input-bordered file-input-primary w-full ${uploadStyle}`}
      onChange={handleFileChange}
    /></div>
  );
  return result;
}
