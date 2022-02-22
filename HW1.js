/* comparison of 2 string*/
 function Reverse(s) {
    var s_new = "";
    for (var i = s.length - 1; i >= 0; --i)
        s_new += s[i];
    return s_new;
}

function Comparison(s1, s2) {
    if (Reverse(s1) === s2)
        return true;
    return false;
}
console.log(Comparison("hel  lo", "olleh"));


/* intersection of all arrays*/
var n = 0;
var s = new Set();
const result = (...arr) => {
    const res = arr.reduce((acc, val) => {
        n++;
        return acc.concat(...val);
    }, []);
    return res;
};
arr = result([0, 1, 4], [1, 2, 3, 4], [111, 1, 5, 4], [1, 4]);
for (var i = 0; i < arr.length; i++) {
    k = arr.filter(item => item == arr[i]);
    if (k.length == n)
        s.add(arr[i]);
}
console.log(s);
