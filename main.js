// Elements
const btnNewGameEl = document.querySelector('.js-new-game-btn')
const dice1El = document.querySelector('#dice-1 .spinner')
const dice2El = document.querySelector('#dice-2 .spinner')
const player1El = document.querySelector('.js-player-1')
const player2El = document.querySelector('.js-player-2')
const inputFinalScoreEl = document.querySelector('.js-final-score')
const btnRollDiceEl = document.querySelector('.js-roll-dice')
const btnHoldScoreEl = document.querySelector('.js-hold-score')


// Data
const name = {
  player1: 'Player 1',
  player2: 'Player 2'
}
const currentScore = {
  player1: 0,
  player2: 0
}
const totalScore = {
  player1: 0,
  player2: 0
}
let isPlaying = false // Nhận diện xem game đang chơi hay không?
let finalScore = 0
let currentPlayer = 'player-1' // Nhận diện ai là người chơi hiện tại. Tổng có 2 người chơi

function randomDice() {
  const x = Math.random();  // 0 <= x < 1
  const y = x * 6;          // 0 <= y < 6
  const z = Math.floor(y) + 1 // 1 <= z <= 6
  return z
}

function handleNewGame() {
  if (isPlaying) {
    // Người dùng đang chơi dở thì không xử lí gì cả
    return
  }

  // Game chưa bắt đầu
  if (finalScore <= 0) {
    alert('Vui lòng nhập vào giá trị Final Score hợp lệ!')
    return
  }

  // Bắt đầu tiến hành những logic để NewGame
  inputFinalScoreEl.disabled = true

  btnRollDiceEl.classList.remove('disable')
  btnHoldScoreEl.classList.remove('disable')

  player1El.classList.add('active')
}

function switchPlayer() {
  if (currentPlayer === 'player-1') {
    currentPlayer = 'player-2'
    player1El.classList.remove('active')
    player2El.classList.add('active')
  } else if (currentPlayer === 'player-2') {
    currentPlayer = 'player-1'
    player1El.classList.add('active')
    player2El.classList.remove('active')
  }

  // Đưa giá trị điểm currentScore về 0 lại từ đầu
  currentScore.player1 = 0
  currentScore.player2 = 0
  // Hiển thị ra giao diện currentScore về 0
  player1El.querySelector('.js-current-score').innerHTML = currentScore.player1
  player2El.querySelector('.js-current-score').innerHTML = currentScore.player2
}

function handleRollDice() {
  // Sinh số ngâu nhiên cho 2 cục xúc sắc
  const dice1Number = randomDice()
  const dice2Number = randomDice()

  // Hiển thị xúc sắc mới random ra giao diện
  dice1El.classList.remove('dice-1', 'dice-2', 'dice-3', 'dice-4', 'dice-5', 'dice-6')
  dice2El.classList.remove('dice-1', 'dice-2', 'dice-3', 'dice-4', 'dice-5', 'dice-6')

  dice1El.classList.add('dice-' + dice1Number)
  dice2El.classList.add('dice-' + dice2Number)

  // Kiểm tra xem có số nào là 1 và 6 hay không???
  if (dice1Number === 1 || dice1Number === 6 || dice2Number === 1 || dice2Number === 6) {
    // Chuyển lượt chơi 
    switchPlayer()
    return
  }

  if (currentPlayer === 'player-1') {
    // Cập nhật số điểm hiện tại của Player 1
    currentScore.player1 = currentScore.player1 + dice1Number + dice2Number

    // Hiển thị số điểm ra giao diện
    player1El.querySelector('.js-current-score').innerHTML = currentScore.player1
  } else if (currentPlayer === 'player-2') {
    // Cập nhật số điểm hiện tại của Player 2
    currentScore.player2 = currentScore.player2 + dice1Number + dice2Number

    // Hiển thị số điểm ra giao diện
    player2El.querySelector('.js-current-score').innerHTML = currentScore.player2
  }
}

function handleHoldScore() {
  if (currentPlayer === 'player-1') {
    // Tính toán điểm tổng mới cho Player 1
    const newTotal = currentScore.player1 + totalScore.player1
          totalScore.player1 = newTotal
    // Hiển thị ra giao diện bằng DOM
    player1El.querySelector('.js-total-score').innerHTML = newTotal
  } else if (currentPlayer === 'player-2') {
    // Tính toán điểm tổng mới cho Player 2
    const newTotal = currentScore.player2 + totalScore.player2
          totalScore.player2 = newTotal
    // Hiển thị ra giao diện bằng DOM
    player2El.querySelector('.js-total-score').innerHTML = newTotal
  }

  // Chuyển đổi lượt chơi
  switchPlayer()
}

function handleChangeFinalScore() {
  finalScore = Number(inputFinalScoreEl.value)
}

function resetData() {
  dice1El.classList.remove('dice-1', 'dice-2', 'dice-3', 'dice-4', 'dice-5', 'dice-6')
  dice1El.classList.add('dice-1')

  dice2El.classList.remove('dice-1', 'dice-2', 'dice-3', 'dice-4', 'dice-5', 'dice-6')
  dice2El.classList.add('dice-1')

  player1El.querySelector('.js-current-score').innerHTML = '0';
  player2El.querySelector('.js-current-score').innerHTML = '0';

  player1El.classList.remove('winner')
  player1El.classList.remove('active')
  player2El.classList.remove('winner')
  player2El.classList.remove('active')

  player1El.querySelector('.js-player-name').innerHTML = name.player1
  player2El.querySelector('.js-player-name').innerHTML = name.player2

  player1El.querySelector('.js-total-score').innerHTML = 0
  player2El.querySelector('.js-total-score').innerHTML = 0

  btnRollDiceEl.classList.add('disable')
  btnHoldScoreEl.classList.add('disable')
}


// Binding event
btnNewGameEl.addEventListener('click', handleNewGame)
btnRollDiceEl.addEventListener('click', handleRollDice)
btnHoldScoreEl.addEventListener('click', handleHoldScore)
inputFinalScoreEl.addEventListener('input', handleChangeFinalScore)


// Init Game
resetData()