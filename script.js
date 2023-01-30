//adds event listener to sports selector so that the correct venues populate with the sport chosen
var stateSelector = document.querySelector('#selectStateTemplate');
var citySelector = document.querySelector('#city');
var breweryTypeSelector = document.querySelector('#brewType');
var brewerySelector = document.querySelector('#breweries')

var apiData;

// function to get basic api data(stadium names, pictures(not section specific))
function APIFetcher() {
	//var here will be plugged into a string to return stadiums or arenas for that respective sport
	var selectedStateVal = document.querySelector('#states').value
	var cityOptionsURL = 'https://api.openbrewerydb.org/breweries?by_state=' + selectedStateVal + '&per_page=50' 
	fetch(cityOptionsURL)
	.then(function (response) {
        return response.json();
	})
	.then(data => {
        apiData = data;
	// store Data in a global scope so it can be accessed by multiple functions
	});
}

function loadCities() {
    let cityOptionsContainer = document.getElementById("City");

    for (var i = 0; i < apiData.length; i++) {
        // Dynamically creating new content
        let newCityOption = document.createElement("option");
        // add attributes
        newCityOption.setAttribute("value", apiData[i].city);
        // add content
        newCityOption.textContent = apiData[i].city;
        console.log(newCityOption);
        // ADD IT TO THE DOM
        cityOptionsContainer.append(newCityOption);
    }
}

function loadBrewTypes() {
    let brewTypeOptionsContainer = document.getElementById("brewType");

    for (var i = 0; i < apiData.length; i++) {
        // Dynamically creating new content
        let newBrewOption = document.createElement("option");
        // add attributes
        newBrewOption.setAttribute("value", apiData[i].brewery_type);
        // add content
        newBrewOption.textContent = apiData[i].brewery_type;
        console.log(newBrewOption);

        // ADD IT TO THE DOM
        brewTypeOptionsContainer.append(newBrewOption);
    }
}

function loadBreweries(dataNames) {
    let breweriesOptionsContainer = document.getElementById("breweries");

    for (var i = 0; i < dataNames.length; i++) {
        // Dynamically creating new content
        let newBreweriesOption = document.createElement("option");
        // add attributes
        newBreweriesOption.setAttribute("value", data[i].id);
        // add content
        newBreweriesOption.textContent = dataNames[i].name;
        console.log(newBreweriesOption);

        // ADD IT TO THE DOM
        stadiumOptionsContainer.append(newBreweriesOption);
    }
}

function breweryDisplayer(dataNames) {
    let breweryDisplayContainer = document.getElementById("img");
    var selectedBreweryURL = document.querySelector('#breweries').value
        // Dynamically creating new content
        let newBreweryDisplay = document.createElement("iframe");
        // add attributes
        newBreweryDisplay.setAttribute("src", selectedBreweryURL);
        // add content
        newBreweryDisplay.textContent = data[i].name;
        console.log(newBreweryDisplay);

        // ADD IT TO THE DOM
        breweryDisplayContainer.append(newBreweryDisplay);
};

stateSelector.addEventListener('click', APIFetcher);
citySelector.addEventListener('click', loadBrewTypes);
breweryTypeSelector.addEventListener('click', loadBreweries);
brewerySelector.addEventListener('click', breweryDisplayer);
