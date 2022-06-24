const AbstractManager = require("./AbstractManager");

class TracksManager extends AbstractManager {
  static table = "track";

  insert(track) {
    return this.connection.query(
      `insert into ${TracksManager.table} (title, duration, album_id) values (?, ?, ?)`,
      [track.title, track.duration, track.album_id]
    );
  }

  delete(id) {
    return this.connection.query(`delete from ${this.table} where id = ?`, [
      id,
    ]);
  }
}

module.exports = TracksManager;
