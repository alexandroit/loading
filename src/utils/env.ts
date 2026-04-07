export function canUseDOM(): boolean {
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}
