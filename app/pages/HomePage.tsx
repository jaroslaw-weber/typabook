import { useAtom } from "jotai";
import { Ui } from "../Ui";
import Progress from "../components/Progress";
import { Text } from "../components/Text";
import TypingInput from "../components/TypingInput";
import { currentUiAtom } from "../state";
import { PageChangeButtons } from "../components/PageChangeButtons";
import Upload from "../components/Upload";

export default function HomePage() {
  const [currentUi] = useAtom(currentUiAtom);
  const progress = Progress();
  const text = Text();
  const pageChangeButtons = PageChangeButtons();

  const result = (
    <div className="flex-1  flex flex-col justify-center items-center gap-4 pb-12 w-1/2 h-full">
      {progress}
      {text}

      {pageChangeButtons}
    </div>
  );
  if (currentUi != Ui.Type) {
    return <div />;
  }
  return result;
}
