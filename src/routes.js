const { Router } = require('express');

const PlayersController = require('./Controllers/PlayersController');

const router = Router();

router.get('/players', PlayersController.index);
router.get('/players/:id', PlayersController.show);
router.post('/players', PlayersController.store);
router.put('/players/:id', PlayersController.update);
router.delete('/players/:id', PlayersController.delete);

module.exports = router;
