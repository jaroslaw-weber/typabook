import { useAtom } from "jotai";
import {
  currentUiAtom,
  tutorialCompleteAtom,
  tutorialStepAtom,
} from "../state";
import { Ui } from "../Ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faKeyboard,
  faCog,
  faLightbulb,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [, setCurrentUi] = useAtom(currentUiAtom);

  const [tutorialStep, setTutorialStep] = useAtom(tutorialStepAtom);
  const [tutorialComplete, setTutorialComplete] = useAtom(tutorialCompleteAtom);

  const highlightInfo = tutorialStep == 1 && !tutorialComplete;
  const highlightUpload = tutorialStep == 2 && !tutorialComplete;

  const highlightStyle = 'bg-primary text-white  animate-pulse'
  const normalStyle = ''

  const uploadStyle = highlightUpload ? highlightStyle : normalStyle;
  const infoStyle = highlightInfo ? highlightStyle : normalStyle;
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <button
          className="btn btn-ghost normal-case text-xl"
          onClick={(e) => setCurrentUi(Ui.Type)}
        >
          typabook
        </button>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <button onClick={(e) => setCurrentUi(Ui.Type)}>
              <FontAwesomeIcon icon={faKeyboard} />
            </button>
          </li>
          <li>
            <button
              className={uploadStyle}
              onClick={(e) => setCurrentUi(Ui.Upload)}
            >
              <FontAwesomeIcon icon={faUpload} />
            </button>
          </li>
          <li>
            <button onClick={(e) => setCurrentUi(Ui.Settings)}>
              <FontAwesomeIcon icon={faCog} />
            </button>
          </li>
          <li>
            <button
              className={infoStyle}
              onClick={(e) => {
                setCurrentUi(Ui.Tips);
                setTutorialStep(2);
              }}
            >
              <FontAwesomeIcon icon={faLightbulb} />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
