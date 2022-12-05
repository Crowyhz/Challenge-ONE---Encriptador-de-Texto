const text = document.querySelector("#text");
const msj = document.querySelector("#msjEncrip");
const msjUndefined = document.querySelector("#msjVacio");

msj.disabled = true;

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar() {
	const textEncriptado = encriptar(text.value);
	msj.value = textEncriptado;
	text.value = "";
	msj.style.backgroundImage = "none";
	msjUndefined.style.display = "none";
	msj.style.display = "inline-block";
}

function btnDesencriptar() {
	const textDesencriptado = desencriptar(text.value);
	msj.value = textDesencriptado;
	text.value = "";
	msj.style.backgroundImage = "none";
	msjUndefined.style.display = "none"
}

function encriptar(string) {
	let codigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
	string = string.toLowerCase();
	// console.log(string);

	for (let i = 0; i < codigo.length; i++) {
		if (string.includes(codigo[i][0])) {
			string = string.replaceAll(codigo[i][0], codigo[i][1]);
		}
	}

	return string;
}

function desencriptar(string) {
	let codigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
	string = string.toLowerCase();
	// console.log(string);

	for (let i = 0; i < codigo.length; i++) {
		if (string.includes(codigo[i][1])) {
			string = string.replaceAll(codigo[i][1], codigo[i][0]);
		}
	}

	return string;
}

function copiar() {
	msj.select();
	navigator.clipboard.writeText(msj.value);

	let tooltip = document.getElementById("myTool");
	tooltip.innerHTML = "Copiado: " + msj.value;

	msj.value = "";

	if (msj.style.backgroundImage == "none") {
		msj.style.backgroundImage = "url(../img/Muñeco.png)";
	}

	msjUndefined.style.display = "block";
}

function outCopiar() {
	let tooltip = document.getElementById("myTool");
	tooltip.innerHTML = "Copiar al portapapeles";
}