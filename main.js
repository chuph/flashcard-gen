var inquirer = require('inquirer'); 
var Basic = require('./BasicCard.js');
var Cloze = require('./ClozeCard.js');

inquirer.prompt([
	{
		type: 
		name: 'question',
		message: 'Which question type would you like to use?'
	}
]).then(function(answer) {

switch(answer) {

	case 'basic':
	basicQuestion();
	break;

	case 'cloze':
	clozeQuestion();
	break;
}

function basicQuestion() {
	inquirer.prompt([
	{
		name: 'vague',
		message: 'What is your basic question?'
	}, {
		name: 'precise',
		message: 'What is the answer?'
	}
]).then(function(bleu) {
	console.log('Question: ' + bleu.vague);
	console.log('Answer: ' + bleu.precise);
});
	
}

function clozeQuestion() {
	inquirer.prompt([
	{
		name: 'red',
		message: 'What is your cloze question?'
	}, {
		name: 'violet',
		message: 'What is the answer?'
	}
]).then(function(cordon) {
	console.log('Question: ' + cordon.red);
	console.log('Answer: ' + cordon.violet);
});

}

});

