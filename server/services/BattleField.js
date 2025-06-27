const BattleRuleBook = require('../models/BattleRuleBook');

class BattleField {

  constructor() {
    this.battleRuleBook = new BattleRuleBook();
  }

    battlePreparation(ownarmy, enemyarmy) {
    const battleFormation = BattleField.battleFormation(ownarmy);

  for (const order of battleFormation) {
    let winCount = 0;
    let loseCount = 0;

    for (let i = 0; i < 5; i++) {
      let ownSoldier = order[i];
      let enemySoldier = enemyarmy[i];

      const outcome = this.battleRuleBook.warField(ownSoldier, enemySoldier);
      
      if (outcome == 1){
        winCount++;
      }else if (outcome == 0) {
        loseCount++;
      }
      if (winCount >= 3) {
        return order;
      }
    }

  }

  return null;
}


static battleFormation(arr) {
  let result = [[]];

  for (const item of arr) {
    const newResult = [];
    for (const perm of result) {
      for (let i = 0; i <= perm.length; i++) {
        const newPerm = [...perm.slice(0, i), item, ...perm.slice(i)];
        newResult.push(newPerm);
      }
    }
    result = newResult;
  }

  return result;
  }
}

module.exports = BattleField;