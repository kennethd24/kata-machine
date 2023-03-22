export default function bubble_sort(arr: number[]): void {
// iterate through array
// iterate until all index have been sorted
  // check if current index is less than next index
    // swap if true
  for (let i = 0; i < arr.length; i++) {
    // last index is only one guaranteed to be sorted
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp
      }
    }
  }
}