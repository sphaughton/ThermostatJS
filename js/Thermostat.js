function Thermostat() {
  this.temp = 20;
  this.minTemp = 10
  this.maxTemp = 25
  this.powerSaverStatus = true
};

Thermostat.prototype.increaseTemp = function() {
  if (this.temp < this.maxTemp) return (this.temp += 1);
};

Thermostat.prototype.decreaseTemp = function() {
  if (this.temp > this.minTemp) return (this.temp -= 1);
};

Thermostat.prototype.reset = function() {
  this.temp = 20;
};

Thermostat.prototype.powerSaverOn = function () {
  this.powerSaverStatus = true;
  this.maxTemp = 25;
  this.temp = this.maxTemp;
};

Thermostat.prototype.powerSaverOff = function () {
  this.powerSaverStatus = false;
  this.maxTemp = 32;
};



