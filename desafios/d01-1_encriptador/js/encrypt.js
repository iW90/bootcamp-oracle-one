function encrypt() {

	const inputText = document.getElementById("text-input").value;
	const outputText = document.getElementById("text-output");
	let encryptedText = "";

	//code
	const lettersToEncrypt = ['e', 'i', 'a', 'o', 'u'];
	const lettersEncrypted = ["enter", "imes", "ai", "ober", "ufat"];

	if (inputText != "") {
		for (let i = 0; i < lettersToEncrypt.length; i++)
			encryptedText = inputText.replaceAll(lettersToEncrypt[i], lettersEncrypted[i]);
		outputText.innerText = encryptedText;
	} else {
		document.alert("Insira um texto a ser codificado.");
	}

}

document.getElementById("encrypt").onClick = encrypt;





	// text = text.replace('e', "enter");
	// text = text.replace('i', "imes");
	// text = text.replace('a', "ai");
	// text = text.replace('o', "ober");
	// text = text.replace('u', "ufat");
	// outputText.innerHTML = text;


var botonEncriptar = document.querySelector("#boton1");
var campo2 = document.querySelector("#campo2");
var resultado = document.querySelector("#campo2");
var copiar = document.querySelector("#campo1");
botonEncriptar.addEventListener("click", function(event) {
    event.preventDefault();
    console.log(" encripto ");
    encriptar(campo2);
});

function encriptar(campo2) {
    let campo = document.getElementById('campo2').value.toLowerCase('en-US');
    campo = (campo).replace('e', 'enter');
    campo = (campo).replace('i', 'imes');
    campo = (campo).replace("a", "ai");
    campo = (campo).replace("o", "ober");
    campo = (campo).replace("u", "ufat");
    console.log(campo);
    resultado.value = campo;
    copiar.value = campo;
}