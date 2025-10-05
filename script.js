const blanket = document.getElementById('blanket')
const moodSelect = document.getElementById('moodColour')
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
const savedData = localStorage.getItem('moodData')
if (savedData) {
  console.log('Retrieved data', savedData)
} else {
  console.log('No data found for mood')
}

//make legend -show legend when page loads

//show blanket - show saved blanket row data when page loads
const savedMoods = localStorage.getItem('moodData')
let moodData = []

if (savedMoods) {
  const retrievedData = JSON.parse(savedMoods)
  console.log('Retrieved object:', retrievedData)
  moodData = retrievedData
} else {
  console.log('No data found for savedMoods')
}

//when addbutton clicked then add a new mood row
button.addEventListener('click', function () {
  console.log('Add Mood was pressed')

  //make new mood entry object - mood, intensity, comment, date
  const mood = moodSelect.value
  let intensity = parseInt(intensitySelect.value)
  let comment = commentBox.value.trim()

  if (mood === '') {
    alert('Please pick a mood')
    return
  }

  const today = new Date().toLocaleDateString()

  const entry = {
    mood: mood,
    intensity: intensity,
    comment: comment,
    date: today,
  }

  //save entry
  moodData.push(entry)
  localStorage.setItem('moodData', JSON.stringify(moodData))

  //reset comment box
  commentBox.value = ''

  //show updated blanket
  showBlanket()
})

function showBlanket() {
  blanket.innerHTML = '' // clear old rows

  moodData.forEach(function (entry) {
    // Mood row
    const row = document.createElement('div')
    row.classList.add('row')
    row.style.backgroundColor = moods[entry.mood]
    row.style.height = entry.intensity * 20 + 'px'
    row.style.display = 'flex'
    row.style.justifyContent = 'space-between'
    row.style.padding = '5px'

    // Mood text
    const moodText = document.createElement('span')
    moodText.textContent = entry.date + ' - ' + entry.mood

    // Comment text
    const commentText = document.createElement('span')
    commentText.textContent = entry.comment || ''

    // Add both inside the row
    row.appendChild(moodText)
    row.appendChild(commentText)

    // Add row into the blanket
    blanket.appendChild(row)
  })
}

//make legend
function makeLegend() {
  for (let mood in moods) {
    const item = document.createElement('div')
    item.classList.add('legend-item')

    const colorBox = document.createElement('span')
    colorBox.classList.add('legend-color')
    colorBox.style.backgroundColor = moods[mood]
    colorBox.style.display = 'inline-block'
    colorBox.style.width = '20px'
    colorBox.style.height = '20px'
    colorBox.style.marginRight = '10px'

    const label = document.createElement('span')
    label.textContent = mood

    item.appendChild(colorBox)
    item.appendChild(label)
    legend.appendChild(item)
  }
}

// run both on page load
makeLegend()
showBlanket()
