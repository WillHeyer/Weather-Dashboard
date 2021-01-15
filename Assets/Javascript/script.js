var cityName = $("#search-city").val();

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=65738807a1c6c21d0113b05cea3caf6c";

var savedCities = JSON.parse(localStorage.getItem('cityListNames')) || [];

$("#search-button").on("click", function(event) {
    event.preventDefault();
    var cityName = $("#search-city").val().trim();

    savedCities.push(cityName);

    localStorage.setItem("cityListNames", JSON.stringify(savedCities));
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=65738807a1c6c21d0113b05cea3caf6c";
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function (response) {
          var currentCity = $("#name")
          currentCity.text(response.name)
          $("#name").append(currentCity)
          var Kalvin = response.main.temp
          var temperature = (Kalvin -273.15) * 1.80 + 32
          tempF = Math.floor(temperature);
          $("#temperature").text(tempF + " F")   
          var currentHumidity = $("#humidity")
          currentHumidity.text(response.main.humidity + "%")
          $("#humidity").append(currentHumidity)
          var currentWindspeed = $("#wind-speed")
          currentWindspeed.text(response.wind.speed + " MPH")
          $("#wind-speed").append(currentWindspeed)
        })
        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=65738807a1c6c21d0113b05cea3caf6c"
        $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function (response) {
          var day1Date = $("#day1date")
          day1Date.text(response.list[2].dt_txt)
          var day2Date = $("#day2date")
          day2Date.text(response.list[10].dt_txt)
          var day3Date = $("#day3date")
          day3Date.text(response.list[18].dt_txt)
          var day4Date = $("#day4date")
          day4Date.text(response.list[26].dt_txt)
          var day5Date = $("#day5date")
          day5Date.text(response.list[34].dt_txt)
          var Kalvin = response.list[2].main.temp
          var temperature = (Kalvin -273.15) * 1.80 + 32
          tempF = Math.floor(temperature);
          $("#temperature-day1").text(tempF + " F")   
          var Kalvin = response.list[10].main.temp
          var temperature = (Kalvin -273.15) * 1.80 + 32
          tempF = Math.floor(temperature);
          $("#temperature-day2").text(tempF + " F")  
          var Kalvin = response.list[18].main.temp
          var temperature = (Kalvin -273.15) * 1.80 + 32
          tempF = Math.floor(temperature);
          $("#temperature-day3").text(tempF + " F")  
          var Kalvin = response.list[26].main.temp
          var temperature = (Kalvin -273.15) * 1.80 + 32
          tempF = Math.floor(temperature);
          $("#temperature-day4").text(tempF + " F")  
          var Kalvin = response.list[34].main.temp
          var temperature = (Kalvin -273.15) * 1.80 + 32
          tempF = Math.floor(temperature);
          $("#temperature-day5").text(tempF + " F")  
          var day1Image = $("#image-day1")
          var newLink1 = "http://openweathermap.org/img/wn/" + response.list[2].weather[0].icon +"@2x.png"
          day1Image.attr("src", newLink1)
          var day2Image = $("#image-day2")
          var newLink2 = "http://openweathermap.org/img/wn/" + response.list[10].weather[0].icon +"@2x.png"
          day2Image.attr("src", newLink2)
        var day3Image = $("#image-day3")
        var newLink3 = "http://openweathermap.org/img/wn/" + response.list[18].weather[0].icon +"@2x.png"
        day3Image.attr("src", newLink3)
        var day4Image = $("#image-day4")
        var newLink4 = "http://openweathermap.org/img/wn/" + response.list[26].weather[0].icon +"@2x.png"
        day4Image.attr("src", newLink4)
        var day5Image = $("#image-day5")
        var newLink5 = "http://openweathermap.org/img/wn/" + response.list[34].weather[0].icon +"@2x.png"
        day5Image.attr("src", newLink5)
        var day1Humidity = $("#humidity-day1")
        day1Humidity.text(response.list[2].main.humidity + "%")
        $("#humidity-day1").append(day1Humidity)
        var day2Humidity = $("#humidity-day2")
        day2Humidity.text(response.list[10].main.humidity + "%")
        $("#humidity-day2").append(day2Humidity)
        var day3Humidity = $("#humidity-day3")
        day3Humidity.text(response.list[18].main.humidity + "%")
        $("#humidity-day3").append(day3Humidity)
        var day4Humidity = $("#humidity-day4")
        day4Humidity.text(response.list[26].main.humidity + "%")
        $("#humidity-day4").append(day4Humidity)
        var day5Humidity = $("#humidity-day5")
        day5Humidity.text(response.list[34].main.humidity + "%")
        $("#humidity-day5").append(day5Humidity)
          })
          
  });
  for (let index = 0; index < savedCities.length; index++) {
    var List = $("#generatedList")
    var newItem = $("<li>")
    newItem.addClass("list-group-item")
    newItem.text(savedCities[index])
    List.append(newItem)
  }