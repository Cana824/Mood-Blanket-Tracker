const blanket = document.getElementById('blanket')
const select = document.getElementById('moodColour')
const intensitySelect = document.getElementById('moodIntensity')
const button = document.getElementById('addMood')
const legend = document.getElementById('legend')
const commentBox = document.getElementById('comment')

const moods = {
  Anxious: '#692544',
  Angry: '#ff0000',
  Calm: '#6fc5fa',
  Confident: '#fecb00',
  Depressed: '#41648d',
  Disappointed: '#dfddab',
  Excited: '#d81b5c',
  Happy: '#ffde21',
  Hopeful: '#ffa0b3',
  Loved: '#ff8da1',
  Neutral: '#ffffff',
  Overwhelmed: '#d52121',
  Playful: '#e8779e',
  Productive: '#5f609c',
  Stressed: '#3b060f',
  Tired: '#596e79',
  Thoughtful: '#7d79be',
}

//load saved data
const savedData = localStorage.getItem('moodColour')
if (savedData) {
  console.log('Retrieved data', savedData)
} else {
  console.log('No data found for mood')
}

//make legend -show legend when page loads

//show blanket - show saved blanket row data when page loads
const savedMoods = localStorage.getItem('moodColour')
if (savedMoods) {
  const retrievedData = JSON.parse(savedMoods)
  console.log('Retrieved object:', savedMoods)
} else {
  console.log('No data found for savedMoods')
}

//when addbutton clicked then add a new mood row
addMood.addEventListener('click', function () {
  console.log('Add Mood was pressed')

  //make new mood entry object - mood, intensity, comment, date
  const mood = moodSelect.value
  let intensity = parseInt(intensitySelect.value)
  let comment = commentBox.value.trim()

  const today = new Date().toLocaleDateString()

  const entry = {
    mood: mood,
    intensity: intensity,
    comment: comment,
    date: today,
  }

  //save entry

  //reset comment box

  //show updated blanket
})
