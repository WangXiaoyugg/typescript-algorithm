import swap from '../utils/swap'
import SortTestHelper from '../utils/sort-test-helper';
import { insectionSort } from './insection-sort';
import { selectionSort } from './selection-sort';

/**
 * 比较相邻的元素，前一个比后一个，则交换位置
 * 比较第一轮的时候，最后一个元素是最大的元素
 * 这时候最后一个元素是最大的，所以最后一个元素就不需要参与比较大小
 * @param arr 
 */
function bubbleSort<T>(arr: T[]) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j+1]) {
        swap(arr, j, j+1)
      }
    }
  }
}

function main() {
  let n = 10000;
  let arr = SortTestHelper.generateRandomArray(n, 0, n);
  let copyArr = SortTestHelper.copyNumberArray(arr);
  let copyArr1 = SortTestHelper.copyNumberArray(arr);
  SortTestHelper.testSort("冒泡排序", bubbleSort, arr);
  SortTestHelper.testSort("插入排序", insectionSort, copyArr);
  SortTestHelper.testSort("选择排序", selectionSort, copyArr1);
}

main();