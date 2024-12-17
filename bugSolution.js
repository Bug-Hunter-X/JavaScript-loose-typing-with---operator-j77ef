function foo(a, b) {
  a = Number(a);
  b = Number(b);
  if (isNaN(a) || isNaN(b)) {
    return NaN; // Handle cases where conversion fails
  }
  return a + b;
}

console.log(foo(1, 2)); // 3
console.log(foo(1, "2")); // 3
console.log(foo("1", 2)); // 3
console.log(foo("1", "2")); // 3
console.log(foo("abc", 2)); // NaN