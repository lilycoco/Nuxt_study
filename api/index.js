const { Router } = require("express");
const router = Router();

router.get("/auth", (req, res) => {
  const auth = require("./auth.js");
  res.send(auth);
  // return "API server works fine"
});

router.get("/board", (req, res) => {
  const board = require("./board.js");
  console.log({ req, res });
  res.send(board);
});

module.exports = router;
