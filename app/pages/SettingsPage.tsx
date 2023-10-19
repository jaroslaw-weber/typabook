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

  const exportButton = ExportButton();
  const wordsPerPageSlider = WordsPerPageSlider();
  const resetButton = ResetButton();
  const importButton = ImportButton();
  const caretTypeSelect = CaretTypeSelect();
  const themeSelect = ThemeSelect();
  const typingAnimationSelect = TypingAnimationSelect();

  const result = (
    <div className="flex flex-col justify-center items-center gap-16 py-8 w-1/2 h-full">
      {wordsPerPageSlider}
      <div className="flex flex-col gap-8 w-full">
        <p className="font-bold">progress</p>
        <div className="w-full flex gap-4">
          {importButton
          }
          {exportButton}
        </div>
      </div>
      {typingAnimationSelect}
      {caretTypeSelect}
      {themeSelect}
      <div className="w-full">{resetButton}</div>
    </div>
  );
  if (currentUi != Ui.Settings) {
    return <div />;
  }

  return result;
}
