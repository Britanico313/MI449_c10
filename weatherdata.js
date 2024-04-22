function suggestCities() {
    const input = document.getElementById('cityInput').value;
    if (input.length > 2) { // Minimum 3 characters to trigger API call
        fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=YOUR_API_KEY&q=${input}`)
            .then(response => response.json())
            .then(data => {
                const suggestions = document.getElementById('suggestions');
                suggestions.innerHTML = '';
                data.forEach(city => {
                    const div = document.createElement('div');
                    div.textContent = city.LocalizedName;
                    div.onclick = function() { selectCity(city.Key, city.LocalizedName); };
                    suggestions.appendChild(div);
                });
                suggestions.style.display = 'block';
            });
    }
}

function selectCity(cityKey, cityName) {
    fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=YOUR_API_KEY&q=${cityName}`)
        .then(response => response.json())
        .then(data => {
            const details = document.getElementById('cityDetails');
            details.innerHTML = `<h2>Details for ${cityName}</h2>`;
            const city = data[0];
            details.innerHTML += `<p>Country: ${city.Country.LocalizedName}</p>`;
            details.innerHTML += `<p>Region: ${city.Region.LocalizedName}</p>`;
            document.getElementById('suggestions').style.display = 'none'; // Hide suggestions
        });
}

document.addEventListener('click', function (event) {
    if (!event.target.matches('#cityInput')) {
        document.getElementById('suggestions').style.display = 'none';
    }
});
