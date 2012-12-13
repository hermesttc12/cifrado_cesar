var ABC = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

var cipher = function(phrase, desp){
	return phrase.split('').map(function(letter){
		return cipherChar(letter, desp);
	}).plain();
}

var decipher = function(phrase, desp){
	return phrase.split('').map(function(letter){
		return decipherChar(letter, desp);
	}).plain();
}

var cipherChar = function(letter, shift) {
	return applyShift(letter, shift);
};

var decipherChar = function(letter, shift) {
	return applyShift(letter, -shift);
};

var applyShift = function(letter, shift){
	if (!isALetter(letter)) return letter;
	var index = ABC.indexOf(letter) + shift;
	index = realocateIndex(index);
	return ABC[index];
}

var realocateIndex = function(index){
	if (index < 0){
		return ABC.length + index;
	}else{
		return index % ABC.length;
	}
}

var isALetter = function(letter){
	return ABC.indexOf(letter) >= 0;
}


