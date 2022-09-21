const db = require('../../database');

class PlayersRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'ASC' ? 'ASC' : 'DESC';
    const rows = await db.query(`
    SELECT *
    FROM players
    ORDER BY name ${direction}`);
    return rows;
  }

  async findById(id) {
    const [row] = await db.query(`
    SELECT *
    FROM players
    WHERE id = $1`, [id]);
    return row;
  }

  async create({ name, position, team }) {
    const [row] = await db.query(`
    INSERT INTO players(name, position, team)
    VALUES ($1, $2, $3)
    RETURNING *
    `, [name, position, team]);
    return row;
  }

  async update(id, { name, position, team }) {
    const [row] = await db.query(`
    UPDATE players
    SET name = $1, position = $2, team = $3
    WHERE id = $4
    RETURNING *`, [name, position, team, id]);
    return row;
  }

  async delete(id) {
    const deleteOp = await db.query(`
    DELETE
    FROM players
    WHERE id= $1`, [id]);
    return deleteOp;
  }
}

// Singleton
module.exports = new PlayersRepository();
