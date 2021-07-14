import swap from '../utils/swap';
import SortTestHelper from '../utils/sort-test-helper';
import { mergeSort } from './merge-sort';
import { insertSort } from './insection-sort';


export function quickSort<T>(arr: T[]) {
    let n = arr.length;
    // 对[l, r]之间的元素进行排序
    // __quickSort(arr, 0, n - 1)
    __quickSort3Ways(arr, 0, n - 1);
}

// 三路快速排序
function __quickSort3Ways<T>(arr: T[], l: number, r: number) {
    if (r - l <= 15) {
        insertSort(arr, l, r);
        return;
    }

    // partition 分组操作，<v, =v, >v;
    let rand = Math.floor(Math.random() * (r - l + 1)) + l;
    swap(arr, l, rand);
    let v = arr[l];
    
    // arr[l+1...lt] < v;
    let lt = l;
    // arr[gt... r] > v;
    let gt = r + 1;
    // arr[lt + 1...i) == v;
    let i = l + 1;
    
    while(i < gt) {
        if (arr[i] < v) {
            swap(arr, i, lt+1);
            lt++;
            i++;
        } else if (arr[i] > v){
            swap(arr,i, gt - 1);
            gt--;
        }
        else {
            i++;
        }
    }

    swap(arr, l, lt);
    __quickSort3Ways(arr, l, lt - 1);
    __quickSort3Ways(arr, gt, r);
}


// 对arr[l..r] 使用递归实现快速排序
function __quickSort<T>(arr: T[], l: number, r: number) {
    if (r - l <= 15) {
        insertSort(arr, l, r);
        return;
    }

    let p = __partition(arr, l, r);
    __quickSort(arr, l, p - 1);
    __quickSort(arr, p+1, r);
}




// 对 arr[l...r] 部分进行partition操作
// 返回p, 使得arr[l...p-1] < arr[p], arr[p+1....r] > arr[p]
function __partition<T>(arr: T[], l: number, r: number): number {
    // arr在 [l...r] 之间的随机索引
    // let rand = Math.floor(Math.random() * (r - l + 1)) + l;
    // swap(arr, l, rand);
    // let v = arr[l];
    // // arr[l + 1... i] < v ; arr[j+1...i) > v;
    // let j = l;
    // for (let i = l + 1; i <= r; i++) {
    //     if (arr[i] < v) {
    //         swap(arr, j+1, i)
    //         j++;
    //     }
    // }
    // swap(arr, l, j);
    // return j;

    // 双路快速排序
    let rand = Math.floor(Math.random() * (r - l + 1)) + l;
    swap(arr, l, rand);
    let v = arr[l];
    // 对 arr[l+1...i] <= v; arr(j....r] >=v 
    let i = l+1, j = r;
    while(true) {
        while(arr[i] < v  && i <=r) i++;
        while(arr[j] > v && j >= l+1) j--;
        if (i > j) break;
        swap(arr, i, j);
        i++;
        j--;
    }
    swap(arr, l, j);
    return j;

}

function main() {
    let n = 100000;
    let arr1 = SortTestHelper.generateRandomArray(n, 0, 10);
    let arr2 = SortTestHelper.copyNumberArray(arr1);

    SortTestHelper.testSort('快速排序', quickSort, arr2);
    // SortTestHelper.testSort('归并排序', mergeSort, arr1);
}

main()