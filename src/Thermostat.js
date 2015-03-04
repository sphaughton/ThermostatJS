function Thermostat() {
  this.temp = 20;
  this.minTemp = 11
  this.maxTemp = 25
  this.powerSaverStatus = true
};

Thermostat.prototype.increaseTemp = function() {
  this.temp += 1;
};

Thermostat.prototype.decreaseTemp = function() {
  if (this.temp >= this.minTemp); return (this.temp -= 1);
};

Thermostat.prototype.reset = function() {
  this.temp = 20;
};

Thermostat.prototype.powerSaverOn = function () {
  this.powerSaverStatus = true;
  this.maxTemp = 25;
};

Thermostat.prototype.powerSaverOff = function () {
  this.powerSaverStatus = false;
  this.maxTemp = 32;
};



