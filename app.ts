interface Vehicle{
    make:string,
    model:string,
    year:number,
    start(): void
}

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

const car1 = new Car("Lexus", "ES350", 2019);

car1.start();