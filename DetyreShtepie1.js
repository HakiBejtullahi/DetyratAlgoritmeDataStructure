// Detyra 1
//Krijoni klasen e cila do te permbaj binary tree dhe metodat e
// binary tree por per tipin e te dhenave string?

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  insertRoot(data) {
    const newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(root, newNode) {
    //checks if value of the newNode is less then the roots value in order to place on left side
    if (newNode.value < root.value) {
      // checks if roots/nodes left side is empty
      // else it call same function on
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }
  inOrderTraverse(root, callback) {
    if (root !== null) {
      this.inOrderTraverse(root.left, callback);
      callback(root.value);
      this.inOrderTraverse(root.right, callback);
    }
  }
}

const binaryTree = new BinaryTree();
binaryTree.insertRoot('B');
binaryTree.insertRoot('D');
binaryTree.insertRoot('F');
binaryTree.insertRoot('A');
binaryTree.insertRoot('C');
binaryTree.insertRoot('E');
binaryTree.insertRoot('G');

const result = [];

binaryTree.inOrderTraverse(binaryTree.root, (data) => result.push(data));
console.log(result);
