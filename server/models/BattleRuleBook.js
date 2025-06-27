class BattleRuleBook {

 static advantageMap = {
    Militia: ['Spearmen', 'LightCavalry'],
    Spearmen: ['LightCavalry', 'HeavyCavalry'],
    LightCavalry: ['FootArcher', 'CavalryArcher'],
    HeavyCavalry: ['Militia', 'FootArcher', 'LightCavalry'],
    CavalryArcher: ['Spearmen', 'HeavyCavalry'],
    FootArcher: ['Militia', 'CavalryArcher'],
  };

   warField(own, enemy) {
    const ownAdvantage = BattleRuleBook.advantageMap[own.unitClass]?.includes(enemy.unitClass);
    const enemyAdvantage = BattleRuleBook.advantageMap[enemy.unitClass]?.includes(own.unitClass);
    let ownStrength = own.count;
    let enemyStrength = enemy.count;
    if (ownAdvantage) ownStrength *= 2;
    if (enemyAdvantage) enemyStrength *= 2;
    if (ownStrength > enemyStrength) return 1;
    if (ownStrength === enemyStrength) return 0;
    return -1;
  }
}

module.exports = BattleRuleBook;
