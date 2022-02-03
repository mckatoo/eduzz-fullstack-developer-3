let order = []
let clickedOrder = []
let score = 0
const colors = ['blue','red','green','yellow']

const blueButton = document.querySelector('#blue')
const redButton = document.querySelector('#red')
const greenButton = document.querySelector('#green')
const yellowButton = document.querySelector('#yellow')
const playButton = document.querySelector('#play')

const shuffleOrder = () => {
  const colorSelected = colors[Math.floor(Math.random() * 4)]
  order[order.length] = colorSelected
  clickedOrder = []

  for (let i in order) {
    blink(document.querySelector(`#${order[i]}`))
  }
}

const blink = (element, speed = 2) => {
  element.style.opacity = '0.4'
  speed = speed * 1000
  setTimeout(() => {
  element.style.opacity = '1'
  }, speed - 1000)
}

const checkOrder = () => {
  for (let i in clickedOrder) {
    if (clickedOrder[i] != order[i]) {
      gameOver()
      return
    }
    score++
  }
  if (clickedOrder.length == order.length) {
    playButton.innerHTML = `Pontuação: ${score}\nVocê acertou! Clique aqui para começar o próximo nível!`
    nextLevel()
  }
}

const click = (color) => {
  clickedOrder[clickedOrder.length] = color
  const button = document.querySelector(`#${color}`)
  blink(button, 1)
  checkOrder()
}

const nextLevel = () => {
  shuffleOrder()
}

const gameOver = () => {
  playButton.style.display = 'flex'
  playButton.style.backgroundColor = 'rgb(240, 39, 39)'
  playButton.innerHTML = `Pontuação: ${score}!\nVocê perdeu o jogo!\nClique aqui para iniciar um novo jogo`
  order = []
  clickedOrder = []
}

const playGame = () => {
  score = 0
  playButton.style.display = 'none'

  nextLevel()
}

greenButton.onclick = () => click('green')
redButton.onclick = () => click('red')
yellowButton.onclick = () => click('yellow')
blueButton.onclick = () => click('blue')
playButton.onclick = () => playGame()
