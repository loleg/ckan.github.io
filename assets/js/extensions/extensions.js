var options = {
  valueNames: [ 'name', 'description', 'author', 'url' ],
  searched: true,
  item: '<li>' +
  	'<a class="url"><h3 class="name"></h3></a>' +
  	'<p class="author"></p>' +
  	'<p class="description"></p>' +
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