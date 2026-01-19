import { Router } from "express";
import {
  createItem,
  getItems,
  getItemById,
  deleteItem
} from "../controllers/item.controller";

const router = Router();

router.post("/", createItem);
router.get("/", getItems);
router.get("/:id", getItemById);
router.delete("/:id", deleteItem);

export default router;
