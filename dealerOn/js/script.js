// Function for loading the JSON file
var jsonData;

var xobj = new XMLHttpRequest();
//xobj.overrideMimeType("application/json");
// Retreiving selected document
xobj.open('GET', 'http://localhost:8080/db.json', true); 
xobj.onreadystatechange = function () {
  // When data has loaded completely and status is OK
  if (xobj.readyState == 4 && xobj.status == "200") {
    jsonData = JSON.parse(xobj.responseText).data;
    console.log(jsonData);

    // Loop over json data
    for (var i=0; i < jsonData.length; i++) {
      // Set fields
      let id = jsonData[i].id;
      let name = jsonData[i].name;
      let quote = jsonData[i].quote;
      let birthday = jsonData[i].birthday;
      let image_url = jsonData[i].image_url;

      // Add the variables to the DOM
      let div = document.createElement("div");
      div.classList.add("inner-content");

      let div2 = document.createElement("div");
      div2.classList.add("image-content");      

      let id_cont = document.createElement("p");
      id_cont.classList.add("id-element");

      let x = document.createElement("IMG");
      x.classList.add("x-element");
      x.setAttribute("src", "https://image.flaticon.com/icons/png/128/8/8934.png");
      x.setAttribute("alt", "Close Image");

      let name_cont = document.createElement("p");
      name_cont.classList.add("name-element");

      let quote_cont = document.createElement("p");
      quote_cont.classList.add("quote-element");

      let birthday_cont = document.createElement("p");
      birthday_cont.classList.add("birthday-element");

      let image_cont = document.createElement("IMG");
      image_cont.setAttribute("src", image_url);
      image_cont.setAttribute("alt", name + " Image");

      
      let id_node = document.createTextNode(id);
      let x_node = document.createTextNode("X");
      let name_node = document.createTextNode(name);
      let quote_node = document.createTextNode('"'+quote+'"');
      let birthday_node = document.createTextNode("Birthday: " + birthday);
      let ximage = document.getElementsByClassName("image-element").src = image_url;
      let image_url_node = ximage;

      div.appendChild(x);
      id_cont.appendChild(id_node);
      div.appendChild(id_cont);
      name_cont.appendChild(name_node);
      div.appendChild(name_cont);
      quote_cont.appendChild(quote_node);
      div.appendChild(quote_cont);
      birthday_cont.appendChild(birthday_node);
      div.appendChild(birthday_cont);
      // image_cont.appendChild(image_url_node);
      div2.appendChild(image_cont);
      div.appendChild(div2);
      document.querySelector(".content-container").appendChild(div);
      let divs = document.getElementsByClassName("inner-content");
    }
  }
};
xobj.send(null);
