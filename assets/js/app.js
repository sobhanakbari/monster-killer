const ATTACK_VALUE = 10;

let chosenMaxlife = 100;
let currentMonsterHealth = chosenMaxlife;
let currentPlayerHealth = chosenMaxlife;

adjustHealthBars(chosenMaxlife);

function attackHandler() {
  const damage = dealMonsterDamage(ATTACK_VALUE);
  currentMonsterHealth -= damage;
}

attackBtn.addEventListener("click", attackHandler);
