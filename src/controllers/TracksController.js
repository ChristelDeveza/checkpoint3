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
    models.track
      .delete(req.params.id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = TracksController;
