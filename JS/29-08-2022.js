// typeof 
// console.log(typeof "mustafa");
// console.log(typeof 123);
// console.log(typeof asd1);

// function name(asd) {
//     if(typeof asd !== "undefined" ){
//         console.log("asdsad ------- adasd");
//     } else {
//         console.log("Enter valid data");
//     }
// }
// var asd;
// name(asd)


// trim => remove white space
// const a1 = "   asd  qwe zxc   ";
// console.log(a1.length);
// console.log((a1.trim()).length);


// split => break string at specific character
// const a2 = "val ue1v  alu e2  val ue3";
// console.log(a2.split(","));
// console.log(a2.split("  "));

// // type casting
// const a3 = "234"
// console.log(typeof a3);
// console.log(typeof parseFloat(a3) );

// const a4 = 244
// console.log("a4", typeof a4);
// console.log("a4", typeof a4.toString() );


// substring
// const a5 = "0x94F7fd8A132cD0512f1B6D8A304019ACA886C425"
// console.log(a5.substring(0, 5));
// console.log(a5.substring(5, 15) + "...");

// slice   [0,    1,   2,   3,   4,   5 ]
// const a6 = ["a", "b", "c", "d", "e", "f"]
// console.log(a6.slice(1,5));   // start index, end index
// console.log(a6);

// // splice  [0,    1,   2,   3,   4,   5 ]
// const a7 = ["a", "b", "c", "d", "e", "f"]
// console.log(a7.splice(3, 0, "x", "y", "z"));  // start index, no. of items to delete
// console.log(a7);


// Find
// data = [{
//     name: "Ali",
//     pass: 12554
// }, {
//     name: "ali",
//     pass: 12444
// }, {
//     name: "ali",
//     pass: 12555
// }, {
//     name: "sara",
//     pass: 78756
// }]

// find
// function login(name1, pass1) {
//     temp = data.find(e => {
//         return e.name == name1
//     })

//     console.log("temp", temp);
// }
// login("ali", 12444)

// filter
// function login(name1, pass1) {
//     temp = data.filter(e => {
//         return e.name == name1
//     })

//     console.log("temp", temp);
// }
// login("ali", 12444)