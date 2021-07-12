export default class SortTestHelper {
    public static generateRandomArray(n: number, rangeLeft: number, rangeRight: number): number[] {
        if (rangeLeft > rangeRight) {
            throw new RangeError('rangeLeft must be less than rangeRight: ' + rangeLeft + ' < ' + rangeRight + " ?" );
        }
        let result: number[] = [];
        for (let i = 0; i < n; i++) {
            let random = Math.floor(Math.random() * (rangeRight - rangeLeft + 1)) + rangeLeft
            result[i] = random;
        }
        return result;
    }

    public static printArray<T>(arr: T[]) {
        let print = '';
        for (let i = 0; i < arr.length; i++) {
            print += arr[i] + " ";
        }
        console.log(print);
    }

    public static isSorted<T>(arr: T []) {
        let sorted = true;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i+1]) {
                return false;
            }
        }
        return sorted;
    }

    public static testSort<T>(sortName: string, sortFn: Function, arr: T[]) {
        let startTime = Date.now()
        sortFn(arr);
        let endTime = Date.now()

        if (!SortTestHelper.isSorted(arr)) {
            throw new Error('Sort Function fail to sort array')
        }
        let seconds = (endTime - startTime) / 1000;
        console.log(`${sortName} 排序${arr.length}元素：消耗${seconds}s`)

    }
}