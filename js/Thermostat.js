function Thermostat() {
  this.temp = 20;
  this.minTemp = 10;
  this.maxTemp = 25;
  this.lowTemp = 16;
  this.powerSaverStatus = true;
}

Thermostat.prototype.increaseTemp = function() {
  if (this.temp < this.maxTemp) return (this.temp += 1);
};

Thermostat.prototype.decreaseTemp = function() {
  if (this.temp > this.minTemp) return (this.temp -= 1);
};

Thermostat.prototype.reset = function() {
  this.temp = 20;
};

Thermostat.prototype.powerSaverOn = function() {
  this.powerSaverStatus = true;
  this.maxTemp = 25;
  this.temp = this.maxTemp;
};

Thermostat.prototype.powerSaverOff = function() {
  this.powerSaverStatus = false;
  this.maxTemp = 32;
};

Thermostat.prototype.tempIndicator = function(){
  if (this.temp >= 25) return (tempIndicator === "high");
  else if (this.temp >= 16 && this.temp <= 25) return (tempIndicator === "medium");
  else if (this.temp >= 10 && this.temp <= 16) return (tempIndicator === "low");
};

