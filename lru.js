import Node from './node';

class LRU {

	constructor() {
		this.head = null;
		this.tail = null;
	}

	set(key, value) {

		if(this.head == null) {
			const node = new Node(key, value);
			this.head = node;
			this.tail = node;
		}
		else {
			const node = new Node(key, value, null, this.head);
			this.head.next = node;
			this.head = node;
		}
	}

	get(key) {
	}

	has(key) {
	}
}

export {LRU as default}