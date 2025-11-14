const a000124 = (n) => (n * (n + 1)) / 2 + 1;
const generateA000124 = (input) => {
    const r = [];
    for (let i = 0; i < input; i++) {
        r.push(a000124(i));
    }
    return r.join('-');
}
const input = 7;
console.log(`Input: ${input}`);
console.log(`Output: ${generateA000124(input)}`);