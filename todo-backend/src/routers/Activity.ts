import express from "express";

import oktaAuth from "middleware/oktaAuth";

const router = express.Router();
router.post("/", , async (req, res) => {
  res.send("hello");
});

export default router;
