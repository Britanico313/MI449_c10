document.addEventListener('DOMContentLoaded', function() {
    fetch(' http://api.weatherapi.com/v1/current.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('temp1').textContent = data.main.temp;
            document.getElementById('desc1').textContent = data.weather[0].description;
        });

    