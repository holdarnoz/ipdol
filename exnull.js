let t = "hello.world";
let i = t.indexOf('.'); // i will be 5

if (i >= 0) {
    name = t.slice(i + 1); // name will be "world"
    t = t.slice(0, i);     // t will be "hello"
}

console.log(name); // Output: world
console.log(t);    // Output: hello
