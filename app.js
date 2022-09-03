let stripsOfTape = 200
let stripPerClick = 1
let passiveStrips = 0

let clickUpgrades = [
  {
    name: 'More Strips',
    price: 1,
    quantity: 0,
    increase: 1
  },
  {
    name: 'Thicker Rolls',
    price: 5,
    quantity: 0,
    increase: 2
  },
  {
    name: 'Endless Tape',
    price: 30,
    quantity: 0,
    increase: 5
  }
];

let passiveUpgrades = [
  {
    name: 'Tape Connoisseur',
    price: 200,
    quantity: 0,
    increase: 10
  }
];

function mine() {
  stripsOfTape += stripPerClick
  update()
}

// NOTE You can automate this!
// NOTE put in array number as argument, draw number into index via parameter!!!
// function buyClick(index) {
//   console.log(clickUpgrades[index]);
// }

function buyClick1() {
  if (stripsOfTape >= clickUpgrades[0].price) {
    clickUpgrades[0].quantity++
    stripsOfTape -= clickUpgrades[0].price
    clickUpgrades[0].price = Math.ceil(clickUpgrades[0].price * 1.1)
    stripPerClick += clickUpgrades[0].increase

  } else {
    return
  }
  update()
}
function buyClick2() {
  if (stripsOfTape >= clickUpgrades[1].price) {
    clickUpgrades[1].quantity++
    stripsOfTape -= clickUpgrades[1].price
    clickUpgrades[1].price = Math.ceil(clickUpgrades[1].price * 1.2)
    stripPerClick += clickUpgrades[1].increase

  } else {
    return
  }
  update()
}
function buyClick3() {
  if (stripsOfTape >= clickUpgrades[2].price) {
    clickUpgrades[2].quantity++
    stripsOfTape -= clickUpgrades[2].price
    clickUpgrades[2].price = Math.ceil(clickUpgrades[2].price * 1.2)
    stripPerClick += clickUpgrades[2].increase

  } else {
    return
  }
  update()
}

function passiveMine() {
  stripsOfTape += passiveStrips
  update()
}

function buyPassive1() {
  if (stripsOfTape >= passiveUpgrades[0].price) {
    passiveStrips += passiveUpgrades[0].increase
    stripsOfTape -= passiveUpgrades[0].price
    passiveUpgrades[0].price = Math.ceil(passiveUpgrades[0].price * 1.3)
    passiveUpgrades[0].quantity++
    passiveMine()
  }
  update()
}



function update() {
  // NOTE Data
  let data = document.getElementById('data')

  // @ts-ignore
  let currentRolls = data.querySelector(`.currentStrips`)
  // @ts-ignore
  let currentStripsPerClick = data.querySelector(`.stripsPerClick`)
  // @ts-ignore
  let currentPassive = data.querySelector(`.passiveStrips`)


  // NOTE Click Upgrades
  let clickUpg = document.getElementById('clickUpgrades')

  // @ts-ignore
  let currentClick1 = clickUpg.querySelector(`.currentClick1`)
  // @ts-ignore
  let currentClick2 = clickUpg.querySelector(`.currentClick2`)
  // @ts-ignore
  let currentClick3 = clickUpg.querySelector(`.currentClick3`)

  // NOTE Passive Upgrades
  let passiveUpg = document.getElementById(`workers`)

  // @ts-ignore
  let worker1 = passiveUpg.querySelector(`.worker1`)

  // NOTE InnerText
  // @ts-ignore
  currentClick1.innerHTML = `<button class="btn btn-outline-success " onclick="buyClick1()">BUY</button> <p class="mb-0">Longer Strips  +1</p> <p class="text-secondary">Purchased: ${clickUpgrades[0].quantity} Price: ${clickUpgrades[0].price}</p>`
  // @ts-ignore
  currentClick2.innerHTML = `<button class="btn btn-outline-success " onclick="buyClick2()">BUY</button> <p class="mb-0">Thicker Rolls  +2</p> <p class="text-secondary">Purchased: ${clickUpgrades[1].quantity} Price: ${clickUpgrades[1].price}</p>`
  // @ts-ignore
  currentClick3.innerHTML = `<button class="btn btn-outline-success " onclick="buyClick3()">BUY</button> <p class="mb-0">Endless Tape  +5</p> <p class="text-secondary">Purchased: ${clickUpgrades[2].quantity} Price: ${clickUpgrades[2].price}</p>`
  // @ts-ignore
  worker1.innerHTML = `<button class="btn btn-outline-success " onclick="buyPassive1()">BUY</button> <p class="mb-0">Mr. Sticky  +5</p> <p class="text-secondary">Purchased: ${passiveUpgrades[0].quantity} Price: ${passiveUpgrades[0].price}</p>`
  // @ts-ignore
  currentPassive.innerHTML = `StripsPerSecond: ${passiveStrips}`
  // @ts-ignore
  currentStripsPerClick.innerText = `StripsPerClick: ${stripPerClick}`
  // @ts-ignore
  currentRolls.innerHTML = `<div class="text-decoration-underline">Strips</div> <div>${stripsOfTape}</div>`
}

update()
setInterval(passiveMine, 1000)