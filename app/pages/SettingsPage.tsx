import { useAtom } from "jotai";
import WordsPerPageSlider from "../components/WordsPerPageSlider";
import { currentUiAtom } from "../state";
import { Ui } from "../Ui";
import ResetButton from "../components/ResetButton";
import ImportButton from "../components/ImportButton";
import ExportButton from "../components/ExportButton";
import ThemeSelect from "../components/ThemeSelect";
import TypingAnimationSelect from "../components/TypingAnimationSelect";
import CaretTypeSelect from "../components/CaretTypeSelect";

export default function SettingsPage() {
  
  const [currentUi] = useAtom(currentUiAtom);

  const wordsPerPageSlider = WordsPerPageSlider();

  const result = (
    <div className="flex flex-col justify-center items-center gap-16 py-8 w-1/2 h-full">
      <WordsPerPageSlider/>
      <div className="flex flex-col gap-8 w-full">
        <p className="font-bold">progress</p>
        <div className="w-full flex gap-4">
          <ImportButton/>
          <ExportButton/>
        </div>
      </div>
      <TypingAnimationSelect/>
      <CaretTypeSelect/>
      <ThemeSelect/>
      <div className="w-full"><ResetButton/></div>
    </div>
  );
  if (currentUi != Ui.Settings) {
    return <div />;
  }

  return result;
}
