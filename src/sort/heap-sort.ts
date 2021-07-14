import { MaxHeap } from '../data-structure/max-heap';
import SortTestHelper from '../utils/sort-test-helper';
import swap from '../utils/swap';

function heapSort<T>(arr: T[]) {
    let n = arr.length;
    let heap = new MaxHeap<T>(n);
    for (let i = 0; i < n; i++) {
        heap.insert(arr[i])
    }
    
    for (let i= n -1; i >= 0; i--) {
      arr[i] = heap.extractMax();
    }
    
}

function heapSort2<T>(arr: T[]) {
    let n = arr.length;
    let maxHeap = new MaxHeap(n, arr);
    for (let i = n-1; i >= 0; i--) {
        arr[i] = maxHeap.extractMax();
    }
}

function __shiftDown<T>(arr: T[], n: number, k: number) {
    // 左孩子的索引值小于n
    // 数组索引从0开始，左孩子是2k+1, 右孩子是2k+2
    while(2 * k + 1 < n) {
        let j  = 2 * k; // 在此轮循环中，arr[k] 和 arr[j] 交换位置
        if (j+1 < n && arr[j+1] > arr[j]) { // 右孩子存在，并且右孩子 大于 左孩子，更新索引值
            j = j+1
        }
        if (arr[k] >= arr[j]) {
            break;
        }
        swap(arr, k, j);
        k = j;
    }
}
// 原地堆排序
function heapSort3<T>(arr: T[] ) {
    let n = arr.length;
    // heapify; arr 数组构建为一个堆
    // 最后一个非叶子节点的索引计算： Math.floor((count - 1 - 1) / 2)
    for (let i = Math.floor((n - 1 - 1) / 2); i >= 0; i--) {
        __shiftDown<T>(arr, n, i);
    }

    for (let i = n - 1; i > 0; i--) {
        // 把堆里的最后一个元素和第一个元素进行交换，最大值到数组末尾
        swap(arr, 0, i);
        // 对堆顶元素执行 shiftDown的操作，将堆顶交换到剩余的数组最后一个元素
        __shiftDown<T>(arr, i, 0);
    }

}

function main() {

    let n = 1000000;
    let arr1 = SortTestHelper.generateRandomArray(n, 0, n);
    let arr2 = SortTestHelper.copyNumberArray(arr1);
    let arr3 = SortTestHelper.copyNumberArray(arr1);
    SortTestHelper.testSort('堆排序', heapSort, arr1)
    SortTestHelper.testSort('堆排序2', heapSort2, arr2)
    SortTestHelper.testSort('堆排序3', heapSort3, arr3);

}

main()