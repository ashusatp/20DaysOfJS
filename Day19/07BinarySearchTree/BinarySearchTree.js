class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // [+]insert(data)
  insert(data) {
    const newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(rootNode, newNode) {
    if (rootNode.data > newNode.data) {
      if (rootNode.left === null) {
        rootNode.left = newNode;
      } else {
        this.insertNode(rootNode.left, newNode);
      }
    } else {
      if (rootNode.right === null) {
        rootNode.right = newNode;
      } else {
        this.insertNode(rootNode.right, newNode);
      }
    }
  }

  // [+]remove(data)
  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  removeNode(node, data) {
    if (node == null) {
      return null;
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      //[+] deleting Node

      // with no children
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      // with one child
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
      // with two children
      var min = this.findMinNode(node.right);
      node.data = min.data;
      node.right = this.removeNode(node.right, min.data);
      return node;
    }
  }

  // [+]findMinNode()
  findMinNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }

  // [+]getRootNode()
  getRootNode(){
    return this.root;
  }

  // [ ] ############ Tree Traversal ###########

  // [+]inorder(node)
  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }
  // [+]preorder(node)
  preorder(node) {
    if (node) {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }
  // [+]postorder(node)
  postorder(node) {
    if (node) {
      this.preorder(node.left);
      console.log(node.data);
      this.preorder(node.right);
    }
  }

  // [+]search(node, data)
  search(node,data){
        if(node === null){
            return null;
        }else if(node.data > data){
            return this.search(node.left,data);
        }else if(node.data < data){
            return this.search(node.right,data);
        }else{
            return node;
        }
  }
}

const tree = new BinarySearchTree();
tree.insert(22);
tree.insert(2);
tree.insert(12);
tree.insert(9);
tree.insert(3);
const rootNode = tree.getRootNode();
tree.postorder(rootNode);
// console.log(tree.search(rootNode,99));
console.log(tree.findMinNode(rootNode).data);

tree.remove(12);
console.log("After deletion");
tree.postorder(rootNode);

// tree.postorder(tree.root);
