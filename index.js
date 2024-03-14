// Barebones example
const n1 ={
    data: 100
}

const n2 ={
    data: 200
}

n1.next = n2;

//console.log(n1)

class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

const new1 = new Node(100);
console.log(new1)

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;

    }
    //insert first node
    insertFirst(data){
        this.head = new Node(data, this.head);
    }

    //insert last node

    ///insert at index

    //get at index
    //remove at index
    //clear list
}

// actual practice
const seventh = {
    value: 7,
    next: null,
  }
  const sixth = {
    value: 5,
    next: seventh,
  }
  const fifth = {
    value: 5,
    next: sixth,
  }
  const fourth = {
    value: 4,
    next: fifth,
  }
  const third = {
    value: 3,
    next: fourth,
  }
  const second = {
    value: 1,
    next: third,
  }
  const first = {
    value: 1,
    next: second,
  }
 const head = first;
console.log(head)
