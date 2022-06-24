const AbstractManager = require("./AbstractManager");

class TracksManager extends AbstractManager {
  static table = "track";

  insert(track) {
    return this.connection.query(
      `insert into ${TracksManager.table} (title, duration, album_id) values (?, ?, ?)`,
      [track.title, track.duration, track.album_id]
    );
  }

  update(item) {
    return this.connection.query(
      `update ${TracksManager.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }
}

module.exports = TracksManager;
