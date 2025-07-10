const terrain = require("./terrain");

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
    let terrainAdvantage = terrain.terrainAdvantage(own, enemy);
    let result = -1;
    // let ownterrainAdvantage = 0;
    // let enemyterrainAdvantage = 0;
    let ownStrength = terrainAdvantage.ownStrength;
    let enemyStrength = terrainAdvantage.enemyStrength;
    // if (own.terrain != "Default") {
    //   ownterrainAdvantage = BattleRuleBook.terrainMap[own.terrain][own.unitClass]?.includes(terrain) ? (BattleRuleBook.terrainMap[own.terrain][own.unitClass]) : (0);
    //   enemyterrainAdvantage = BattleRuleBook.terrainMap[enemy.terrain][enemy.unitClass]?.includes(terrain) ? (BattleRuleBook.terrainMap[enemy.terrain][enemy.unitClass]) : (0);
    //   if (ownterrainAdvantage != 0) ownStrength =terrain.ownterrainAdvantage
    //   if (enemyterrainAdvantage != 0) enemyStrength = enemyStrength * enemyterrainAdvantage;
    // }
    const ownAdvantage = BattleRuleBook.advantageMap[own.unitClass]?.includes(enemy.unitClass);
    const enemyAdvantage = BattleRuleBook.advantageMap[enemy.unitClass]?.includes(own.unitClass);
    ownStrength = own.count;
    enemyStrength = enemy.count;
    if (ownAdvantage) ownStrength *= 2;
    if (enemyAdvantage) enemyStrength *= 2;
    if (ownStrength > enemyStrength) result = 1;
    if (ownStrength === enemyStrength) result = 0;
    return result;
  }
}

module.exports = BattleRuleBook;
