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
        newbrewOption.setAttribute("data-src", data[i].website_url);
        // add content
        newbrewOption.textContent = data[i].name;
        // ADD IT TO THE DOM
        breweryOptionsContainer.append(newbrewOption);
    }
}

// function displayFrame () {
//     let breweryDisplayContainer = document.getElementById("brewDisplay");
//     var selectedBreweryURL = document.querySelector('#breweries');
//     console.log(selectedBreweryURL.dataset.src);
//     // let splitURL = selectedBreweryURL.split("http://");
//     // let newURL = 'https://' + splitURL[1]; 
//     // // Dynamically creating new content
//     let newBreweryDisplay = document.createElement("iframe");
//     // // add attributes
//     newBreweryDisplay.setAttribute("src", selectedBreweryURL);
//     // console.log(newBreweryDisplay);
//     // ADD IT TO THE DOM
//     breweryDisplayContainer.append(newBreweryDisplay);
// };

// function changeTitle () {
//     let breweryNameContainer = document.getElementById("selected-brewname");
//     var selectedBreweryName = document.querySelector('#breweries').value
//     breweryNameContainer.innerHTML = selectedBreweryName
//     // ADD IT TO THE DOM
//     breweryDisplayContainer.append(newBreweryTitle);
// };

stateSelector.addEventListener('click', loadBreweries);

stateSelector.addEventListener('click', loadBreweries);