// [value, next] -> [value, next]

class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}
class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    append(data) {
        const node = new Node(data)

        if(this.tail) {
            this.tail.next = node
        }

        if(!this.head) {
            this.head = node
        }

        this.tail = node
    }



    prepend(data) {
        const node = new Node(data, this.head)
        this.head = node

        if(!this.tail) {
            this.tail = node
        }
    }

    toArray() {
        let output = []
        let current = this.head

        while (current) {
            output.push(current)
            current = current.next
        }

        return output
    }

    find(data) {
        if(!this.head) {
            throw new Error('This head is empty')
        }

        let current = this.head
        while (current) {
            if(current.data === data){
                return current
            }

            current = current.next
        }
    }

    insertAfter(node, data) {
        if(!this.head) {
            throw new Error('list empty')
        }
        let find = this.find(node)
        find.next = new Node(data, find.next)

        // return this
    }

    remove(data) {
        if(!this.head) {
            throw new Error('list empty')
        }

        const node = this.find(data)
        let current = this.head

        while (current) {
            if(current.next === node){
                current.next = node.next
                return
            }

            current = current.next
        }
    }
}

const list = new LinkedList()
list.append('head')
list.append('tail')
list.append('after_tail')

list.prepend('before_header')
list.prepend('_x2_before_header')
list.remove('after_tail')

// console.log(list.insertAfter('head', 'nt'))
// console.log(list.remove('head'))
// console.log(list.remove('after_tail'))
console.log(list.toArray())