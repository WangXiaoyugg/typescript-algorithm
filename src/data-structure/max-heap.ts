import swap from '../utils/swap';
export class MaxHeap<T> {
    private count: number;
    private data: T[];
    constructor(capacity: number) {
        this.data = new Array(capacity + 1);
        this.count = 0;
    }

    size() {
        return this.count
    }

    isEmpty() {
        return this.count === 0;
    }

    insert(item:T) {
        this.data[this.count + 1] = item;
        this.count++;
        this.shiftUp(this.count)
    }

    private shiftUp (k: number) {
        while(k > 1 && this.data[Math.floor(k / 2)] < this.data[k]) {
            swap(this.data, Math.floor(k/2), k);
            k = Math.floor(k / 2);
        } 
    }

    private shiftDown(k: number) {
        // 左孩子的索引值小于this.count
        while(2* k <= this.count) {
            let j  = 2 * k; // 在此轮循环中，this.data[k] 和 this.data[j] 交换位置
            if (j+1 <= this.count && this.data[j+1] > this.data[j]) { // 右孩子存在，并且右孩子 大于 左孩子，更新索引值
                j = j+1
            }
            if (this.data[k] >= this.data[j]) {
                break;
            }
            swap(this.data, k, j);
            k = j;
        }
    }

    print() {
        console.log(this.data);
    }

    extractMax():T {
        let ret = this.data[1];
        swap(this.data, 1, this.count);
        this.count--;
        this.shiftDown(1);
        return ret;
    }

}

function main() {
    let maxHeap = new MaxHeap<number>(10);
    console.log(maxHeap.size());
    for (let i = 0; i < 8; i++) {
        let rand = (Math.random() * 100) >> 0
        maxHeap.insert(rand)
    }
    console.log(maxHeap.print())

    while(!maxHeap.isEmpty()) {
        console.log(maxHeap.extractMax());
    } 
}


main() 