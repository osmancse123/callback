// function myFun(arr) {
//     console.log(arr[2]);
// }

// myFun([2, 5, 'abdur', true, 55]);


// function myFun(arr) {
//     console.log(arr.pop());
// }

// myFun([2, 5, 'abdur', true, 55]);


// function myFunction(obj) {
//     console.log(obj.skills[3]);
// }

// myFunction({
//     name: 'gani jamal',
//     age: 22,
//     skills: ['js', 'java', 'python', 'c++', 'PHP']
// })

// let myArry = [
//     44,
//     22,
//     ['a', 'b', 13],
//     'anam hossain',
//     23,
//     { name: 'tanjil osman'},
//     function () {
//         console.log('Hey.....I\'m a function');
//     }

// ]
// console.log(myArry[5].name);
// myArry[6]();


// =============callback function ========

// function fun1(arr, f) {
//     console.log(arr);
//     console.log(f);;
// }

// function add(a, b) {
//     console.log(a + b);
// }

// fun1(
//     [2,17,6,11,],
//     add
// )
// -------------------
// function fun2(arr, f) {
//     console.log(arr);
//     f(arr[1], arr[0]);
// }

// function add(a, b) {
//     console.log(a + b);
// }

// fun2(
//     [2,17,6,11,],
//     add
// )
// -------------------
function fun2(arr, callback) {
    console.log(arr);
    callback(arr[3], arr[1]);
}

function add(a, b) {
    console.log(a + b);
}

fun2(
    [4,7,3,5,9],
    add
)
// -------------------
// function fun2(arr, callback) {
//     console.log(arr);
//     callback(arr.name, arr.age);
// }

// function add(a, b) {
//     console.log(a + b);
// }

// fun2(
//     {
//         name: 'osman gani',
//         age: 22,
//     },
//     add
// )