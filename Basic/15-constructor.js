function car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year; 
}

var newCar = new car("Tesla", "Model 3", 2020);
// car {brand: "Tesla", model: "Model 3", annio: 2020}

var newCar2 = new car("Audi", "R3", 2016);
// car {brand: "Audi", model: "R3", annio: 2016}

var newCar3 = new car("BMW", "GTR", 2012);
// car {brand: "BMW", model: "GTR", annio: 2012}