// Parent class
class Animal {
    constructor(legs, type) {
        this.legs = legs
        this.type = type
    }
    get_legs() {
        console.log(this.legs);
    }
    get_type() {
        console.log(this.type);
    }
    getData(param) {
        this.get_legs()
        this.get_type()
        console.log(param);
    }
}

// Child class
class Cat extends Animal {
    constructor(legs, type, name, color) {
        super(legs, type);
        this.name  = name;
        this.color = color
    }

    getData() {
        console.log("name",  this.name   );
        console.log("color", this.color  );
        console.log("legs",  this.legs   );
        console.log("type",  this.type   );

        console.log("this.get_legs()");
        this.get_legs()
    }

}



// constructor initialize
// myClass is instance of Animal class 
// const myClass  = new Animal(4, "pet")
// myClass.get_legs()
// myClass.getData("myParameter")

const myCat  = new Cat(4, "pet", "Tom", "blue")
myCat.getData()


