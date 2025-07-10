// Defines terrain advantages for each unit class
const terrainMap = {
    Hill: {
        CavalryArcher: 2,
        FootArcher: 2,
        Militia: 0.5,
        Spearmen: 0.5,
        LightCavalry: 0.5,
        HeavyCavalry: 0.5,
    },
    Plains: {
        CavalryArcher: 2,
        LightCavalry: 2,
        HeavyCavalry: 2,
    },
    Muddy: {
        FootArcher: 2,
        Militia: 2,
        Spearmen: 2,
    },
    Default: 0,
};

module.exports = terrainMap;
