const AbstractManager = require("./AbstractManager");

class TracksManager extends AbstractManager {
  static table = "track";

  insert(track, albumId) {
    return this.connection.query(
      `insert into ${TracksManager.table} (title, duration, album_id) values (?, ?, ?)`,
      [track.title, track.duration, albumId]
    );
  }

  delete(id) {
    return this.connection.query(`delete from ${this.table} where id = ?`, [
      id,
    ]);
  }

  findTrack(albumId) {
    return this.connection.query(
      `select * from  ${this.table} where album_id= ?`,
      [albumId]
    );
  }
}

module.exports = TracksManager;
