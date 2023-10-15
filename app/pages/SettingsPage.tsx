import { useAtom } from "jotai";
import WordsPerPageSlider from "../components/WordsPerPageSlider";
import { currentUiAtom } from "../state";
import { Ui } from "../Ui";
import { PageChangeButtons } from "../components/PageChangeButtons";
import Upload from "../components/Upload";
import ResetButton from "../components/ResetButton";
import ImportButton from "../components/ImportButton";
import ExportButton from "../components/ExportButton";

export default function SettingsPage() {
  const [currentUi] = useAtom(currentUiAtom);
  const wordsPerPageSlider = WordsPerPageSlider();
  const resetButton = ResetButton();
  const importButton = ImportButton();
  const exportButton = ExportButton();
  if (currentUi != Ui.Settings) {
    return null;
  }
  const result = (
    <div className="flex flex-col justify-center items-center gap-16 py-8 w-1/2 h-full">
      {wordsPerPageSlider}
      <div className="flex flex-col gap-8 w-full">
        <p className="font-bold">progress</p>
        <div className="w-full flex gap-4">
          {importButton}
          {exportButton}
        </div>
      </div>
      <div className="w-full">{resetButton}</div>
    </div>
  );

  return result;
}
