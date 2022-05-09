import { prisma } from "@prisma/client";
import express from "express";

import oktaAuth from "middleware/oktaAuth";

const router = express.Router();

router.post("/", oktaAuth, async (req, res) => {
  await prisma
});

export default router;
