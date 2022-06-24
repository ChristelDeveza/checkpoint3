const models = require("../models");

class AlbumsController {
  static create = (req, res) => {
    const { title, artist } = req.body;
    if (!title || !artist) {
      res.status(400).send({ error: "Please specify both title and artist" });
      return;
    }
    models.album
      .insert({ title, artist })
      .then(([result]) => {
        res.status(201).send({ id: result.insertId, title, artist });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = AlbumsController;
