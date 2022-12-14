
function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./img/icon-${player1}.svg" alt="Bandeira do ${player1}">
      <strong>${hour}</strong>
      <img src="./img/icon-${player2}.svg" alt="Bandeira da ${player2}">
    </li>
  `
}

let delay = -0.3;
function createCard(date, day, games) {
  delay = delay + 0.3;
  return `
  <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
        <ul>
          ${games}
        </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML = 
  createCard(
  "22/12",
  "terça",
    createGame("argentina", "07:00", "saudiarabia") +
      createGame("mexico", "13:00", "poland") +
      createGame("france", "16:00", "australia")
  ) +

  createCard(
    "24/11",
    "quinta",
    createGame("switzerland", "07 :00", "cameroon") +
      createGame("portugal", "13:00", "ghana") +
      createGame("brazil", "16:00", "serbia")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("southkorea", "16:00", "ghana") +
      createGame("switzerland", "13:00", "brazil") +
      createGame("portugal", "16:00", "uruguay")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("portugal", "12:00", "southkorea") +
      createGame("brazil", "16:00", "cameroon") +
      createGame("serbia", "16:00", "switzerland")
  ) 
  
