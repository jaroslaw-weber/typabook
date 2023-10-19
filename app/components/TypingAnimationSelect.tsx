import { useAtom } from "jotai";
import { TypingAnimation } from "../TypingAnimation";
import { typingAnimationAtom } from "../state";


export default function TypingAnimationSelect() {
  const [typingAnimation, setTypingAnimation] = useAtom(typingAnimationAtom);

  const ta = typingAnimation
  const typingAnimationSelection = (
    <div className="flex flex-col gap-4 w-full">
      <p>typing animation</p>
      <div className="flex gap-4 w-full">
        {[TypingAnimation.Jump, TypingAnimation.None].map((a) => {
          const active = ta == a;
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
  return typingAnimationSelection;
}
