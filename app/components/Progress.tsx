import { useAtom } from "jotai";
import { accuracyAtom, maxProgressAtom, progressAtom } from "../state";

export default function Progress() {
  const [progress] = useAtom(progressAtom);
  const [maxProgress] = useAtom(maxProgressAtom);
  const [accuracy] = useAtom(accuracyAtom)
  const progressPercent = Math.round((progress / maxProgress) * 100) + "%";

  const wpm= '?'//todo
  const countdown = (
    <div className="flex flex-col">
      <span className="countdown font-mono text-5xl">
        <span style={{ "--value" : progress } as React.CSSProperties}></span>
      </span>
      max: {maxProgress}
    </div>
  );
  const countdownMax = (
    <div className="flex flex-col">
      <span className="countdown font-mono text-3xl w-20">
        <span style={{ "--value": maxProgress } as React.CSSProperties}></span>
      </span>
    </div>
  );

  const percentage = (progress/maxProgress*100).toFixed(2)
  const percentageDisplay = `${percentage}%`
  //const comment = progress<maxProgress?'Keep goind!' : 'Done!';
const comment = ''
  const wpmComment = ''
  const progressPercentWidget = (
    <div className="stat">
      <div className="stat-figure text-primary">
      
      </div>
      <div className="stat-title">Progress</div>
      <div className="stat-value text-primary">{percentageDisplay}</div>
      <div className="stat-desc">{comment}</div>
    </div>
  );
  const letters = (
    <div className="stat">
      <div className="stat-figure text-secondary">
       
      </div>
      <div className="stat-title">Letters typed</div>
      <div className="stat-value text-secondary">{progress}</div>
      <div className="stat-desc">{comment}</div>
    </div>
  );

  const wpmView =(
    <div className="stat">
      <div className="stat-figure text-primary">
	  
      </div>
      <div className="stat-title">WPM</div>
      <div className="stat-value text-secondary">{wpm}</div>
      <div className="stat-desc">{wpmComment}</div>
    </div>
  );

  const accuracyComponent =(
    <div className="stat">
      <div className="stat-figure text-secondary">
	  
      </div>
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
        {letters}{progressPercentWidget}{accuracyComponent}
              </div>
      {progressBar}
    </div>
  );
}
