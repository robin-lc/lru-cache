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