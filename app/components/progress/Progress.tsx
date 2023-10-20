import { useAtom } from "jotai";
import { accuracyAtom, maxProgressAtom, progressAtom } from "../../state";

export default function Progress() {
  const [progress] = useAtom(progressAtom);
  const [maxProgress] = useAtom(maxProgressAtom);
  const [accuracy] = useAtom(accuracyAtom);

  const percentage = ((progress / maxProgress) * 100).toFixed(2);
  const percentageDisplay = `${percentage}%`;
  const progressPercentWidget = (
    <div className="stat">
      <div className="stat-figure text-primary"></div>
      <div className="stat-title">Progress</div>
      <div className="stat-value text-primary">{percentageDisplay}</div>
    </div>
  );
  const letters = (
    <div className="stat">
      <div className="stat-figure text-secondary"></div>
      <div className="stat-title">Letters typed</div>
      <div className="stat-value text-secondary">{progress}</div>
    </div>
  );

  const accuracyComponent = (
    <div className="stat">
      <div className="stat-figure text-secondary"></div>
      <div className="stat-title">Accuracy</div>
      <div className="stat-value text-secondary">{accuracy}%</div>
    </div>
  );
  const progressBar = (
    <progress
      className="progress progress-primary w-full h-4"
      value={progress}
      max={maxProgress}
    ></progress>
  );
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex gap-2">
        {letters}
        {progressPercentWidget}
        {accuracyComponent}
      </div>
      {progressBar}
    </div>
  );
}
