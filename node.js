class Node {
	constructor(key, value, next=null, prev=null) {
		this.key = key;
		this.value = value;
		this.next = next;
		this.prev = prev;
	}
}

export {Node as default}