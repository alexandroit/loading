let uidCount = 0;

export function createUid(prefix = 'rvl'): string {
  uidCount += 1;
  return `${prefix}-${uidCount}`;
}
