const API_KEY = "0ee48ac852bb26bf408d6516080db9d5";

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
            "background-color": "red",
            "margin": "auto",
            "padding": "10px",
            "display": "flex",
            "justify-content": "space-between",
            "align-items": "center", 
        })
        const weatherInfo = `
                <h3>${data.name}, <br/> ${data.sys.country}</h3>
                <p>Weather: <br/>${data.weather[0].description}</p>
                <p>Pressure: <br/> ${data.main.pressure}</p>
                <p>Temperature: <br/> ${data.main.temp}</p>
                <p>Humidity:  <br/>${data.main.humidity}</p>
                 <p>Speed:  <br/>${data.wind.speed}</p>
                `;


        $("#content").html(weatherInfo);
      },
    });
  });
});
