import { useAtom } from "jotai";
import { Ui } from "../Ui";
import Progress from "../components/progress/Progress";
import Text from "../components/Text";
import { currentUiAtom } from "../state";
import PageChangeButtons  from "../components/PageChangeButtons";

export default function HomePage() {
  const [currentUi] = useAtom(currentUiAtom);

  const result = (
    <div className="flex-1  flex flex-col justify-center items-center gap-4 pb-12 w-1/2 h-full">
      <Progress />
      <Text />

      <PageChangeButtons />
    </div>
  );
  if (currentUi != Ui.Type) {
    return <div />;
  }
  return result;
}
