var Cloze = function(text, cloze) {
	this.cloze = cloze;
	this.partial = cloze.replace(cloze, '.....');
	this.fullText = text;
}

module.exports = Cloze;