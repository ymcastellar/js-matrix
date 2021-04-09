const $num1 = document.getElementById('js-input-number1')
const $num2 = document.getElementById('js-input-number2')
const $btnGenerate = document.getElementById('js-btn-generate')
const $listNumbers = document.getElementById('js-list-numbers')

$btnGenerate.addEventListener('click', function () {
	document.getElementById("js-matrix").innerHTML = "";
	function array2() {
		let array2 = new Array(parseInt($num2.value)).fill(null).map(() => getArray());
		return array2;
	}
	
	new Array(parseInt($num1.value)).fill(null).map(() => array2());
		
	showbuton ()
})

function getArray () {
	let tag = document.createElement("input");
	tag.setAttribute("type", "number");
	tag.setAttribute("class", "js-ArrayInput result__ArrayInput input");
	
	//document.body.append(tag);
	document.getElementById("js-matrix").append(tag);
}

function appendNumbersOnList (numbers) {
  let items = ''
  numbers.forEach(n => (items += `<li>${n}</li>`))
  $listNumbers.innerHTML = items
}

function showbuton () {
  let newbtn = document.createElement("button");
	newbtn.setAttribute('type', 'button')
	newbtn.setAttribute('onClick', 'validateSum()')
	newbtn.setAttribute('class', 'btn')
	newbtn.textContent = "Calculate";
	document.getElementById("js-calculate-btn").innerHTML = "";
	document.getElementById("js-calculate-btn").append(newbtn);
}

function validateSum() {
	const $arrayInput = document.getElementsByClassName('js-ArrayInput')
	let sum = 0
	for (let i = 0; i < $arrayInput.length; i++) {
		for (let j = 0; j < $arrayInput[i].value.length; j++) {
			sum += parseInt($arrayInput[j].value);
			//console.log(parseInt($arrayInput[i].value)+ ' oli');
		}
		console.log(sum)
	}
	document.getElementById("js-result").innerHTML = "";	
	document.getElementById("js-result").append('Total of Matrix is: ' + sum)
	
	//console.log($arrayInput[0].value)
}
