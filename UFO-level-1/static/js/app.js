1// from data.js
var tableData = data;

// Set the table body, button and form
var tbody = d3.select("tbody");
var button = d3.select("button");
var form = d3.select("form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Use d3 to append table row and table data
function defaultPopulate(tableData) {
    tableData.forEach((ufoSighting) => {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

defaultPopulate(tableData);

// Complete the event handler function for the form
function runEnter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    var filteredData = tableData.filter(ufoSighting => ufoSighting.datetime === inputValue);
    console.log(filteredData);

    // Reset the previous filtered data
    tbody.html("");

    // Show filtered data
    filteredData.forEach((ufoSighting) => {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
    
    if (searchArray.length === 0) {
    if (inputValue === "") {
        defaultPopulate(tableData);
    } else if (filteredData.length === 0) {
        tbody.append("tr").text("Cannot find any UFO. Better luck next time!");
    }
    };
};
