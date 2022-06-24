const express = require("express");

const {
  ItemController,
  AlbumsController,
  TracksController,
} = require("./controllers");

const router = express.Router();

router.post("/albums", AlbumsController.create);
router.get("/albums", AlbumsController.browse);
router.get("/albums/:id", AlbumsController.getOneAlbum);
router.put("/albums/:id", AlbumsController.edit);
router.post("/albums/:id/tracks", TracksController.addTrack);

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

module.exports = router;
