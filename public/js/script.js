var stateSelector = document.querySelector('#statesSelect');
var brewerySelector = document.querySelector('#breweries')

// var apiData;

// function to get basic api data(stadium names, pictures(not section specific))
function APIFetcher() {
    //var here will be plugged into a string to return stadiums or arenas for that respective sport
    var selectedStateVal = stateSelector.value
    var breweryOptionsURL = 'https://api.openbrewerydb.org/breweries?by_state=' + selectedStateVal + '&per_page=50' 
    fetch(breweryOptionsURL)
    .then(function (response) {
        return response.json();
    })
    .then(data => {
        loadBreweries(data)
    });
}

function loadBreweries(data) {
    let breweryOptionsContainer = document.getElementById("breweries");
    while (breweryOptionsContainer.firstChild) {
    breweryOptionsContainer.removeChild(breweryOptionsContainer.lastChild);
    }
    for (var i = 0; i < data.length; i++) {
        // Dynamically creating new content
        let newbrewOption = document.createElement("option");
        // add attributes
        newbrewOption.setAttribute("name", data[i].website_url);
        // add content
        newbrewOption.textContent = data[i].name;
        // ADD IT TO THE DOM
        breweryOptionsContainer.append(newbrewOption);
    }
}

stateSelector.addEventListener('click', loadBreweries);