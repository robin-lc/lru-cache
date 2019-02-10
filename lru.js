import Node from './node';

class LRU {

	constructor() {
		this.head = null;
		this.tail = null;
		this.cache = {};
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
		this.cache[key] = this.head;
	}

	get(key) {
		
		if(this.cache[key] !== undefined) {

			const value = this.cache[key].value;

			//suite à l'accès, on remonte le noeud en haut de la chaine en le supprimant puis re-créant
			this.del(key);
			this.set(key, value);

			return value;
		}
		return false;
	}

	has(key) {
		return (this.cache[key] !== undefined) ? true : false;
	}

	del(key) {

		let nodeToDelete = this.cache[key];

		if(nodeToDelete.next !== null) //si le noeud à supprimer n'est pas en haut de la chaine
			nodeToDelete.next.prev = nodeToDelete.prev; //on modifie le prev du suivant par le prev du noeud à supprimer
		else
			this.head = nodeToDelete.prev; //si le noeud est en haut de la chaine, on modifie juste notre head par le prev du noeud à supprimer

		if(nodeToDelete.prev !== null) //si le noeud à supprimer n'est pas en bas de la chaine
			nodeToDelete.prev.next = nodeToDelete.next; //on modifie le next du précédent par le next du noeud à supprimer
		else
			this.tail = nodeToDelete.next; //si le noeud est en bas de la chaine, on modifie juste notre tail par le next du noeud à supprimer
		
		delete(this.cache[key]);
	}
}

export {LRU as default}