const models = require("../models");

class TracksController {
  static addTrack = (req, res) => {
    const track = req.body;

    models.track
      .insert(track)
      .then(([result]) => {
        res.status(201).send({ ...track, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static deleteTrack = (req, res) => {
    models.item
      .delete(req.params.id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static browseTracks = (req, res) => {
    models.track
      .findTrack(req.params.id)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.sendStatus(404);
        } else {
          res.send(rows);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = TracksController;
