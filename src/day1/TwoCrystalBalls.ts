export default function two_crystal_balls(breaks: boolean[]): number {
  let jumpAmount = Math.floor(Math.sqrt(breaks.length));

  let i = jumpAmount;
  for (; i < breaks.length; i+= jumpAmount) {
    console.log('initial i steps: ', i)
    if (breaks[i]) {
      console.log('i where it breaks', i)
      break;
    }
  }

  i -= jumpAmount;
  console.log(jumpAmount)
  // i is increasing index by 1 before the end of breaks
  // j is making sure we dont go above the jumpAmount
  for (let j = 0; j <= jumpAmount && i < breaks.length; j++, i++) {
    console.log('j/i', j, i)
    if (breaks[i]) {
      return i;
    }
  }

  return -1;
}