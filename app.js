import config from "./config.js";
const API_KEY =  config.WEATHER_API_KEY;

$(function () {
  $("#mainBtn").on("click", function () {
    const city = $("#search").val().trim();
    if (!city) {
      alert("Please enter city name.");
      return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    $.ajax({
      url: url,
      method: "GET",
      success: function (data) {
        $("#content").css({
            "width": "auto",
            "height": "250px",
            "background-color": "blue",
            "margin": "auto",
            "padding": "10px",
            "display": "flex",
            "gap": "5px",
            "align-items": "center", 
        });
        let countryName = `<h3> Location: ${data.name}<h3/>`;
        let weather = `<p>Weather: <br/> ${data.weather[0].description}</p>`;
        let pressure = ` <p>Pressure:  ${data.main.pressure} Pa</p>`;
        let temp = `<p>Temperature: ${data.main.temp}℃</p>`;
        let humidity = ` <p>Humidity:  ${data.main.humidity} %</p>`;
        let speed = `<p>Speed:  ${data.wind.speed} m/s</p>`;

        $("#box1").css({
            "width": "180px",
            "height": "70px",
            "background-color": "white",
            "box-shadow": "5px 5px 15px rgba(0, 0, 0, 0.2)",
            "color": "red",
            "font-weight": "bold",
            "display": "flex",
            "justify-content": "center",
            "align-items": "center",
            "border-radius": "20px"
        });
        $("#box2").css({
            "width": "180px",
            "height": "70px",
            "background-color": "white",
            "box-shadow": "5px 5px 15px rgba(0, 0, 0, 0.2)",
            "color": "red",
            "font-weight": "bold",
            "display": "flex",
            "justify-content": "center",
            "align-items": "center",
            "border-radius": "20px"
        })
        $("#box3").css({
            "width": "180px",
            "height": "70px",
            "background-color": "white",
            "box-shadow": "5px 5px 15px rgba(0, 0, 0, 0.2)",
            "color": "red",
            "font-weight": "bold",
            "display": "flex",
            "justify-content": "center",
            "align-items": "center",
            "border-radius": "20px"
        });
        $("#box4").css({
            "width": "180px",
            "height": "70px",
            "background-color": "white",
            "box-shadow": "5px 5px 15px rgba(0, 0, 0, 0.2)",
            "color": "red",
            "font-weight": "bold",
            "display": "flex",
            "justify-content": "center",
            "align-items": "center",
            "border-radius": "20px"
        });
        $("#box5").css({
            "width": "180px",
            "height": "70px",
            "background-color": "white",
            "box-shadow": "5px 5px 15px rgba(0, 0, 0, 0.2)",
            "color": "red",
            "font-weight": "bold",
            "display": "flex",
            "justify-content": "center",
            "align-items": "center",
            "border-radius": "20px"
        });
        $("#box6").css({
            "width": "180px",
            "height": "70px",
            "background-color": "white",
            "box-shadow": "5px 5px 15px rgba(0, 0, 0, 0.2)",
            "color": "red",
            "font-weight": "bold",
            "display": "flex",
            "justify-content": "center",
            "align-items": "center",
            "border-radius": "20px"
        });
       
        $("#box1").html(countryName);
        $("#box2").html(weather);
        $("#box3").html(pressure);
        $("#box4").html(temp);
        $("#box5").html(humidity);
        $("#box6").html(speed);

      },
    });
  });
});
