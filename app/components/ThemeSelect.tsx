import { useAtom } from "jotai";
import { themeAtom } from "../state";
import { TypingAnimation } from "../TypingAnimation";
import { themes } from "../theme";


export default function ThemeSelect() {

  const [theme, setTheme] = useAtom(themeAtom);
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
  return themeSelect;
}
