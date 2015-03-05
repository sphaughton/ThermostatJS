var thermostat = new Thermostat();

  $(document).ready(function(){
    $('#temperature').text(thermostat.temp);

    $('.increaseTemp').click(function(){
      thermostat.increaseTemp();
      $('#temperature').text(thermostat.temp);
    });

    $('.decreaseTemp').click(function(){
      thermostat.decreaseTemp();
      $('#temperature').text(thermostat.temp);
    });

    $('.powerSaverOn').click(function(){
      thermostat.powerSaverOn();
      $('#temperature').text(thermostat.temp);
    });

    $('.powerSaverOff').click(function(){
      thermostat.powerSaverOff();
      $('#temperature').text(thermostat.temp);
    });

    $('.reset').click(function(){
      thermostat.reset();
      $('#temperature').text(thermostat.temp);
    });

    });