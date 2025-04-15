// Define an interface that describes the structure of a Vehicle
interface Vehicle{
    make:string, // Manufacturer of the vehicle
    model:string, // Model of the vehicle
    year:number,    // Year the vehicle was manufactured
    start(): void // Method to start the vehicle; returns nothing (void)
}

// Define a Car class that implements the Vehicle interface
class Car implements Vehicle{
    constructor(public make:string,public model:string,public year:number){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start(): void {
        console.log('Car engine started');
    }
}

// creating an instance of the car.
const car1 = new Car("Lexus", "ES350", 2019);

// call the function start().
car1.start();