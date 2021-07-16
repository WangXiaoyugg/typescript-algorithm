import SortTestHelper from '../utils/sort-test-helper';
// 二分查找, 迭代，递归, 复杂度O(logn);
// 实现floor, ceil
// 在有序数组中查找target, 返回响应的索引index;
// 没有找到target, 返回-1;
function binarySearch<T>(arr: T[], target: T): number {
    let l = 0, r = arr.length - 1;
    while(l <= r) {
        let mid = Math.floor(l + (r - l) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] > target) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }

    return -1;
}

function binarySearchRecursion<T>(arr: T[], target: T): number {
    
    return __binarySearch(arr, 0, arr.length -1, target);

    function __binarySearch<T>(arr: T[], l: number, r: number, target: T):number {
        if (l > r) return -1;
        let mid = Math.floor(l + (r - l) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] > target) return __binarySearch(arr, l, mid - 1, target);
        else return __binarySearch(arr, mid+1, r, target);
    }
}

function main() {
    let arr1 = SortTestHelper.generateNearlyOrderArray(10, 0);
    console.log(binarySearch(arr1,  6));
    console.log(binarySearch(arr1,  11));
    console.log(arr1)
    console.log(binarySearchRecursion(arr1, 6))
    console.log(binarySearchRecursion(arr1, 11))
}

main();