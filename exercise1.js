// Exercise 1: Create a Prototype
// Instructions: 
// 1. Create a constructor function called "Vehicle" that takes "make" and "model" as arguments.
// 2. Define a method called "startEngine" on the prototype of Vehicle that logs "The [make] [model] engine is starting."



// YOUR CODE HERE
function Vehicle(make, model) {
    this._make = make
    this._model = model
}

Vehicle.prototype.startEngine = function() {
    console.log(`The ${this._make} ${this._model} engine is starting`)
}

// Test the Vehicle prototype
const myCar = new Vehicle("Toyota", "Corolla");
myCar.startEngine();  // Output: The Toyota Corolla engine is starting.


//--------------------------------------------note---------------------------------------------------------

// class Staff {
//     static counter = 0

//     constructor(fname, lname) {
//         this._firstname = fname
//         this._lastname = lname
//     }

//     getFirstname() {
//         return this._firstname
//     }

//     introduce() {
//         return `My name is ${this._firstname} ${this._lastname}`
//     }
// }

// function Staff(fname, lname) {
//     this._firstname = fname
//     this._lastname = lname
// }

// Staff.prototype.getFullname = function() {
//     return `${this._firstname} ${this._lastname}`
// }

// Staff.prototype.getFirstname = function() {
//     return `${this._firstname}`
// }

// Staff.prototype.introduce = function() {
//     return `My name is ${this._firstname} ${this._lastname}`
// }

// const staff1 = new Staff("John", "Smith")
// console.log(staff1.getFirstname())

// function Vehicle(make, model) {
//     this._make = make
//     this._model = model

//     Object.defineProperty(this, "make", {
//         get: function() {
//             return this._make
//         }
//     })

//     Object.defineProperty(this, "model", {
//         get: function() {
//             return this._model
//         },
//         set: function(newModel) {
//             this._model - newModel
//         }
//     })
// }

// Vehicle.prototype.describe = function() {
//     return `This vehicle is a ${this._make} ${this._model}`
// }

// function Car(make, model, mileage) {
//     Vehicle.call(this, make, model) // super(make, model)
//     this._mileage =mileage
// }

// Car.prototype = Object.create(Vehicle.prototype)
// Car.prototype.constructor = Car

// Car.prototype.describe = function () {
//     return `${Vehicle.prototype.describe.call(this)} It has a mileage of ${this._mileage}.`
// }                       // super.describe()

// function Boat(make, model, passengers) {
//     Vehicle.call(this, make, model) // super(make, model)
//     this._passengers = passengers
//     this._distance = 0
// }

// // this two lines are necessary everytime you create prototype methods for instances without class
// Boat.prototype = Object.create(Vehicle.prototype) // copy the props and methods of Vehicle
// Boat.prototype.constructor = Boat // rest constructor to boat

// Boat.prototype.describe = function() {
//     return `${Vehicle.prototype.describe.call(this)} The boat can support ${this._passengers} passengers.`
// }

// Boat.prototype.sailForward = function(nauticalMiles) {
//     this._distance += nauticalMiles
// }

// Boat.prototype.getDistance = function() {
//     return `Tha boat is ${this._distance} from the port.`
// }

// const vehicle1 = new Vehicle("Toyota", "Prius")
// console.log(vehicle1.describe())
// const car1 = new Car("Toyota", "RAV4", 10000)
// console.log(car1.describe())
// const niceBoat = new Boat("S.S.", "Sinkable", 50)
// console.log(niceBoat.describe())
// console.log(niceBoat.getDistance()) // 0
// niceBoat.sailForward(50) // +50
// console.log(niceBoat.getDistance()) // 50



// class Product {
//     #name
//     #price
//     static products = []

//     constructor(name, price) {
//         this.#name = name
//         this.#price = price
//         Product.products.push({name, price})
//         Product.counter++
//     }

//     describe() {
//         return `${this.#name} costs ${this.#price} USD.`
//     }

//     static getTotalProducts() {
//         return Product.products.length
//     }
// }

// const product1 = new Product("Hershey's", 3)
// const product12 = new Product("Lays", 5)
// console.log(product1.describe())
// console.log(product12.describe())
// console.log(Product.getTotalProducts())
// console.log(Product.products) // array

////

// Product.products = []

// function Product(name, price) {
//     this._name = name
//     this._price = price
//     Product.products.push({name, price})

//     Object.defineProperty(this, "name", {
//         get: function() {
//             return this._name
//         }
//     })

//     Object.defineProperty(this, "price", {
//         get: function() {
//             return this._price
//         },

//         set: function(newPrice) {
//             return this._price = newPrice
//         }
//     })
// }

// Product.prototype.describe = function() {
//     return `${this._name} costs ${this._price} USD.`
// }

// Product.getTotalProducts = function() {
//     return Product.products.length
// }

// function Produce(name, price, type) {
//     Product.call(this, name, price) //super(name, price)
//     this._type = type
// }

// Produce.prototype = Object.create(Product.prototype) // copy properties and methods of Product
// Produce.prototype.constructor = Produce // reset constructor back to Produce

// Produce.prototype.describe = function() {
//     return `${Product.prototype.describe.call(this)} This product is a ${this._type}.`
// }

// const product1 = new Product("Hershey's", 3)
// console.log(Product.products)
// console.log(product1)
// const produce1 = new Produce("Lays", 5, "snack")
// const fruit1 = new Produce("Apple", 2, "Fruit")
// const fruit2 =new Produce("Banana", 1, "Fruit")
// const vege1 = new Produce("Carrot", 3, "vegetable")
// console.log(produce1.describe())
// console.log(Product.products)
// console.log(Product.getTotalProducts())
// console.log(vege1.price)
// vege1._price = 8
// console.log(vege1.price)

/////

// function Pokemon(name, atk, hp) {
//     this._name = name
//     this._atk = atk
//     this._hp = hp
//     this._status = true // true if alive, false if un-alive
// }

// Pokemon.prototype.checkStatus = function() {
//     return `${this._name} has ${this._hp} health points remaining.`
// }

// Pokemon.prototype.attack = function(target) {
//     target._hp -= this._atk
//     console.log(`${this._name} inflicted ${this._atk} damage on ${target._name}.`)

//     if (target._hp <= 0) {
//         console.log(`${target._name} is unconscious.`)
//         target._status = false
//     } else {
//         console.log(`${target._name} is still able to fight!`)
//     }
// }

// function WaterPokemon(name, atk, hp) {
//     Pokemon.call(this, name, atk, hp)
// }

// WaterPokemon.prototype = Object.create(Pokemon.prototype)
// WaterPokemon.prototype.constructor = WaterPokemon

// WaterPokemon.prototype.swim = function() {
//     this._hp += 10
//     this._atk += 20
//     console.log(`${this._name} swam. gained hp and atk.`)
// }

// const squirtle = new WaterPokemon("Squirtle", 3, 100)
// const charizard = new Pokemon("Shiny Charizard", 28, 100)

// squirtle.attack(charizard)
// console.log(charizard.checkStatus())
// charizard.attack(squirtle)
// charizard.attack(squirtle)
// charizard.attack(squirtle)
// console.log(squirtle.checkStatus())
// squirtle.swim()
// squirtle.attack(charizard)
// console.log(squirtle.checkStatus())
// charizard.attack(squirtle)
// console.log(squirtle.checkStatus())

