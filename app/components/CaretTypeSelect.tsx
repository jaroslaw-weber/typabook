import { useAtom } from "jotai";
import { caretTypeAtom } from "../state";
import { CaretType } from "../CaretType";


export default function CaretTypeSelect() {
  const [caretType, setCaretType] = useAtom(caretTypeAtom);
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
  return caretTypeSelect;
}
