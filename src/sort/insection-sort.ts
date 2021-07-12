import swap from "../utils/swap";
import SortTestHelper from "../utils/sort-test-helper";
import { selectionSort } from './selection-sort';


export function insectionSort<T>(arr: T[]) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0 && arr[j] < arr[j - 1] ; j--) {
            swap(arr, j, j-1);
        }
    }
}


function main() {
    let n = 100000;
    let arr = SortTestHelper.generateRandomArray(n, 0, n);
    let copyArr = SortTestHelper.copyNumberArray(arr);
   
    SortTestHelper.testSort('选择排序', selectionSort, arr)
    SortTestHelper.testSort('插入排序', insectionSort, copyArr)
}

main()