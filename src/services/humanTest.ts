
export function getRandomNumber (): number {
  return Math.floor(Math.random()*10)
}

export function verifyAddNumbers (a: number, b: number, r: number): boolean {
  const result = ( r == a + b) ? true : false;
  return result;
}
