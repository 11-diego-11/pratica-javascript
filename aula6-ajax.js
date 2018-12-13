// var MOCK_DA_RESPOSTA = {
// 	"name": "Luke Skywalker Ferreira da Silva Orleans e Bragança",
// 	"height": "172",
// 	"mass": "77",
// 	"hair_color": "blond",
// 	"skin_color": "fair",
// 	"eye_color": "blue",
// 	"birth_year": "19BBY",
// 	"gender": "male",
// 	"homeworld": "https://swapi.co/api/planets/1/",
// 	"films": [
// 		"https://swapi.co/api/films/2/",
// 		"https://swapi.co/api/films/6/",
// 		"https://swapi.co/api/films/3/",
// 		"https://swapi.co/api/films/1/",
// 		"https://swapi.co/api/films/7/"
// 	],
// 	"species": [
// 		"https://swapi.co/api/species/1/"
// 	],
// 	"vehicles": [
// 		"https://swapi.co/api/vehicles/14/",
// 		"https://swapi.co/api/vehicles/30/"
// 	],
// 	"starships": [
// 		"https://swapi.co/api/starships/12/",
// 		"https://swapi.co/api/starships/22/"
// 	],
// 	"created": "2014-12-09T13:50:51.644000Z",
// 	"edited": "2014-12-20T21:17:56.891000Z",
// 	"url": "https://swapi.co/api/people/1/"
// }

// function loadDoc() {
// 	var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 7 && this.status == 200) {
//       console.log(this.responseText)
//       preencherPerfil(JSON.parse(this.responseText));
//       this.responseText;
//     }
//   };
//   xhttp.open("GET", "https://swapi.co/api/people/5/", true);
//   xhttp.send();
// }

function preencherPerfil (info) {
	var nome = document.querySelector(".nome");
	var altura = document.querySelector("#altura");
	var cabelo = document.querySelector("#cor_cabelo");
	var nascimento = document.querySelector("#ano_nascimento");
	var naves = document.querySelector("#naves");

	nome.innerHTML = info.name;
	altura.innerHTML = info.height + "cm";
	cabelo.innerHTML = info.hair_color;
	nascimento.innerHTML = info.birth_year;
	
	$.each(info.starships, function(index, starship){
		console.log(starship)
		$(naves).find("ul").append(
			$("<li>").html(starship)
		)

	})

}
// loadDoc()

$.ajax({
	url: "https://swapi.co/api/people/1/",
	method: "GET"
})
.done(function(info){
preencherPerfil(info)
})

