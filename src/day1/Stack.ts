type Node<T> = {
    value: T,
    prev?: Node<T>,
}
export default class Stack<T> {
    public length: number;
    private head?: Node<T>; // ? because it can be undefined



    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        const node = {value: item} as Node<T>;

        this.length++;
        if (!this.head) {
            this.head = node;
            return;
        }

        node.prev = this.head;
        this.head = node;
}
    pop(): T | undefined {
        this.length = Math.max(0, this.length - 1); // cant go negative in length
        if (this.length === 0) {
            const head = this.head; // FEM did it this way
            // const head = this.head as Node<T>;
            this.head = undefined;
            return head?.value;
        }

        const head = this.head as Node<T>;
        this.head = head.prev;

        return head.value;
}
    peek(): T | undefined {
        return this.head?.value;

}
}