buttonEncrypt = getElementById("encrypt")
buttonDecrypt = getElementById("decrypt")

function encrypt() {
	text = getElementById("text-input");
	text = text.replace('e', "enter");
	text = text.replace('i', "imes");
	text = text.replace('a', "ai");
	text = text.replace('o', "ober");
	text = text.replace('u', "ufat");
	return text;
}

function decrypt() {
	text = getElementById("text-input");
	text = text.replace("enter", 'e');
	text = text.replace("imes", 'i');
	text = text.replace("ai", 'a');
	text = text.replace("ober", 'o');
	text = text.replace("ufat", 'u');
	return text;
}

buttonEncrypt.onClick = encrypt();
buttonEncrypt.onClick = decrypt();