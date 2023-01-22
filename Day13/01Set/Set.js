const set = new Set([1,2,3]);

set.add(4); // 1 2 3 4

console.log(set.has(4)); //true

console.log(set.delete(9)) // it will delete the element present in the set and return true and if element is not present then it will return false

console.log(set.size); // size of the set

set.clear() // delete all the values of set

for(const item of set){
    console.log(item); // 1 2 3 in column
}