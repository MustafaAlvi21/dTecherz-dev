// num2 = 12
// function calculator(num1, num2, opt) {
//     console.log(num1, num2);
//     if(opt == "/") div()
// }

// calculator(12,"23435", "/")


// function add() {
    
// }
// function sub() {
    
// }
// function mul() {
    
// }
// function div() {
    
// }
data = [{
    name: "Ali",
    pass: 12554
}, {
    name: "ali",
    pass: 12444
}, {
    name: "sara",
    pass: 78756
}]
console.log(data[0].name);

// login("sara", 12554)
function login(name1, pass1) {
    data.forEach(user => {
        if(user.name == name1 && pass1 == user.pass) console.log("Login success");
        else console.log("Login failed");
    });
}
login("ali", 12444)



// register()
function register(name1, pass1) {
    data.push({
        name: name1,
        pass: pass1
    })
}
register("Ahmed", 568888)


// Task
// is main aap logoon nay functioonalities add kerni hain like login kerne pay 
// login failed multiple times aata hay to aesi functionality add kerni hay k 
// pehle loop end ho or uskay baad login failed print ho takay bar bar nahi likha aai
// or agr login success hojai to phir loop end hone pay login success print ho