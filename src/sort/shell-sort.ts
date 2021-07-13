/**
 * 希尔排序
 * 它是直接插入排序算法的一种更高效的改进版本
 
 希尔排序在排序前：将一个序列分成了好几个序列
 在第一趟排序时：将这几个序列做插入排序。排序后，部分较大的数字往后靠，部分较小的数字往前靠
 在第二趟排序时：将这个序列又分了好几个序列做插入排序(但比第一次分的数要少,ps:如果第一次分5个，第二次可能就2个了)。排序后，部分较大的数字往后靠，部分较小的数字往前靠
 在第n趟排序时：将这个序列又分了好几个序列(直到剩下一个序列)，从宏观上看，此序列就基本是有序的了。这时就用简单插入排序将数列直至已序

 直观上看
 就是把数列进行分组(不停使用插入排序)，直至从宏观上看起来有序，最后插入排序起来就容易了(无须多次移位或交换)。
 
 从专业的角度上讲，将一个序列分成好几个序列，用一个数来表示：那个数称为增量。显然的是，增量是不断递减的(直到增量为1)
 很明显我们可以用一个序列来表示增量：{n/2,(n/2)/2...1}，每次增量都/2
 */

import SortTestHelper from '../utils/sort-test-helper';
import swap from '../utils/swap'
import { bubbleSort } from './bubble-sort';
import { insertSort } from './insection-sort';
import { selectionSort } from './selection-sort';

function shellSort<T>(arr: T[]) {
  if (arr == null || arr.length <= 1) return arr;
  // 增量每次都是 n / 2;
  let len = arr.length;
  let j:number;
  for (let step = Math.floor(len / 2); step > 0 ; step = Math.floor(step / 2)) {
    // 从增量那组开始进行插入排序，直至完毕
    for (let i = step; i < len; i++) {
      //i:代表即将插入的元素角标，作为每一组比较数据的最后一个元素角标 
      //j:代表与i同一组的数组元素角标
      let el = arr[i];
    
      for (j = i; j >= step && el < arr[j - step]; j -= step) { //在此处-step为了避免下面数组角标越界
        arr[j] = arr[j - step]
      }
      arr[j] = el;
    }
  }
}

function main() {
  let n = 10000 * 2;
  let arr = SortTestHelper.generateRandomArray(n, 0, n);
  let copyArr = SortTestHelper.copyNumberArray(arr);
  let copyArr1 = SortTestHelper.copyNumberArray(arr);
  let copyArr2 = SortTestHelper.copyNumberArray(arr);
  SortTestHelper.testSort("冒泡排序", bubbleSort, arr);
  SortTestHelper.testSort("插入排序", insertSort, copyArr);
  SortTestHelper.testSort("选择排序", selectionSort, copyArr1);
  SortTestHelper.testSort("希尔排序", shellSort, copyArr2);

}

main();