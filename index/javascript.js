var header = document.querySelector('header');
var section = document.querySelector('section');

var requestURL = "https://github.com/MaksOnashko/Incode/blob/master/index/clients.json";
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var Employee = request.response;
  populateHeader(Employee);
  showEmployee(Employee);
}

//function populateHeader(jsonObj) {
//  var myH1 = document.createElement('h1');
//  myH1.textContent = jsonObj['general'];
//  header.appendChild(myH1);

//  var myPara = document.createElement('p');
//  myPara.textContent = 'General: ' + jsonObj['general'] + ' // Job: ' + jsonObj['job'] + ' // Contact: ' + jsonObj['contact'] + ' // Address: ' + jsonObj['address'];
//  header.appendChild(myPara);
//}

function showEmployee(jsonObj) {
  var Employee = jsonObj['general'];
      
for (var i = 0; i < Employee.length; i++) {
	var myArticle = document.createElement('article');
	var myH1 = document.createElement('h1');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');

    myH1.textContent = Employee[i];
    myPara1.textContent = 'FirstName: ' + Employee[i].firstName;
    myPara2.textContent = 'LastName: ' + Employee[i].lastName;
    myPara3.textContent = 'Avatar: ' + Employee[i].avatar;
        
};

    myArticle.appendChild(myH1);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);

    section.appendChild(myArticle);
}

function showEmployee(jsonObj) {
  var Employee = jsonObj['job'];
      
for (var i = 0; i < Employee.length; i++) {
	var myArticle = document.createElement('article');
	var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');

    myPara1.textContent = 'Company: ' + Employee[i].company;
    myPara2.textContent = 'Title: ' + Employee[i].title;
        
};

    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);

    section.appendChild(myArticle);
}

function showEmployee(jsonObj) {
  var Employee = jsonObj['contact'];
      
for (var i = 0; i < Employee.length; i++) {
	var myArticle = document.createElement('article');
	var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    

    myPara1.textContent = 'email: ' + Employee[i].email;
    myPara2.textContent = 'phone: ' + Employee[i].phone;
        
};
	
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);

    section.appendChild(myArticle);
}

function showEmployee(jsonObj) {
  var Employee = jsonObj['address'];
      
for (var i = 0; i < Employee.length; i++) {
	var myArticle = document.createElement('article');
	var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    var myPara4 = document.createElement('p');

    myPara1.textContent = 'Street: ' + Employee[i].street;
    myPara2.textContent = 'City: ' + Employee[i].city;
    myPara3.textContent = 'ZipCode: ' + Employee[i].zipCode;
    myPara4.textContent = 'Country: ' + Employee[i].country;
        
};

    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myPara4);

    section.appendChild(myArticle);
}
