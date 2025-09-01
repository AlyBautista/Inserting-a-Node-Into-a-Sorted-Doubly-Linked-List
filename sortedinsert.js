function sortedInsert(llist, data) {
    let newNode = new DoublyLinkedListNode(data);

    if (llist === null) {
        return newNode;
    }

    if (data < llist.data) {
        newNode.next = llist;
        llist.prev = newNode;
        return newNode; 
    }

    let current = llist;
    while (current.next !== null && current.next.data < data) {
        current = current.next;
    }

    newNode.next = current.next;
    if (current.next !== null) {
        current.next.prev = newNode;
    }
    current.next = newNode;
    newNode.prev = current;

    return llist; 
}
