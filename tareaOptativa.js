class Vehicle{
    constructor(serialNumber, brand, model, year){
        this.serialNumber = serialNumber;
        this.brand = brand;
        this.model = model;
        this.year = year;
        
    }

}

class VehicleRegister{
    constructor(vehicleList){
        this.vehicleList = vehicleList;
    }

    findBrand(vehicleBrand){
        let auxVehicleList = [];

        for(let i = 0; i < this.vehicleList.length; i++){
            if(this.vehicleList[i].brand === vehicleBrand){
                auxVehicleList.push(this.vehicleList[i]);
            }
        }
        if(auxVehicleList.length > 1){
            console.log(auxVehicleList);
        }else{
            console.log("No vehicles match that brand");
        }
    }


    addVehicle(vehicle){
        this.vehicleList.push(vehicle);
    }

    editVehicle(serialN, fieldToChange, newValue){
        let vehicleFound = false;
        let auxVehicle = null;
        let counter = 0;
        while(!vehicleFound && counter < this.vehicleList.length){

            if(this.vehicleList[counter].serialNumber === serialN){

                auxVehicle = this.vehicleList[counter];
                vehicleFound = true;

            }else{

                counter++;

            }
        }

        if(vehicleFound){
            if(fieldToChange === "brand"){
                auxVehicle.brand = newValue;
            }else if(fieldToChange === "model"){
                auxVehicle.model = newValue;
            }else if(fieldToChange === "year"){
                auxVehicle.year = newValue;
            }else{
                console.log("That field can't be found");
            }
        }else{
            console.log("The vehicle couldn't be found");
        }
    }

    removeVehicle(serialNVehicleRemove){
        let vehicleFound = false;
        let counter = 0;

        while(!vehicleFound && counter < this.vehicleList.length){

            if(this.vehicleList[counter].serialNumber === serialNVehicleRemove){

                vehicleFound = true;

            }else{

                counter++;

            }
        }

        if(vehicleFound){
        this.vehicleList.splice(counter, 1);
        }else{
            console.log("The vehicle couldn't be found");
        }
    }

    
}

//Test

//Creating cars
const vehicleOne = new Vehicle("0000", "Toyota", "Camry", "2018");
const vehicleTwo = new Vehicle("0010", "Toyota", "SUV", "2020");
const vehicleThree = new Vehicle("4040", "Lamborghini", "Huracan", "2017");
const vehicleFour = new Vehicle("5920", "Ferrari", "Original", "1950");
const vehicleFive = new Vehicle("2340", "Nissan", "Rover", "2021");

//Creating vehicle register
const listOfVehicles = new VehicleRegister([vehicleOne, vehicleTwo, vehicleThree, vehicleFour, vehicleFive]);

//Testing add vehicle function
console.log("Testing add vehicle function");
const vehicleSix = new Vehicle("5245", "Tesla", "S Plaid", "2023");

listOfVehicles.addVehicle(vehicleSix);

console.log(listOfVehicles);

//Testing modify vehicle function
console.log("Testing modify vehicle function");
listOfVehicles.editVehicle("4040", "year", "2022");
console.log(vehicleThree);

//Testing remove vehicle function
console.log("Testing remove vehicle function");
listOfVehicles.removeVehicle("2340");
console.log(listOfVehicles);

//Testing function that returns all the vehicles from a brand
console.log("Testing function that returns all the vehicles from a brand");
listOfVehicles.findBrand("Toyota");