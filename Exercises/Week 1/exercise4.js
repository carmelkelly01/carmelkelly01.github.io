var cars= 100;
var spaceInACar = 4.0;
var drivers = 30;
var passengers = 90;
var carsNotDriven = cars- drivers;
var carsDriven = drivers;
var carpoolCapacity = carsDriven * spaceInACar;
var averagePassengersPerCar = passengers / carsDriven;

//how many cars are available//
console.log("There are", cars, "cars available.");
//how many drivers are there//
console.log("There are only", drivers, "drivers available");
//how many cars won't be driven//
console.log("There will be", carsNotDriven, "empty cars today.");
//how many people can we carry passengers and drivers together//
console.log("We can transport", carpoolCapacity, "people today.");
//How many passengers are there//
console.log("we have", passengers, "to carpool today.");
//how many will go in each car 90/30 //
console.log("We need to put about", averagePassengersPerCar, "in each car");
