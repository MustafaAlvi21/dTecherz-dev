data = [
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

    funds = parseFloat(value)
    console.log("funds", funds);
    
    // // deducting notes qty
    // funds -= deductQTY(q5000, 5000);
    // console.log("funds 5000", funds);
    // if (funds > 0) {
    //     funds -= deductQTY(q1000, 1000)
    //     console.log("funds 1000", funds);
    // }
    // if (funds > 0) {
    //     funds -= deductQTY(q500, 500)
    //      console.log("funds 500", funds);
    // }
    // if (funds > 0) {
    //     funds -= deductQTY(q100, 100)
    //     console.log("funds 100", funds);
    // }
    // if (funds > 0) {
    //     funds -= deductQTY(q50, 50)
    //     console.log("funds 50", funds);
    // }
    // if(funds > 0) {
    //     console.log("Insufficient funds");
    // } else {
    //     console.log("Withdraw complete");
    // }
}

function amount_breakup(amount) {
    a50 = 0
    a100 = 0
    a500 = 0
    a1000 = 0
    a5000 = 0

    if (amount >= 5000) {
        a5000 = parseInt(amount / 5000)
        amount -= a5000 * 5000
    }

    if (amount >= 1000 && amount <= 5000) {
        a1000 = parseInt(amount / 1000)
        amount -= a1000 * 1000
    }

    if (amount >= 500 && amount <= 1000) {
        a500 = parseInt(amount / 500)
        amount -= a500 * 500
    }

    if (amount >= 100 && amount <= 500) {
        a100 = parseInt(amount / 100)
        amount -= a100 * 100
    }

    if (amount >= 50 && amount <= 100) {
        a50 = parseInt(amount / 50)
        amount -= a50 * 50
    }


    return [a5000, a1000, a500, a100, a50]
}

function deductQTY(qty, price) {
    console.log(qty, price);
    // e.g. qty = 2, price=5000

    var temp = 0
    if (qty > 0 && price == 5000) {
        if ((data[4].qty - parseInt(qty)) >= 0) {
            data[4].qty -= parseInt(qty)
            temp = (parseInt(qty) * 5000)
            console.log('temp => 5000', temp);
            
            
        } else {
            data.forEach((item, i) => {
                noOfNotes = 5000 / item.price
                if ((item.qty - (parseInt(qty) * noOfNotes)) >= 0 && item.price <= price) {
                    data[i].qty -= qty * noOfNotes
                    temp = ((parseInt(qty) * noOfNotes) * 5000)
                    console.log('temp => 5k', temp);
                    return 
                }
            });
        }
    }


    if (qty > 0 && price == 1000) {
        if ((data[4].qty - parseInt(qty)) >= 0) {
            data[4].qty -= parseInt(qty)
            temp = (parseInt(qty) * 1000)
            console.log('temp => 1000', temp);
            return 

        } else {
            data.forEach((item, i) => {
                noOfNotes = 1000 / item.price
                if ((item.qty - (parseInt(qty) * noOfNotes)) >= 0 && item.price <= price) {
                    data[i].qty -= qty * noOfNotes
                    temp = ((parseInt(qty) * noOfNotes) * 1000)
                    console.log('temp => 1k', temp);
                    return 
                }
            });
        }
    }

    if (qty > 0 && price == 500) {
        if ((data[4].qty - parseInt(qty)) >= 0) {
            data[4].qty -= parseInt(qty)
            temp = (parseInt(qty) * 500)
            return 

        } else {
            data.forEach((item, i) => {
                noOfNotes = 500 / item.price
                if ((item.qty - (parseInt(qty) * noOfNotes)) >= 0 && item.price <= price) {
                    data[i].qty -= qty * noOfNotes
                    temp = ((parseInt(qty) * noOfNotes) * 500)
                    return 
                }
            });
        }
    }

    if (qty > 0 && price == 100) {
        if ((data[4].qty - parseInt(qty)) >= 0) {
            data[4].qty -= parseInt(qty)
            temp = (parseInt(qty) * 100)
            return 

        } else {
            data.forEach((item, i) => {
                noOfNotes = 100 / item.price
                if ((item.qty - (parseInt(qty) * noOfNotes)) >= 0 && item.price <= price) {
                    data[i].qty -= qty * noOfNotes
                    temp = ((parseInt(qty) * noOfNotes) * 100)
                    return 
                }
            });
        }
    }

    if (qty > 0 && price == 50) {
        if ((data[4].qty - parseInt(qty)) >= 0) {
            data[4].qty -= parseInt(qty)
            temp = (parseInt(qty) * 50)
            return 

        } else {
            data.forEach((item, i) => {
                noOfNotes = 50 / item.price
                if ((item.qty - (parseInt(qty) * noOfNotes)) >= 0 && item.price <= price) {
                    data[i].qty -= qty * noOfNotes
                    temp = ((parseInt(qty) * noOfNotes) * 50)
                    return 
                }
            });
        }
    }

    console.log('temp', temp);

    return temp;

}

console.log("before data", data);
withdraw(10350)