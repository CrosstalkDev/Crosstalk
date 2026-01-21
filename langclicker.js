/*Assigning Variables*/  
let mdud = "peak";
let money = 0;
let mpc = 1;
let mpcPrice = 10;
let mps = 0;
let mpsPrice = 50;
let highestmoney = Number(localStorage.getItem("highestmoney")) || 0;

/*Turning Displays in text*/
const moneyDisplay = document.getElementById("money");
const mpcDisplay = document.getElementById("mpc");
const mpcPriceDisplay = document.getElementById("mpcPrice");
const mpsDisplay = document.getElementById("mps");
const mpsPriceDisplay = document.getElementById("mpsPrice");

document.getElementById("highestscore").innerHTML = highestmoney;

/*Update the displays*/
function displayupdate() {
  moneyDisplay.textContent = money;
  mpcDisplay.textContent = mpc;
  mpcPriceDisplay.textContent = mpcPrice;
  mpsDisplay.textContent = mps;
  mpsPriceDisplay.textContent = mpsPrice;
  /*Saving Highestscore in the local storage*/
  document.getElementById("highestscore").innerHTML = highestmoney;
  if (money > highestmoney) {
    highestmoney = money;
    localStorage.setItem("highestmoney", highestmoney);
    document.getElementById("highestscore").innerHTML = highestmoney;
  }
}

/*If button is clicked*/
function clicked() {
  money = money + mpc;
  displayupdate();
}

/*Upgrading MPC*/
function upgradempc() {
  if (money >= mpcPrice) { 
    money = money - mpcPrice;
    mpc = mpc + 1;
    mpcPrice = (10 * (1.07**mpc));
    mpcPrice = mpcPrice.toFixed(0)
    displayupdate();
  }
  else {
    alert(" No money :( ");
  }
}

/*Upgrading MPS*/
function upgrademps() {
  if (money >= mpsPrice) {
    money = money - mpsPrice;
    mps = mps + 1;
    mpsPrice = (50 * (1.07**mps));
    mpsPrice = mpsPrice.toFixed(0)
    displayupdate();
  }
  else {
    alert(" No money :( ");
  }
}

/*Making the Seconds for the MPS*/
setInterval(function() {
  money = money + mps;
  displayupdate();
}, 750);
displayupdate();
