// // 2 < 2 = false
// for (i=0; i < 2; i++) {
//     console.log(i);  
// }

// yesNo = true
// arr = ["Ali", 1233, yesNo, false, [1, 2, 4, 5], {
//     name: "Mustafa",
//     age: 132
// }]

// // For Each
// arr.forEach( ( item, i) => {

//     console.log(item, i);

// });


obj = {
    name: "Ali",
    age: 12,
    gender: "male"
}
// console.log(Object.entries(obj));
// console.log(Object.keys(obj));
// console.log(Object.values(obj));


function runLoopOnMyCall(params) {
    Object.values(obj).forEach(element => {
        console.log(element);
    });
}
runLoopOnMyCall()   // function call
runLoopOnMyCall()   // function call
runLoopOnMyCall()   // function call


// Task 
// for loop say even numbers print (25-57) decending order
// write a function to print all users name & age from the given JSON
// arr = [
//     { 
//         name: "Ali",
//         age: 12
//     }, {
//         name: "Ahmed",
//         class: "primary"
//     }, {
//         name: "Sara",
//         age: 15
//     }
// ]