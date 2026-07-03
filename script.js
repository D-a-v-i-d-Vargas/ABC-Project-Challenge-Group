function h5ChangeColor(elemento) {
	let numeroAleatorio = Math.floor(Math.random() * 3) + 1;
	console.log(numeroAleatorio);

	let colorAsignado;

	switch (numeroAleatorio) {
		case 1:
			colorAsignado = "red";
			break;
		case 2:
			colorAsignado = "green";
			break;
		case 3:
			colorAsignado = "blue";
			break;
	}

	elemento.style.color = colorAsignado;
}
