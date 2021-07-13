import SortTestHelper from "../utils/sort-test-helper";
import { selectionSort } from './selection-sort';

export function insertSort<T>(arr: T[]):void;
export function insertSort<T>(arr: T[], l: number, r: number):void;
export function insertSort<T>(arr: T[], l?: number, r?: number):void {
    if (l && r) {
        insectionSortTwo(arr, l, r);
    } else {
        insertSortOne(arr);
    }
}

export function insertSortOne<T>(arr: T[]) {
    for (let i = 1; i < arr.length; i++) {
        let e = arr[i];
        let j:number;
        for (j = i; j > 0 && arr[j - 1] > e ; j--) {
            arr[j] = arr[j-1]
        }
        arr[j] = e;
    }
}

export function insectionSortTwo<T>(arr: T[], l: number, r: number) {
    for (let i = l + 1; i <= r; i++) {
        let e = arr[i];
        let j: number;
        for (j = i; j > l && arr[j - 1] > e; j--) {
            arr[j] = arr[j-1] 
        } 
        arr[j] = e;
    }
}


function main() {
    let n = 100000;
    let arr = SortTestHelper.generateNearlyOrderArray(n, 10);
    let copyArr = SortTestHelper.copyNumberArray(arr);
   
    SortTestHelper.testSort('插入排序', insertSort, copyArr)
    SortTestHelper.testSort('选择排序', selectionSort, arr)
   
}

// main()