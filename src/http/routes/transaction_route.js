import { Router } from "express";
import transaction_controller from "../controllers/transaction_controller.js";

const router = Router();

router.post("/", transaction_controller.store)
router.get("/", transaction_controller.index)
router.get("/:id", transaction_controller.show)
router.put("/:id", transaction_controller.update)
router.delete("/:id", transaction_controller.destroy)

export default router;