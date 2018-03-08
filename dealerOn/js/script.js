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
    var div = document.createElement("div");
    var textnode = document.createTextNode(jsonData.data[0].name);
    div.appendChild(textnode);
    document.querySelector(".content-container").appendChild(div);
  }
};
xobj.send(null);


// load the JSON file and return its contents


