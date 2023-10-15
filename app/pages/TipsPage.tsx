/* eslint-disable react/no-unescaped-entities */
import { useAtom } from "jotai";
import { currentUiAtom } from "../state";
import { Ui } from "../Ui";

export default function TipsPage() {
  const [currentUi] = useAtom(currentUiAtom);
  if (currentUi != Ui.Tips) {
    return null;
  }

  return (
    <div className="pt-8 flex flex-col w-1/2 gap-4 pb-16">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Welcome to Typabook!</h2>
          <p>
            Unlock the power of Typabook, your go-to solution for honing your
            typing speed while indulging in your favorite books and novels.
            Seamlessly merge reading and typing practice into a single,
            convenient app!
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Effortless Navigation</h2>
          <p>
            Skipping through the book is a breeze with our app. Simply press the
            <kbd className="kbd">←</kbd> and <kbd className="kbd">→</kbd> keys
            on your physical keyboard to move swiftly through the text.
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Uploading an EPUB File?</h2>
          <p>
            While our app currently supports only text files, you can still
            easily upload EPUB files with a simple workaround. Just follow these
            steps:
          </p>
          <ol className="list-disc pl-8">
            <li>
              Visit{" "}
              <a
                className="text-primary underline"
                href="https://convertio.co/epub-txt/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://convertio.co/epub-txt/
              </a>
              .
            </li>
            <li>Use their EPUB to text file converter.</li>
            <li>
              Once your file is converted to text, return here and upload it
              effortlessly!
            </li>
          </ol>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Looking for Free Books?</h2>
          <p>
            If you're on the hunt for some free reads, check out{" "}
            <a
              href="https://www.gutenberg.org/browse/scores/top#books-last30"
              className="text-primary underline"
            >
              Project Gutenberg
            </a>
            . They've got a ton of great books, and they won't cost you a dime.
            Happy reading! (and typing)
          </p>
        </div>
      </div>
    </div>
  );
}
