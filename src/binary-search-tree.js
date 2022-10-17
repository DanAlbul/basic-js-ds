const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class BinarySearchTree {
	constructor() {
		this.rootNode = null;
	}

	root() {
		return this.rootNode;
	}

	add(data) {
		const newNode = new Node(data);

		if (this.rootNode === null) {
			this.rootNode = newNode;
		} else {
			this.insertNode(this.rootNode, newNode);
		}
	}

	insertNode(parentNode = this.rootNode, newNode) {
		if (newNode.data < parentNode.data) {
			if (parentNode.left === null) parentNode.left = newNode;
			else {
				this.insertNode(parentNode.left, newNode);
			}
		} else {
			if (parentNode.right === null) parentNode.right = newNode;
			else {
				this.insertNode(parentNode.right, newNode);
			}
		}
	}

	has(data) {
		const node = this.find(data);
		return !!node ? true : false;
	}

	find(data) {
		if (!this.rootNode) return null;

		let currentNode = this.rootNode;
		let targetNode = false;

		while (currentNode && !targetNode) {
			if (data < currentNode.data) {
				currentNode = currentNode.left;
			} else if (data > currentNode.data) {
				currentNode = currentNode.right;
			} else {
				targetNode = currentNode;
			}
		}
		return !targetNode ? null : targetNode;
	}

	remove(data) {
		this.rootNode = this.removeNode(this.rootNode, data);
	}

	removeNode(currentNode, data) {
		// if Tree is empty - do nothing
		if (currentNode === null) return currentNode;

		// if currentNode is the node to remove - remove this Node by restructuring a Tree
		if (data === currentNode.data) {
			// if currentNode is a leaf - mark it as null
			if (currentNode.left === null && currentNode.right === null) {
				return null;

				// if currentNode has only right child -
			} else if (currentNode.left === null) {
				return currentNode.right;

				// if currentNode has only right child -
			} else if (currentNode.right === null) {
				return currentNode.left;

				// if currentNode has two children - get the smallest successor in the right subtree and mark it as newRoot
			} else {
				let smallestRightNode = this.min(currentNode.right);
				currentNode.data = smallestRightNode;
				// delete the successor
				currentNode.right = this.removeNode(currentNode.right, smallestRightNode);
				return currentNode;
			}

			// compare the currentNode's data with the data and recur until the Node to be removed is not found
		} else if (data < currentNode.data) {
			currentNode.left = this.removeNode(currentNode.left, data);
			return currentNode;
		} else {
			currentNode.right = this.removeNode(currentNode.right, data);
			return currentNode;
		}
	}

	min(node = this.rootNode) {
		while (node.left !== null) node = node.left;
		return node.data;
	}

	max(node = this.rootNode) {
		while (node.right !== null) node = node.right;
		return node.data;
	}
}

module.exports = {
	BinarySearchTree
};
