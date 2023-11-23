// Questions that will be asked
const Questions = [{
	q: "Who is this character?",
  i:"https://static.wikia.nocookie.net/onepiece-fairytail/images/5/5f/Monkey_D._Luffy.png",
	a: [{ text: "Monkey D. Dragon", isCorrect: false },
	{ text: "Monkey D. Garp", isCorrect: false },
	{ text: "Monkey D. Luffy", isCorrect: true },
	{ text: "Demaro Black", isCorrect: false }
	]

},
{
	q: "Who is this character?",
  i:"https://static.wikia.nocookie.net/onepiece-fairytail/images/5/50/Roronoa_Zoro.png",
	a: [{ text: "Manjaro", isCorrect: false, isSelected: false },
	{ text: "Ryuma", isCorrect: false },
	{ text: "Oden", isCorrect: false },
	{ text: "Zoro", isCorrect: true }
	]

},
{
	q: "Who is this character?",
  i:"https://static.wikia.nocookie.net/onepiece-fairytail/images/d/dd/Nami.png",
	a: [{ text: "Chocolat", isCorrect: false },
	{ text: "Bellemare", isCorrect: false },
	{ text: "Nami", isCorrect: true },
	{ text: "Raiju", isCorrect: false }
	]
},
{
	q: "Who is this character?",
  i:"https://static.wikia.nocookie.net/onepiece-fairytail/images/5/53/Usopp.png",
	a: [{ text: "Sogeking", isCorrect: false },
	{ text: "Usopp", isCorrect: true },
	{ text: "Pinocchio", isCorrect: false },
	{ text: "Mounblutain", isCorrect: false }
	]
},
{
	q: "Who is this character?",
  i:"https://static.wikia.nocookie.net/onepiece-fairytail/images/4/48/Sanji.png",
	a: [{ text: "Yonji", isCorrect: false },
	{ text: "Drip", isCorrect: false },
	{ text: "Judge", isCorrect: false },
	{ text: "Sanji", isCorrect: true }
	]
},
{
	q: "Who is this character?",
  i:"https://static.wikia.nocookie.net/onepiece-fairytail/images/6/66/Tony_Tony_Chopper.png",
	a: [{ text: "Kumacy", isCorrect: false },
	{ text: "Chopper", isCorrect: true },
	{ text: "RacoonDog", isCorrect: false },
	{ text: "Nora Gitsune", isCorrect: false }
	]
},
{
	q: "Who is this character?",
  i:"https://static.wikia.nocookie.net/onepiece-fairytail/images/0/06/Nico_Robin.png",
  a: [{ text: "Nico Robin", isCorrect: true },
	{ text: "Ms.Doublefinger", isCorrect: false },
	{ text: "Nico Olivia", isCorrect: false },
	{ text: "Cocoa", isCorrect: false }
	]
},
{
	q: "Who is this character?",
  i:"https://static.wikia.nocookie.net/onepiece-fairytail/images/3/35/Franky.png",
	a: [{ text: "Cyborg 23", isCorrect: false },
	{ text: "Turco", isCorrect: false },
	{ text: "Franky", isCorrect: true },
	{ text: "BF-36", isCorrect: true }
	]
},
{
	q: "Who is this character?",
  i:"https://static.wikia.nocookie.net/onepiece-fairytail/images/5/55/Brook.png",
	a: [{ text: "Sans", isCorrect: false },
	{ text: "Brook", isCorrect: true },
	{ text: "Ghost Rider", isCorrect: false },
	{ text: "Death", isCorrect: false }
	]
},

]

let currQuestion = 0
let score = 0

function loadQues() {
	const question = document.getElementById("ques")
	const opt = document.getElementById("opt")
  const im = document.getElementById("img")

	question.textContent = Questions[currQuestion].q;
  im.style.backgroundImage = `url(${Questions[currQuestion].i})`
	opt.innerHTML = ""

	for (let i = 0; i < Questions[currQuestion].a.length; i++) {
		const choicesdiv = document.createElement("div");
		const choice = document.createElement("input");
		const choiceLabel = document.createElement("label");

		choice.type = "radio";
		choice.name = "answer";
		choice.value = i;

		choiceLabel.textContent = Questions[currQuestion].a[i].text;

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
}

loadQues();

function loadScore() {
	const totalScore = document.getElementById("score")
	totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}


function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("btn").remove()
		loadScore();
	}
}

function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[currQuestion].a[selectedAns].isCorrect) {
		score++;
		console.log("Correct")
		nextQuestion();
	} else {
		nextQuestion();
	}
}
