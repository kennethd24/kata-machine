export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    // initialize queue
    // unshift queue
    // while length of queue exists
    // check if needle matches value with shift from queue
    // return true
    // if left and right children exist
    // add to list of queue
    // return false when nothing is found

    const q: (BinaryNode<number> | null)[] = [head];

    while (q.length) {
        // shift removes the first element of the array
        const curr = q.shift() as BinaryNode<number> | undefined | null;
        if (!curr) {
            continue;
        }

        // search
        if (curr.value === needle) {
            return true;
        }
        q.push(curr.left);
        q.push(curr.right);
    }

    return false;
}
