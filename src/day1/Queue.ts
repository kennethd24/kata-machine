type Node<T> = {
    value: T,
    next?: Node<T>,
}
export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        // increment lengthnp
        // if tail is undefined
            // tail and head is new node
        // assign next of tail to new node
        // assign tail to new node
        const node = {value: item} as Node<T>;
        this.length++;
        if (!this.tail) {
            this.tail = this.head = node;
            return;
        }

        this.tail.next = node;
        this.tail = node;
}
    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        this.length--;

        const head = this.head;
        this.head = this.head.next

        // bookeeping/optional
        head.next = undefined;

        return head.value;
}
    peek(): T | undefined {
        return this.head?.value;
}
}