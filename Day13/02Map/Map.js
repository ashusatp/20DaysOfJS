const map = new Map([
    ['a', 1], 
    ['b', 2]
]);

map.set('c',3) // add a new key-value pair
console.log(map.has('a'));
console.log(map.delete('a'));
console.log(map.size);
for(const [key,value] of map){
    console.log(`${key}: ${value}`);
}
map.clear();