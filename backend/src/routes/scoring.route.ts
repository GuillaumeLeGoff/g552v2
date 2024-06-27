import { Router } from "express";
import { Container } from "typedi";
import { ScoringController } from "../controllers/scoring.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { validateDto } from "../middlewares/validation.middleware";
import { CreateScoringDto } from "../validation/scoring.validation";

const router = Router();

const scoringController = Container.get(ScoringController);

router.post(
  "/",
  authMiddleware,
  validateDto(CreateScoringDto),
  (req, res, next) => scoringController.createScoring(req, res, next)
);

router.get("/", authMiddleware, (req, res, next) =>
  scoringController.findAllScorings(req, res, next)
);

router.get("/:id", authMiddleware, (req, res, next) =>
  scoringController.findScoring(req, res, next)
);

router.put("/:id", authMiddleware, (req, res, next) =>
  scoringController.updateScoring(req, res, next)
);

router.delete("/:id", authMiddleware, (req, res, next) =>
  scoringController.deleteScoring(req, res, next)
);

export default router;
