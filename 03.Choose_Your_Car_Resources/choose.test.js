const chooseYourCar = require('./chooseYourCar');
const {assert} = require('chai');

describe("Tests chooseYourCar", function() {
    describe("choosingType  …", function() {
        it("wrong year", function() {
            assert.throw(() => chooseYourCar.choosingType("test", "test1", 1899), "Invalid Year!");
            assert.throw(() => chooseYourCar.choosingType("test", "test1", 2023), "Invalid Year!");
        });

        it("wrong type", () => {
            assert.throw(() => chooseYourCar.choosingType("test", "test1", 2020), "This type of car is not what you are looking for.");
            assert.throw(() => chooseYourCar.choosingType(["test"], "test1", 2020), "This type of car is not what you are looking for.");
            assert.throw(() => chooseYourCar.choosingType(0, "test1", 2020), "This type of car is not what you are looking for.");
        });

        it("check when year is greater or equal to 2010", () =>{
            assert.equal(chooseYourCar.choosingType("Sedan", "test1", 2010), "This test1 Sedan meets the requirements, that you have.");
            assert.equal(chooseYourCar.choosingType("Sedan", "test1", 2020), "This test1 Sedan meets the requirements, that you have.");
        });

        it("check when year is less than 2010", () =>{
            assert.equal(chooseYourCar.choosingType("Sedan", "test1", 2000), "This Sedan is too old for you, especially with that test1 color.");
            assert.equal(chooseYourCar.choosingType("Sedan", "test1", 2009), "This Sedan is too old for you, especially with that test1 color.");
            assert.equal(chooseYourCar.choosingType("Sedan", "test1", 1900), "This Sedan is too old for you, especially with that test1 color.");
        })
     });

     describe("Test brandName ", () =>{
        it("check when have invalid inputs", () =>{
            assert.throw(() => chooseYourCar.brandName("test", 5), "Invalid Information!");
            assert.throw(() => chooseYourCar.brandName(2, 2), "Invalid Information!");
            assert.throw(() => chooseYourCar.brandName([], "5"), "Invalid Information!");
            assert.throw(() => chooseYourCar.brandName(["test"], 2), "Invalid Information!");
            assert.throw(() => chooseYourCar.brandName({}, 0), "Invalid Information!");
            assert.throw(() => chooseYourCar.brandName(["test", "BMW"], "1"), "Invalid Information!");
            assert.throw(() => chooseYourCar.brandName(["test", "BMW"], 2), "Invalid Information!");
        });

        it("check is works correct", () => {
            assert.equal(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 2), "BMW, Toyota");
            assert.equal(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 0), "Toyota, Peugeot");
            assert.equal(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 1), "BMW, Peugeot");
        });
     });

     describe("Test CarFuelConsumption ", () => {
        it("check if the liters/100km is less or equal to 7L", () =>{
            let consumptedFuelInLiters = 10;
            let distanceInKilometers = 150;
            let litersPerHundredKm = (((consumptedFuelInLiters / distanceInKilometers)* 100).toFixed(2));
            assert.equal(chooseYourCar.carFuelConsumption(distanceInKilometers, consumptedFuelInLiters),`The car is efficient enough, it burns ${litersPerHundredKm} liters/100 km.`);
            assert.equal(chooseYourCar.carFuelConsumption(100, 10),"The car burns too much fuel - 10.00 liters!");
            assert.equal(chooseYourCar.carFuelConsumption(100, 7),"The car is efficient enough, it burns 7.00 liters/100 km.");
            
        });
        it("check wrong inputs", () => {
            assert.throw(() => chooseYourCar.carFuelConsumption('', 2), "Invalid Information!");
            assert.throw(() => chooseYourCar.carFuelConsumption('3', 2), "Invalid Information!");
            assert.throw(() => chooseYourCar.carFuelConsumption(50, "2"), "Invalid Information!");
            assert.throw(() => chooseYourCar.carFuelConsumption([], 2), "Invalid Information!");
            assert.throw(() => chooseYourCar.carFuelConsumption({}, 2), "Invalid Information!");
            assert.throw(() => chooseYourCar.carFuelConsumption(2, []), "Invalid Information!");
            assert.throw(() => chooseYourCar.carFuelConsumption([], ""), "Invalid Information!");
            assert.throw(() => chooseYourCar.carFuelConsumption(100, {}), "Invalid Information!");
            assert.throw(() => chooseYourCar.carFuelConsumption([], {}), "Invalid Information!");
        })
     })
     // TODO: …
});
