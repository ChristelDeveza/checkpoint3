const AbstractManager = require("./AbstractManager");

class AlbumsManager extends AbstractManager {
  static table = "album";

  insert(album) {
    return this.connection.query(
      `insert into ${AlbumsManager.table} (title, artist) values (?, ?)`,
      [album.title, album.artist]
    );
  }

  update(album) {
    return this.connection.query(
      `update ${AlbumsManager.table} set title = ?, artist = ? where id = ?`,
      [album.title, album.artist, album.id]
    );
  }
}

module.exports = AlbumsManager;
