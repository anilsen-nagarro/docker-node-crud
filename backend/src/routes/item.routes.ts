import { Router } from "express";
import {
  createItem,
  getItems,
  getItemById,
  deleteItem,
  updateItem
} from "../controllers/item.controller";

const router = Router();

router.post("/", createItem);
router.get("/", getItems);
router.get("/:id", getItemById);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

export default router;
