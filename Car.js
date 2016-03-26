function Car(make, model, year, color, seats){
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.seats = seats;
  this.running = false;
  this.owner = "manufacturer";
  this.previousOwners = [];
  this.passengers = [];
}

Car.prototype.sell = function(newOwner){
  var oldOwner = this.owner;
  var updatedPrev = this.previousOwners.push(oldOwner);
  var clearCurrentOwner = this.owner = newOwner;
  var updateCurrentOwner = newOwner;
};

Car.prototype.paint = function(newColor){
  var updatePaint = this.color=newColor;
  console.log(this.color)
};

Car.prototype.start = function(){
  var engineOn = this.running = true;
  console.log(engineOn);
}

Car.prototype.off = function() {
  var engineOff = this.running = false;
  console.log(engineOff);
}

Car.prototype.driveTo = function(destination) {
  var result;
  if(this.running === true) {
    console.log("driving to "+ destination )
    result = true;
  } else {
    console.log("we ain't going no where!");
    result = false;
  }
  return result;
}

Car.prototype.pickup = function(name) {
  var pickedUp;
  if (this.running === true && this.seats > this.passengers.length) {
    console.log("Driving to pick up "+ name);
    var addPassenger = this.passengers.push(name);
    pickedUp = true;
  } else {
    pickedUp = false;
  }
  return pickedUp;
}

Car.prototype.park = function() {
  var result;
  if (this.running ===  false) {
    console.log("parked!");
    result = true;
  } else {
    console.log("we can't park right now.")
    result = false;
  }
  return result;
}



Car.prototype.dropoff = function(name){
  var result;
  var areTheyHere = this.passengers.indexOf(name);
  function passfil(){
    return areTheyHere
  }

  if(areTheyHere > -1) {
    //console.log("passfil = " );
    //console.log(this.passengers);
    result = true
  } else {
    result=false;
  }
  return result
}

Car.prototype.count = function() {
  return "passCount = "+ this.passengers.length;
}

var Suby = new Car("Subaru", "Impreza", "2016", "black", "4", "running", "owner", "previousOwners");
//console.log(Suby);
//Suby.sell("Paul");
//Suby.paint('blue');
Suby.start();
//Suby.driveTo("B.C");
//Suby.park();
Suby.pickup("beAnz");
console.log(Suby.seats);
Suby.pickup("eileen");
//Suby.pickup("phife");
console.log(Suby.passengers);
Suby.dropoff("eileen");
Suby.count();


// export the Car function for use in node //
// this is required for the test.js to load this //
module.exports = Car;
