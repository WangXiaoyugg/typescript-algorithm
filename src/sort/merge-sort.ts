import SortTestHelper from '../utils/sort-test-helper';
import { insertSort } from './insection-sort';

function mergeSort<T>(arr: T[]) {
    let n = arr.length;
    // 对[l...r] 的范围的数组进行递归
    __mergeSort(arr, 0, n -1);
}

function __mergeSort<T>(arr: T[], l: number, r: number) {
    // 递归终止条件
    if (r -l <= 15) {
        // 小于某个阈值，采用插入排序
        insertSort(arr, l, r);
        return;
    }
    let mid = Math.floor(l + (r - l ) / 2)
    // 左半部分：[l, mid]， 右半部分： [mid+1, r];
    __mergeSort(arr, l, mid);
    __mergeSort(arr, mid+1, r);

    if (arr[mid] > arr[mid + 1]) {
        // 左右分组进行归并
        __merge(arr, l, mid, r);
    }
 
}


// 将 [l, mid] 和 [mid +1, r] 进行归并
function __merge<T> (arr: T[], l: number, mid: number, r: number) {
    // 辅助数组，复制原数组到辅助数组
    let aux: T[] = [];
    for (let i = l; i <= r; i++) {
        aux[i - l] = arr[i];
    }

    let i = l, j = mid + 1; 
    for (let k = l; k <= r; k++) {
        // 判断指针是否越界
        if (i > mid) {
            // 左半部分排序完毕, 复制右半部分
            arr[k] = aux[j - l];
            j++
        } else if (j > r) {
            // 右半部分排序完毕, 复制左半部分
            arr[k] = aux[i - l];
            i++;
        }
        // 非越界情况下比较
        else if (aux[i - l] < aux[j - l]) {
            arr[k] = aux[i - l];
            i++;
        } else {
            arr[k] = aux[j - l];
            j++;
        }
    }

}

// 自下而上的归并排序
function mergeSortFromBottom<T>(arr: T[]) {
    let n = arr.length;

    // 对于小数组，使用插入排序优化
    for (let i = 0; i < n; i+= 16) {
        insertSort(arr, i, Math.min(i + 15, n -1)); // [0, 15], [16, 31]
    }

    for (let sz = 16; sz <= n; sz += sz) {
        for (let i = 0; i + sz < n; i += sz + sz ) {
            // 对 arr[i... i + size - 1] 和 arr[i+size, i+ 2 *sz - 1]进行归并
            if (arr[i + sz- 1] > arr[i + sz]) {
                __merge(arr, i, i + sz - 1, Math.min(i + sz + sz - 1, n - 1));
            }
        }
    }
}


function main() {
    let n = 50000;
    let arr1 = SortTestHelper.generateNearlyOrderArray(n, 100);
    let arr2 = SortTestHelper.copyNumberArray(arr1);
    let arr3 = SortTestHelper.copyNumberArray(arr1);

    SortTestHelper.testSort('插入排序', insertSort, arr1);
    SortTestHelper.testSort('归并排序', mergeSort, arr2);
    SortTestHelper.testSort('归并排序自第向上', mergeSortFromBottom, arr3);
}

main();