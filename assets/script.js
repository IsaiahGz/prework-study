let topics = ['HTML', 'CSS', 'Git', 'JavaScript']
let randomTopic = topics[Math.floor(Math.random() * topics.length)]

function listTopics() {
	for (let i = 0; i < topics.length; i++) {
		console.log(topics[i])
	}
}

function selectTopic() {
	if (randomTopic === 'HTML') {
		console.log("Let's study HTML!")
	} else if (randomTopic === 'CSS') {
		console.log("Let's study CSS!")
	} else if (randomTopic === 'Git') {
		console.log("Let's study Git!")
	} else if (randomTopic === 'JavaScript') {
		console.log("Let's study JavaScript!")
	} else {
		console.log('Please try again!')
	}
}

console.log('Topics learned through Prework:')
listTopics()
console.log('Random topic:')
selectTopic()
