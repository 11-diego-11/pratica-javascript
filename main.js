

function preencherPerfil (info) {
	var template =	`
	<h1>Aula 6 - AJAX</h1>
	
		<figure>
			<img src="" alt="">
		</figure>
		<h1>${info.name}</h1>
			<ul>
				<li>
					<span>Altura:</span>
					<span>${info.height+"cm"}</span>
				</li>
				<li>
					<span>cor do cabelo:</span>
					<span>${info.hair_color}</span>
				</li>
				<li>
					<span>Ano do nascimento:</span>	
					<span>${info.birth_year}</span>	
				</li>
				<li>
					<span>Naves:</span>
					<span"><ul></ul></span>
					
				</li>
			</ul>
	
	`

	// nome.innerHTML = info.name;
	// altura.innerHTML = info.height + "cm";
	// cabelo.innerHTML = info.hair_color;
	// nascimento.innerHTML = info.birth_year;

	var perfil = document.getElementById("perfil");
	perfil.innerHTML = template; 
}
	
	
$.ajax({
	url: "https://swapi.co/api/people/11/",
	method: "GET"
})
.done(function(info){
preencherPerfil(info)
})

