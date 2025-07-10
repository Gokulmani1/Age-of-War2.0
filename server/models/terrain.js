const terrainMap = require('./terrainMap');
class terrain {


    static terrainAdvantage(own, enemy) {
        // console.log(terrainMap);
        let ownterrainAdvantage = 0;
        let enemyterrainAdvantage = 0;
        let ownStrength = 0;
        let enemyStrength = 0;
        if (own.terrain != "Default") {
            // console.log(terrainMap[own.terrain][own.unitClass]);
            ownterrainAdvantage = terrainMap[own.terrain][own.unitClass] || 0;
            enemyterrainAdvantage = terrainMap[enemy.terrain][enemy.unitClass] || 0;
            if (ownterrainAdvantage != 0) ownStrength = ownStrength + ownterrainAdvantage;
            if (enemyterrainAdvantage != 0) enemyStrength = enemyStrength + enemyterrainAdvantage;
        }
        return { ownStrength, enemyStrength };
    }
}

module.exports = terrain;
