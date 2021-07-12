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
}