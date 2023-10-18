import { useAtom } from "jotai";
import WordsPerPageSlider from "../components/WordsPerPageSlider";
import {
  caretTypeAtom,
  currentUiAtom,
  themeAtom,
  typingAnimationAtom,
} from "../state";
import { Ui } from "../Ui";
import ResetButton from "../components/ResetButton";
import ImportButton from "../components/ImportButton";
import ExportButton from "../components/ExportButton";
import { TypingAnimation } from "../TypingAnimation";
import { themes } from "../theme";
import { CaretType } from "../CaretType";

export default function SettingsPage() {
  const [currentUi] = useAtom(currentUiAtom);
  const [typingAnimation, setTypingAnimation] = useAtom(typingAnimationAtom);
  const wordsPerPageSlider = WordsPerPageSlider();
  const resetButton = ResetButton();
  const importButton = ImportButton();
  const exportButton = ExportButton();

  const [theme, setTheme] = useAtom(themeAtom);
  const [caretType, setCaretType] = useAtom(caretTypeAtom);

  const themeSelect = (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">Theme</span>
      </label>
      <select
        className="select select-bordered"
        onChange={(e) => {
          console.log("e", e, e.target.value);
          setTheme(e.target.value as TypingAnimation);
        }}
      >
        <option disabled selected>
          {theme}
        </option>
        {themes.map((t) => {
          return (
            <option key={t} value={t}>
              {t}
            </option>
          );
        })}
      </select>
    </div>
  );
  const caretTypeSelect = (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">Caret</span>
      </label>
      <select
        className="select select-bordered"
        onChange={(e) => {
          console.log("e", e, e.target.value);
          setCaretType(e.target.value as CaretType);
        }}
      >
        <option disabled selected>
          {caretType}
        </option>
        {[CaretType.Square, CaretType.Classic].map((t) => {
          return (
            <option key={t} value={t}>
              {t}
            </option>
          );
        })}
      </select>
    </div>
  );

  const typingAnimationSelection = (
    <div className="flex flex-col gap-4 w-full">
      <p>typing animation</p>
      <div className="flex gap-4 w-full">
        {[TypingAnimation.Jump, TypingAnimation.None].map((a) => {
          const active = typingAnimation == a;
          let className = "flex-1 btn";
          if (active) {
            className += " bg-primary text-white";
          }

          return (
            <button
              className={className}
              key={a}
              onClick={(e) => setTypingAnimation(a)}
            >
              {a}
            </button>
          );
        })}
      </div>
    </div>
  );

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
      {typingAnimationSelection}
      {themeSelect}
      {caretTypeSelect}
      <div className="w-full">{resetButton}</div>
    </div>
  );

  return result;
}
