import { useAtom } from "jotai";
import { wordsPerPageAtom } from "../state";

export default function WordsPerPageSlider() {
  const [wordsPerPage, setWordsPerPage] = useAtom(wordsPerPageAtom);
  const pageSizeSlider = (
    <div className="w-full flex flex-col gap-4">
      <p className="font-bold">words per page</p>
	  <p className="text-2xl text-center">{wordsPerPage}</p>
      <input
        type="range"
        min={0}
        max="400"
        value={wordsPerPage}
        className="range w-full"
        onChange={(e) => {
          setWordsPerPage(parseInt(e.target.value));
        }}
      />
    </div>
  );
  return pageSizeSlider;
}
