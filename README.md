# JavaScript Loose Typing with + Operator
This example demonstrates an uncommon error in JavaScript stemming from its loose typing system and the behavior of the + operator.

## The Problem
In JavaScript, the + operator behaves differently depending on the operands' types.  If both operands are numbers, it performs addition. However, if either operand is a string, it performs string concatenation.

This can lead to unexpected results and subtle bugs, especially when dealing with data coming from external sources that may not always be consistently typed.

## The Code (bug.js)
The following code showcases the issue:
```javascript
function foo(a,b){return a+b;}
console.log(foo(1,2)); // Expected: 3
console.log(foo(1,"2")); // Expected: 12 (string concatenation)
console.log(foo("1",2)); // Expected: 12 (string concatenation)
console.log(foo("1","2")); // Expected: 12 (string concatenation)
```

## The Solution (bugSolution.js)
To mitigate this problem, you should explicitly check the types of your operands before performing the addition.  One way is to use the Number() function to convert strings to numbers before the addition:

```javascript
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
```

This robust solution handles both numerical and string inputs, preventing unexpected results and improving the reliability of your code.