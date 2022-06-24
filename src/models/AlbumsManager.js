const AbstractManager = require("./AbstractManager");

class AlbumsManager extends AbstractManager {
  static table = "album";

  insert(album) {
    return this.connection.query(
      `insert into ${AlbumsManager.table} (title, artist) values (?, ?)`,
      [album.title, album.artist]
    );
  }

  update(item) {
    return this.connection.query(
      `update ${AlbumsManager.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }
}

module.exports = AlbumsManager;
