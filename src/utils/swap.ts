export default function swap<T>(arr: T[], i:number, j: number): void {
    let temp = arr[j]
    arr[j] = arr[i]
    arr[i] = temp;
}