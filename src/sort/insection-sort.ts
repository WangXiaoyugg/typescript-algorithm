import SortTestHelper from "../utils/sort-test-helper";
import { selectionSort } from './selection-sort';


export function insectionSort<T>(arr: T[]) {
    for (let i = 1; i < arr.length; i++) {
        let e = arr[i];
        let j:number;
        for (j = i; j > 0 && arr[j - 1] > e ; j--) {
            arr[j] = arr[j-1]
        }
        arr[j] = e;
    }
}


function main() {
    let n = 100000;
    let arr = SortTestHelper.generateNearlyOrderArray(n, 10);
    let copyArr = SortTestHelper.copyNumberArray(arr);
   
    SortTestHelper.testSort('插入排序', insectionSort, copyArr)
    SortTestHelper.testSort('选择排序', selectionSort, arr)
   
}

// main()