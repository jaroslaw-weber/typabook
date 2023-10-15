export function splitStringAtIndex(value: string, index: number): string[] {
  return [value.substring(0, index), value.substring(index)];
}
