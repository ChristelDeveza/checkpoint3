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

  static browse = (req, res) => {
    models.album
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static getOneAlbum = (req, res) => {
    models.album
      .find(req.params.id)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.status(404).send({ error: "This id does not exist" });
        } else {
          res.send(rows[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static edit = (req, res) => {
    const album = req.body;
    album.id = parseInt(req.params.id, 10);

    models.album
      .update(album)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.status(404);
        } else {
          res.status(204);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = AlbumsController;
