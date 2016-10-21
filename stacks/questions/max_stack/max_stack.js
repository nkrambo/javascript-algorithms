
/**
* Max Stack
*
* Types: Stack, Eager Approach
*
* You want to be able to access the largest element in a stack.
*
* Use your Stack class to implement a new class MaxStack with a function getMax()
* that returns the largest element in the stack. getMax() should not remove the item.
*
* Your stacks will contain only integers.
*
* Solution:
*
* One lazy approach is to have getMax() simply walk through the stack and find the
* max element. This takes O(n) time for each call to getMax(). But we can do better.
*
* To get O(1) time for getMax(), we could store the max integer as a member variable
* (call it max). But how would we keep it up to date?
*
* For every push(), we can check to see if the item being pushed is larger than
* the current max, assigning it as our new max if so. But what happens when we pop()
* the current max? We could re-compute the current max by walking through our stack
* in O(n) time. So our worst-case runtime for pop() would be O(n). We can do better.
*
* What if when we find a new current max (newMax), instead of overwriting the old
* one (oldMax) we held onto it, so that once newMax was popped off our stack we
* would know that our max was back to oldMax?
*
* What data structure should we store our set of maxs in? We want something where
* the last item we put in is the first item we get out ('last in, first out').
*
* We can store our maxs in another stack!
*
* We define two new stacks within our MaxStack class—stack holds all of our integers,
* and maxsStack holds our 'maxima'. We use maxsStack to keep our max up to date
* in constant time as we push() and pop():
*
* 1. Whenever we push() a new item, we check to see if it's greater than or equal
*    to the current max, which is at the top of maxsStack. If it is, we also push()
*    it onto maxsStack.
*
* 2. Whenever we pop(), we also pop() from the top of maxsStack if the item equals
*    the top item in maxsStack.
*/


class MaxStack {

}

export default MaxStack;
