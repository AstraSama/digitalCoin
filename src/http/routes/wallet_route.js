import { Router } from "express";
import wallet_controller from "../controllers/wallet_controller.js";

const router = Router();

router.post("/", wallet_controller.store)
router.get("/", wallet_controller.index)
router.get("/:id", wallet_controller.show)
router.put("/:id", wallet_controller.update)
router.delete("/:id", wallet_controller.destroy)

export default router;