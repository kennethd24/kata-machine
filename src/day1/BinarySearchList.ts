export default function bs_list(haystack: number[], needle: number): boolean {
  let low = 0;
  let high = haystack.length; // high is the limit, exclusion

  while (low < high) {
    let midpoint = Math.floor(low + (high - low) / 2); // prevents overflow


    if (haystack[midpoint] === needle) {
      return true;
    } else if (haystack[midpoint] < needle) { // guess is less than needle
      low = midpoint + 1; // low inclusion, checks second half
    } else {
      high = midpoint; // exclusion, checks first half
    }
  }

  return false;
}