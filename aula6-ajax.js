

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

$.ajax({
	url: "https://swapi.co/api/people/1/",
	method: "GET"
})
.done(function(info){
preencherPerfil(info)
})

