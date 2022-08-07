var buttonEncrypt = document.getElementById("encrypt");
var buttonDecrypt = document.getElementById("decrypt");
var outputText = document.getElementById("text-output");

function encrypt() {
	let text = document.getElementById("text-input").value;
	text = text.replace('e', "enter");
	text = text.replace('i', "imes");
	text = text.replace('a', "ai");
	text = text.replace('o', "ober");
	text = text.replace('u', "ufat");
	outputText.innerHTML = text;
}

function decrypt() {
	let text = document.getElementById("text-input").value;
	text = text.replace("enter", 'e');
	text = text.replace("imes", 'i');
	text = text.replace("ai", 'a');
	text = text.replace("ober", 'o');
	text = text.replace("ufat", 'u');
	outputText.innerText = text;
}

buttonEncrypt.onClick = encrypt;
buttonEncrypt.onClick = decrypt;