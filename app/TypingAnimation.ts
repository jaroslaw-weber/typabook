export enum TypingAnimation {
  None = "none",
  Jump = "jump",
}

export function getTypingAnimationClasses(
  animation: TypingAnimation
): string[] {
  switch (animation) {
    case TypingAnimation.Jump:
      return ["animate-fade-up", "animate-duration-150", "animate-ease-out"];
    default:
      return [];
  }
}
