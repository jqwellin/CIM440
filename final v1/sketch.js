
var prompts = [
{
	prompt: 'I feel disconnected from my work',
	weight: -1,
	class: 'group0'
},
{
	prompt: 'My work has purpose',
	weight: 1,
	class: 'group1'
},
{
	prompt: 'I do not often feel driven and motivated at my current job',
	weight: -1,
	class: 'group2'
},
{
	prompt: 'I dread the weekdays',
	weight: -1,
	class: 'group3'
},

{
	prompt: 'I am usually highly motivated and energetic',
	weight: 1,
	class: 'group4'
},
{
	prompt: 'I spend my time doing things I love',
	weight: 1,
	class: 'group5'
},

]

//PROMPT VALUES

var prompt_values = [
{
	value: 'Strongly Agree',
	class: 'btn-default btn-strongly-agree',
	weight: 5
},
{
	value: 'Agree',
	class: 'btn-default btn-agree',
	weight: 3,
},
{
	value: 'Neutral',
	class: 'btn-default',
	weight: 0
},
{
	value: 'Disagree',
	class: 'btn-default btn-disagree',
	weight: -3
},
{
	value: 'Strongly Disagree',
	class: 'btn-default btn-strongly-disagree',
	weight: -5
}
]

// For each prompt, create a list item to be inserted in the list group

function createPromptItems() {

	for (var i = 0; i < prompts.length; i++) {
		var prompt_li = document.createElement('li');
		var prompt_p = document.createElement('p');
		var prompt_text = document.createTextNode(prompts[i].prompt);

		prompt_li.setAttribute('class', 'list-group-item prompt');
		prompt_p.appendChild(prompt_text);
		prompt_li.appendChild(prompt_p);

		document.getElementById('quiz').appendChild(prompt_li);
	}
}

function createValueButtons() {
	for (var li_index = 0; li_index < prompts.length; li_index++) {
		var group = document.createElement('div');
		group.className = 'btn-group btn-group-justified';

		for (var i = 0; i < prompt_values.length; i++) {
			var btn_group = document.createElement('div');
			btn_group.className = 'btn-group';

			var button = document.createElement('button');
			var button_text = document.createTextNode(prompt_values[i].value);
			button.className = 'group' + li_index + ' value-btn btn ' + prompt_values[i].class;
			button.appendChild(button_text);

			btn_group.appendChild(button);
			group.appendChild(btn_group);

			document.getElementsByClassName('prompt')[li_index].appendChild(group);
		}
	}
}

createPromptItems();
createValueButtons();

var total = 0;

// Get the weight associated to group number
function findPromptWeight(prompts, group) {
	var weight = 0;

	for (var i = 0; i < prompts.length; i++) {
		if (prompts[i].class === group) {
			weight = prompts[i].weight;
		}
	}

	return weight;
}

// Get the weight associated to the value
function findValueWeight(values, value) {
	var weight = 0;

	for (var i = 0; i < values.length; i++) {
		if (values[i].value === value) {
			weight = values[i].weight;
		}
	}

	return weight;
}


$('.value-btn').mousedown(function () {
	var classList = $(this).attr('class');
	// console.log(classList);
	var classArr = classList.split(" ");
	// console.log(classArr);
	var this_group = classArr[0];
	// console.log(this_group);



	if($(this).hasClass('active')) {
		$(this).removeClass('active');
		total -= (findPromptWeight(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
	} else {

		total -= (findPromptWeight(prompts, this_group) * findValueWeight(prompt_values, $('.'+this_group+'.active').text()));

		$('.'+this_group).removeClass('active');


		$(this).addClass('active');
		total += (findPromptWeight(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
	}

	console.log(total);
})




$('#submit-btn').click(function () {

	$('.results').removeClass('hide');
	$('.results').addClass('show');

	if(total < 0) {

      		document.getElementById('results').innerHTML = '<b>You Can Get Through It!</b><br><br>\
      	It sounds like your current situation is not motivating or inspiring you. Try switching things up or look into alternatives.\n\
      <br><br>\
      		';
      	} else if(total > 0) {
      		document.getElementById('results').innerHTML = '<b>Keep up the Good Work!</b><br><br>\
      		Looks like your current situation brings you a lot of fulfillment––so great! Be sure to keep inspired and continue to try new things.\
      <br><br>\
      ';
      	} else {
      		document.getElementById('results').innerHTML = '<b>You Could Use a Bit of a Push!</b><br><br>\
      		Although you are overall happy with where you are at, it seems like there could still be some room for improvement. Try something new, like a cooking class or taking a day trip in your area that might inspire new ideas and connections.\
      <br><br>\
      '
      	}

	// Hide the quiz after submit
	$('#quiz').addClass('hide');
	$('#submit-btn').addClass('hide');
	$('#retake-btn').removeClass('hide');
})

// Refresh the screen on retake button
$('#retake-btn').click(function () {
	$('#quiz').removeClass('hide');
	$('#submit-btn').removeClass('hide');
	$('#retake-btn').addClass('hide');

	$('.results').addClass('hide');
	$('.results').removeClass('show');
})
