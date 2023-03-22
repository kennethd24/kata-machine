function qs(arr: number[], lo: number, hi: number): void {
  // base case is when lo === hi
  if (lo >= hi) {
    return
  }

  const pivotIdx = partition(arr, lo, hi);
  // recurse to new lo, hi
  // remember that it is inclusive, pivotIdx -/+ 1
  qs(arr, lo, pivotIdx - 1);
  qs(arr, pivotIdx + 1, hi);
}

function partition(arr: number[], lo: number, hi: number): number {
  // initialize random pivot, chose end for simplicity
  // start with index, 1 less than low
  // iterate from low to high index
    // if num is less than or equal to pivot
      // increment index
      // swap num with current index
  // increment index
  // assign index to high
  // assign pivot to index // this is placing the pivot so all low is left, and high is to the right

  const pivot = arr[hi];

  let idx = lo - 1;

  for (let i = lo; i < hi; i++) {
    if (arr[i] <= pivot) {
      idx++;
      const temp = arr[i];
      arr[i] = arr[idx];
      arr[idx] = temp;
    }
  }

  idx++;
  arr[hi] = arr[idx]
  arr[idx] =  pivot;

  return idx
}

export default function quick_sort(arr: number[]): void {
  // call quick sort helper function from lo to hi
  qs(arr, 0, arr.length - 1);
}