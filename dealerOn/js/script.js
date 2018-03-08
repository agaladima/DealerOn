// Function for loading the JSON file
// function loadJSON(file, callback) {   
  
// }

// function load() {
//   loadJSON("../db.json", function(response) {});
// }
var jsonData;

var xobj = new XMLHttpRequest();
//xobj.overrideMimeType("application/json");
// Retreiving selected document
xobj.open('GET', 'http://localhost:8080/db.json', true); 
xobj.onreadystatechange = function () {
  // When data has loaded completely and status is OK
  if (xobj.readyState == 4 && xobj.status == "200") {
    jsonData = JSON.parse(xobj.responseText);
    console.log(jsonData);

    // Declare variable to store the data

    // Loop over json data
    for (var i=0; i < jsonData.length; i++) {
      // Set fields
      let id = jsonData.data[i].id;
      let name = jsonData.data[i].name;
      let quote = jsonData.data[i].quote;
      let birthday = jsonData.data[i].birthday;
      let image_url = jsonData.data[i].image_url;

      // Add the variables to the DOM
      let div = document.createElement("div");

      
      let id_node = document.createTextNode();
      let name_node = document.createTextNode();
      let quote_node = document.createTextNode();
      let birthday_node = document.createTextNode();
      let image_url_node = document.createTextNode();

      div.appendChild(textnode);
      document.querySelector(".content-container").appendChild(div);
    }
  }
};
xobj.send(null);


// load the JSON file and return its contents


