class Calculator {
    
    add(v1, v2){
        console.log("Addition => ", v1+v2);
    }
    
    sub(v1, v2){
        console.log("Subtraction => ", v1-v2);
    }
    
    mul(v1, v2){
        console.log("Multiplication => ", v1*v2);
    }
    
    div(v1, v2){
        console.log("Division => ", v1/v2);
    }
    
    sqr(v1){
        console.log("Square => ", v1 * v1);
    }
    
    sqrt(v1){
        console.log("Square Root => ", Math.sqrt(v1));
    }
    
    cub(v1){
        console.log("Cube => ", v1 * v1 * v1);
    }

    cqrt(v1){
        console.log("Cube Root => ", Math.cbrt(v1));
    }
    
    exp(v1, v2){
        console.log("Exponent => ", Math.pow(v1, v2));
    }

    round(v1){
        console.log("Round => ", Math.round(v1));
    }

    PI(v1){
        console.log("Value of PI => ", Math.PI);
    }

    ToFixed(v1, v2){
        console.log("Fixed decimal value => ", v1.toFixed(v2));
    }

    Table(v1, v2){
        console.log("Table printing start of ", v1);
        for (let index = 0; index < v2; index++) {
            console.log(`${v1} x ${index+1} = ${v1* (index+1)}`);
            
        }
    }
}


const cal = new Calculator()
cal.add(2, 5)
cal.sub(10, 3)
cal.mul(3, 7)
cal.div(99, 3)
cal.sqr(4)
cal.sqrt(25)
cal.cub(6)
cal.cqrt(125)
cal.exp(2,5)
cal.round(2.4)
cal.PI()
cal.ToFixed(1.8968762, 4)
cal.Table(89, 15)