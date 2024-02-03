const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 17;

let chosenMaxlife = 100;
let currentMonsterHealth = chosenMaxlife;
let currentPlayerHealth = chosenMaxlife;

adjustHealthBars(chosenMaxlife);

function attackMonster(mode) {
  let maxDamage;
  if (mode === "ATTACK") {
    maxDamage = ATTACK_VALUE;
  } else if (mode === "STRONG_ATTACK") {
    maxDamage = STRONG_ATTACK_VALUE;
  }
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  if (currentMonsterHealth <= 0 && currentPlayerHealth >= 0) {
    alertI("you win!");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth >= 0) {
    alert("you lost!");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert("you have drow!");
  }
}

function attackHandler() {
    attackMonster('ATTACK')
}
function strongAttackHnadler(){
    attackMonster('STRONG_ATTACK')
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHnadler)
