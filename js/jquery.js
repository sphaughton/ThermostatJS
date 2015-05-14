var thermostat = new Thermostat();
  $(document).ready(function(){
    $('#temperature').text(thermostat.temp);

    $('.increaseTemp').click(function(){
      tempColor();
      thermostat.increaseTemp();
      $('#temperature').text(thermostat.temp);
    });

    $('.decreaseTemp').click(function(){
      tempColor();
      thermostat.decreaseTemp();
      $('#temperature').text(thermostat.temp);
    });

    $('.powerSaverOn').click(function(){
      thermostat.powerSaverOn();
      tempColor();
      $('#temperature').text(thermostat.temp);
    });

    $('.powerSaverOff').click(function(){
      thermostat.powerSaverOff();
      tempColor();
      $('#temperature').text(thermostat.temp);
    });

    $('.reset').click(function(){
      thermostat.reset();
      tempColor();
      $('#temperature').text(thermostat.temp);
    });

  });

  function tempColor(){
    $('#temperature').text(function() {
      if(thermostat.tempIndicator === "high") {
        $("#temperature").css({color: "#fd5c13"});
      }

      if(thermostat.tempIndicator === "medium") {
        $("#temperature").css({color: "#ecf76b"});
      }

      if(thermostat.tempIndicator === "low") {
        $("#temperature").css({color: "#75491f"});
      }

      $('#temperature').text(thermostat.temp);
    });
  }

