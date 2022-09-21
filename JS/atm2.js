var data = [
    {
        price: 50,
        qty: 10
    },
    {
        price: 100,
        qty: 10
    },
    {
        price: 500,
        qty: 5
    },
    {
        price: 1000,
        qty: 6
    },
    {
        price: 5000,
        qty: 1
    },
]

function withdraw(value) {
    [q5000, q1000, q500, q100, q50] = amount_breakup(value);
    console.log([q5000, q1000, q500, q100, q50]);
    console.log(data);


}

function amount_breakup(amount) {
    a50 = 0
    a100 = 0
    a500 = 0
    a1000 = 0
    a5000 = 0

    if (amount >= 5000 && data[4].qty > 0) {
        console.log("---");
        a5000 = parseInt(amount / 5000)
        amount -= data[4].qty >= 0 ? (data[4].qty > a1000 ? a1000 * 5000 :  data[4].qty * 5000) : 0
        data[4].qty -= data[4].qty >= 0 ? (data[4].qty > a1000 ? a1000 :  data[4].qty) : 0

    }
    
    console.log("amount", amount);
    if (amount >= 1000 && amount <= 5000 && data[3].qty > 0) {
        a1000 = parseInt(amount / 1000)
        console.log(a1000);
        amount -= data[3].qty >= 0 ? (data[3].qty > a1000 ? a1000 * 1000 :  data[3].qty * 1000) : 0
        data[3].qty -= data[3].qty >= 0 ? (data[3].qty > a1000 ? a1000 :  data[3].qty) : 0
        if(amount == 0) return [a5000, a1000, a500, a100, a50]

    }
    console.log("amount", amount);
    if (amount >= 500 && amount <= 1000 && data[2].qty > 0) {
        a500 = parseInt(amount / 500)
        amount -= data[2].qty >= 0 ? (data[2].qty > a1000 ? a1000 * 500 :  data[2].qty * 500) : 0
        data[2].qty -= data[2].qty >= 0 ? (data[2].qty > a1000 ? a1000 :  data[2].qty) : 0
    }

    if (amount >= 100 && amount <= 500 && data[1].qty > 0) {
        a100 = parseInt(amount / 100)
        amount -= data[1].qty >= 0 ? (data[1].qty > a1000 ? a1000 * 100 :  data[1].qty * 100) : 0
        data[1].qty -= data[1].qty >= 0 ? (data[1].qty > a1000 ? a1000 :  data[1].qty) : 0
    }

    if (amount >= 50 && amount <= 100 && data[0].qty > 0) {
        a50 = parseInt(amount / 50)
        amount -= data[0].qty >= 0 ? (data[0].qty > a1000 ? a1000 * 50 :  data[0].qty * 50) : 0
        data[0].qty -= data[0].qty >= 0 ? (data[0].qty > a1000 ? a1000 :  data[0].qty) : 0
    }


    return [a5000, a1000, a500, a100, a50]
}

withdraw(5350)
