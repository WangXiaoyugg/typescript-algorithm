import swap from '../utils/swap';
export class IndexMaxHeap<T> {
    private count: number;
    private data: T[];
    private indexes: number[];

    constructor(capacity: number);
    constructor(capacity: number, arr?:T[]) {
        this.data = new Array(capacity + 1);
        this.indexes = new Array(capacity + 1);
        this.count = 0;
        
    }

    size() {
        return this.count
    }

    isEmpty() {
        return this.count === 0;
    }

    insert(i: number, item:T) {
        // 用户的传入的索引是0开始的，内部是从1开始的
        i+=1;
        // this.data 存储的值
        this.data[i] = item;
        // this.indexes 值对应的索引
        this.indexes[this.count + 1] = i;
        this.count++;
        this.shiftUp(this.count)
    }

    private shiftUp (k: number) {
        while(k > 1 && this.data[this.indexes[Math.floor(k / 2)]] < this.data[this.indexes[k]]) {
            swap(this.indexes, Math.floor(k/2), k);
            k = Math.floor(k / 2);
        } 
    }

    private shiftDown(k: number) {
        // 左孩子的索引值小于this.count
        while(2* k <= this.count) {
            let j  = 2 * k; // 在此轮循环中，this.data[k] 和 this.data[j] 交换位置
            if (j+1 <= this.count && this.data[this.indexes[j+1]] > this.data[this.indexes[j]]) { // 右孩子存在，并且右孩子 大于 左孩子，更新索引值
                j = j+1
            }
            if (this.data[this.indexes[k]]>= this.data[this.indexes[j]]) {
                break;
            }
            swap(this.indexes, k, j);
            k = j;
        }
    }

    print() {
        console.log(this.data);
    }

    extractMax():T {
        // 获取堆顶元素
        let ret = this.data[this.indexes[1] ];
        swap(this.indexes, 1, this.count);
        this.count--;
        this.shiftDown(1);
        return ret;
    }

    extractMaxIndex(): number {
        // 获取堆顶的索引
        let ret = this.indexes[1] - 1;
        swap(this.indexes, 1, this.count);
        this.count--;
        this.shiftDown(1);
        return ret;
    }


    getItem(i:number): T {
        // 堆根据索引返回指定的元素
        return this.data[i+1];
    }

    //change的 时间复杂度是O(n)级别，总的复杂度是O(n2)的级别
    change(i: number, newItem: T): void {
        // 外部从零开始，内部改为从1开始
        i += 1;
        this.data[i] = newItem;

        // 找到indexs[j] = i, j 表示data[i] 在堆中的位置，然后shiftDown, shiftUp, 维护索引数组
        for (let j = 1; i <= this.count; j++) {
            if (this.indexes[j] === i) {
                this.shiftUp(j);
                this.shiftDown(j);
                return;
            }
        }
    }

}