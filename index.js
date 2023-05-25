/**
 * @param {number[]} nums
 */
class ArrayWrapper {
	constructor(nums) {}

	valueOf() {}

	toString() {}
}

export default ArrayWrapper

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */
