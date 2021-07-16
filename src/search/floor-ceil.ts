// 二分查找，在有序数组中，查找target
// 如果找到target, 返回第一个target相应的索引index;
// 如果没有找到target, 返回比target小的最大值索引，如果最大值相同有多个，返回最大索引
// 如果这个target比整个数组的最小元素还要小，则不存在这个target的floor值，返回-1

// [left, right]
// [1,2,3,4,5]; l=2, r=2, target = 3;
// [left, right); // right 会越界, [1,2,3,4,5] 寻找2，right = [0,2] => [0,1];

// [1,2,3,4,5] 寻找2
// l = 0, r = 5, mid = 2 => arr[mid] > target, r = 2, r = 1
// l = 0, r = 2, mid = 1 => arr[mid] == target,  return 1;
// l = 1，r = 1, l < r false

function floor<T>(arr: T[], target: T) {
    // 寻找比target小的最大索引；[l...r] => [-1, arr.length-1];
    // l = -1, 是因为如果这个target比整个数组的最小元素还要小，则不存在这个target的floor值，返回-1
    // r
    let l = -1, r = arr.length - 1;
    
    // 当l == r 时，l 或者 r 就是解了，
    while(l < r) {
        // 向上取整避免死循环
        let mid = Math.floor(l + (r - l + 1) / 2);
        if (arr[mid] >= target) {
            r = mid - 1;
        } else {
            l = mid;
        }
    }


    // 如果索引 + 1 的值为target， 该索引即为返回值
    if (l + 1 < arr.length && arr[l + 1] === target) {
        return l + 1;
    }

    // 否则该索引即为返回值
    return l;
}


// 二分查找法, 在有序数组arr中, 查找target
// 如果找到target, 返回最后一个target相应的索引index
// 如果没有找到target, 返回比target大的最小值相应的索引, 如果这个最小值有多个, 返回最小的索引
// 如果这个target比整个数组的最大元素值还要大, 则不存在这个target的ceil值, 返回整个数组元素个数n

function ceil<T>(arr: T[], target: T) {
    // 寻找比target小的最大索引；[0...r);
    let l = 0, r = arr.length;
    while(l < r) {
        // 向下取整避免死循环
        let mid = Math.floor(l + (r - l) / 2);
        console.log("l < r :", l, r, mid, arr[mid]);
        if (arr[mid] <= target) {
            l = mid + 1
        } else {
            r = mid;
        }
    }

    console.log('--->:', l, r);

    // 如果索引 r - 1 的值为target， 该索引即为返回值
    // [l...r)
    if (r - 1 >= 0 && arr[r - 1] === target) {
        return r - 1;
    }

    // 否则该索引即为返回值
    return r;
}

function main() {
    let arr = [1,2,2,4,4,5];
    // target 比最大值还要大，则不存在target的ceil值，返回整个数组的元素个人n;
    // console.log(ceil(arr, 5));
    // 如果找到target, 返回最后一个target相应的索引index
    console.log(ceil(arr, 4));
    console.log(ceil(arr, 3));
}

main();