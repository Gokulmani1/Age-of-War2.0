const express = require('express');
const router = express.Router();
const Platoon = require('../models/Platoon');
const BattleField = require('../services/BattleField');

router.post('/battle', (req, res) => {
  try {
    const { own, enemy } = req.body;
console.log('Received Platoons:', { own, enemy });
    const ownPlatoons = own.map(platoon => new Platoon(platoon.class, platoon.count));
    const enemyPlatoons = enemy.map(platoon => new Platoon(platoon.class, platoon.count));

    const battleField = new BattleField();
    const arrangedPlatoons = battleField.battlePreparation(ownPlatoons, enemyPlatoons);

    if (arrangedPlatoons) {
      const formattedResult = arrangedPlatoons.map(unit => ({ class: unit.unitClass, count: unit.count }));
      return res.status(200).json({ result: formattedResult });
    } else {
      return res.status(400).json({ error: 'There is no chance of winning' });
    }

  } catch (err) {
    return res.status(500).json({ error: 'Unexpected error occurred' });
  }
});

module.exports = router;
