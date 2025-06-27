const Platoon = require('./models/Platoon');
const BattleField = require('./services/BattleField');

const testOwn = [
  new Platoon('Spearmen', 10),
  new Platoon('Militia', 30),
  new Platoon('FootArcher', 20),
  new Platoon('LightCavalry', 1000),
  new Platoon('HeavyCavalry', 120)
];
const testEnemy = [
  new Platoon('Militia', 10),
  new Platoon('Spearmen', 10),
  new Platoon('FootArcher', 1000),
  new Platoon('LightCavalry', 120),
  new Platoon('CavalryArcher', 100)
];

const battleField = new BattleField();
const result = battleField.battlePreparation(testOwn, testEnemy);

if (result) {
  console.log('Winning Arrangement Found:');
  result.forEach(val => console.log(`${val.unitClass}#${val.count}`));
} else {
  console.log('There is no chance of winning');
}
