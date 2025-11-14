// s = string angka
// k = bilangan bulat maksimal perubahan
const highestPalindrome = (s, k) => {
    const arr = s.split(''); // ubah string menjadi array
    const changed = Array(arr.length).fill(false);
    const makePalindrome = (left, right, k) => {
        if (left >= right) return { arr, k };
        if (arr[left] === arr[right]) {
            return makePalindrome(left + 1, right - 1, k);
        }
        if (k <= 0) return null;
        const bigger = arr[left] > arr[right] ? arr[left] : arr[right];
        arr[left] = arr[right] = bigger;
        changed[left] = changed[right] = true;
        return makePalindrome(left + 1, right - 1, k - 1);
    }
    const minimal = makePalindrome(0, arr.length - 1, k);
    if (!minimal) return "-1";
    // console.log(minimal);
    let { k: kLeft } = minimal;
    const maximize = (left, right, k) => {
        if (left > right) return;
        if (left === right) {
            if (k > 0) arr[left] = '9';
            return;
        }
        const needAlreadyChanged = changed[left] || changed[right];
        if (arr[left] !== "9") {
            if (needAlreadyChanged && k >= 1) {
                arr[left] = arr[right] = '9';
                k -= 1;
            } else if (!needAlreadyChanged && k >= 2) {
                arr[left] = arr[right] = '9';
                k -= 2;
            }
        }
        maximize(left + 1, right - 1, k);
    }
    maximize(0, arr.length - 1, kLeft);
    return arr.join("");
}

console.log(highestPalindrome("3943", 1)); // sample 1
console.log(highestPalindrome("932239", 2)); // sample 2
console.log(highestPalindrome("12345", 1)); // sample 3