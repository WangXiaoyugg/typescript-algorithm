// 选择排序，每次扫描找到最小的元素索引，并和当前元素进行交换
function selectionSort(arr: number[]) {
    // 对数组中的元素进行排序
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        // 每次对[i, arr.length) 中找到最小值的索引
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        swap<number>(arr, i, minIndex);
    }
    
}

let arr = [10, 9, 8, 7, 6, 5, 4, 3,2,1]

selectionSort(arr)
console.log(arr);


function swap<T>(arr: T[], i:number, j: number) {
    let temp = arr[j]
    arr[j] = arr[i]
    arr[i] = temp;
}