import express from "express";
import { Router, Request, Response } from "express";

import UserController from 'controllers/User'

const router: Router = express.Router();
router.get("/", async (req: Request, res: Response) => {
  res.send("hello");
});

router.post("/", async (req: Request, res: Response) => {
  //...
  
  

});

export default router;
