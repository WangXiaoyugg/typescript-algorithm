import SortTestHelper from '../utils/sort-test-helper';

// 选择排序，每次扫描找到最小的元素索引，并和当前元素进行交换
interface ICompareFn<T> {
    (a: T, b: T): boolean;
}

function selectionSort<T>(arr: T[], compareFn?: ICompareFn<T>) {
    // 对数组中的元素进行排序
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        // 每次对[i, arr.length) 中找到最小值的索引
        for (let j = i+1; j < arr.length; j++) {
            if (less<T>(arr[j], arr[minIndex], compareFn)) {
                minIndex = j;
            }
        }
        swap<T>(arr, i, minIndex);
    }
    
}

let arr = [10, 9, 8, 7, 6, 5, 4, 3,2,1]

selectionSort<number>(arr)
console.log(arr);

let arr1 = ["D", 'C', 'B', 'A']
selectionSort<string>(arr1)
console.log(arr1)

interface IStudent {
    name: string;
    score: number;
}


let arr2: IStudent[] = [ {name: 'D', score: 100} , {name: 'A', score: 95 }, {name: 'B', score: 95} , {name: 'C', score: 90} ]
selectionSort<IStudent>(arr2, (a, b) => a.score !== b.score ? a.score < b.score : a.name < b.name);
console.log(arr2);

function swap<T>(arr: T[], i:number, j: number): void {
    let temp = arr[j]
    arr[j] = arr[i]
    arr[i] = temp;
}

function less<T>(a: T, b: T, compareFn?: ICompareFn<T>): boolean {
    if (compareFn) {
        return compareFn(a, b);
    } else {
        return a < b;
    }
}

function main() {
    let n = 100000;
    let arr = SortTestHelper.generateRandomArray(n, 0, n);
    SortTestHelper.testSort('选择排序 ', selectionSort, arr);
}

main();