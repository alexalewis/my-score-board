const main = () => {
  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent = 'Hello, World!'
  }
}

// update team one name

const updateTeamOneName = () => {
  const teamName1 = document.querySelector('.team-1-input').value
  const updateName1 = teamName1
  console.log(updateName1)

  document.querySelector('.team-1-name').textContent = updateName1
}

// update team two name

const updateTeamTwoName = () => {
  const teamName2 = document.querySelector('.team-2-input').value
  const updateName2 = teamName2
  console.log(updateName2)

  document.querySelector('.team-2-name').textContent = updateName2
}
// add to team one score

const addTeamOneScore = () => {
  const teamOneScore = document.querySelector('.team-1-score').textContent
  const total = parseFloat(teamOneScore) + 1
  console.log(total)

  document.querySelector('.team-1-score').textContent = total
}
// add to team two score

const addTeamTwoScore = () => {
  const teamTwoScore = document.querySelector('.team-2-score').textContent
  const total = parseFloat(teamTwoScore) + 1
  console.log(total)

  document.querySelector('.team-2-score').textContent = total
}
// subtract team one score

const subtractTeamOneScore = () => {
  const teamOneScore = document.querySelector('.team-1-score').textContent
  const total = parseFloat(teamOneScore) - 1
  console.log(total)

  document.querySelector('.team-1-score').textContent = total
}
// subtract team two score

const subtractTeamTwoScore = () => {
  const teamTwoScore = document.querySelector('.team-2-score').textContent
  const total = parseFloat(teamTwoScore) - 1
  console.log(total)

  document.querySelector('.team-2-score').textContent = total
}

document.addEventListener('DOMContentLoaded', main)

// Event Listeners

document
  .querySelector('.update-team-1-name')
  .addEventListener('click', updateTeamOneName)

document
  .querySelector('.update-team-2-name')
  .addEventListener('click', updateTeamTwoName)

document
  .querySelector('.team-1-add-1-button')
  .addEventListener('click', addTeamOneScore)

document
  .querySelector('.team-2-add-1-button')
  .addEventListener('click', addTeamTwoScore)

document
  .querySelector('.team-1-subtract-1-button')
  .addEventListener('click', subtractTeamOneScore)

document
  .querySelector('.team-2-subtract-1-button')
  .addEventListener('click', subtractTeamTwoScore)
