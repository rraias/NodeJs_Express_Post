const PlayersRepository = require('../Repositories/PlayersRepository');

class PlayersController {
  async index(request, response) {
    const { orderBy } = request.query;
    const players = await PlayersRepository.findAll(orderBy);
    response.json(players);
  }

  async show(request, response) {
    const { id } = request.params;
    const player = await PlayersRepository.findById(id);
    response.json(player);
  }

  async store(request, response) {
    const { name, position, team } = request.body;

    if (!name) {
      response.json({ error: 'Name is required!' });
    }
    const player = await PlayersRepository.create({ name, position, team });
    response.json(player);
  }

  async update(request, response) {
    const { id } = request.params;
    const { name, position, team } = request.body;

    if (!name) {
      response.json({ error: 'Name is required!' });
    }

    const player = await PlayersRepository.update(id, { name, position, team });
    response.json(player);
  }

  async delete(request, response) {
    const { id } = request.params;
    await PlayersRepository.delete(id);
    response.sendStatus(204);
  }
}

// Singleton
module.exports = new PlayersController();
