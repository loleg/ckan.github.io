var options = {
  valueNames: [ 'name', 'author' ],
  item: '<li>' +
  	'<h3 class="name"></h3>' +
  	'<p class="author"></p>' +
  	'</li>'
};

/*var values = [ {
  name: "Martina Elm",
  born: 1986
}];*/


var values = extensions_gh;

var userList = new List('browse-extensions', options, values);

/*userList.add({
  name: "Gustaf Lindqvist",
  born: 1983
});*/