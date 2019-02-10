import LRU from '../lru';

test('set()', () => {

	const lru = new LRU();

	lru.set("A", "a");
	expect(lru.head.value).toBe('a');
	expect(lru.tail.value).toBe('a');

	lru.set("B", "b");
	expect(lru.head.value).toBe('b');
	expect(lru.tail.value).toBe('a');

	lru.set("C", "c");
	expect(lru.head.value).toBe('c');
	expect(lru.tail.value).toBe('a');
});

test('get()', () => {

	const lru = new LRU();

	lru.set("A", "a");
	lru.set("B", "b");
	lru.set("C", "c"); 
	//current cache: "C, B, A"

	lru.get('B');
	expect(lru.head.value).toBe('b');
	//current cache: "B, C, A"

	lru.get('A');
	expect(lru.head.value).toBe('a');
	expect(lru.tail.value).toBe('c');
	//current cache: "A, B, C"

	lru.get('A');
	expect(lru.head.value).toBe('a');
	expect(lru.tail.value).toBe('c');
	//current cache: "A, B, C"

	expect(lru.get('D')).toBe(false);
});

test('del()', () => {

	const lru = new LRU();

	lru.set("A", "a");
	lru.set("B", "b");
	lru.set("C", "c");
	//current cache: "C, B, A"

	lru.del('C');
	expect(lru.head.value).toBe('b');
	expect(lru.tail.value).toBe('a');
	//current cache: "B, A"

	lru.del('A');
	expect(lru.head.value).toBe('b');
	expect(lru.tail.value).toBe('b');
	//current cache: "B"

	expect(lru.del('D')).toBe(false);
});

test('has()', () => {

	const lru = new LRU();

	lru.set("A", "a");
	lru.set("B", "b");
	lru.set("C", "c");
	expect(lru.has('B')).toBe(true);
	expect(lru.has('D')).toBe(false);
});