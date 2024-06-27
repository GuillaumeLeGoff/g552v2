import { Scoring } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { Inject, Service } from "typedi";
import { ScoringService } from "../services/scoring.service";
import { CreateScoringDto } from "../validation/scoring.validation";

@Service()
export class ScoringController {
  constructor(
    @Inject(() => ScoringService) private scoringService: ScoringService
  ) {}

  createScoring = async (req: Request, res: Response, next: NextFunction) => {
    console.log("createScoring");

    try {
      const scoringData = req.body as CreateScoringDto;
      const newScoring = await this.scoringService.createScoring(scoringData);
      res.status(201).json({ data: newScoring, message: "created" });
    } catch (error) {
      console.log("createScoring error", error);

      next(error);
    }
  };

  findAllScorings = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const scorings = await this.scoringService.findAllScorings();
      res.status(200).json({ data: scorings, message: "findAll" });
    } catch (error) {
      next(error);
    }
  };

  findScoring = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const scoring = await this.scoringService.findScoring(parseInt(id));
      res.status(200).json({ data: scoring, message: "findOne" });
    } catch (error) {
      next(error);
    }
  };

  updateScoring = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const scoringData = req.body as Scoring;
      const updatedScoring = await this.scoringService.updateScoring(
        parseInt(id),
        scoringData
      );
      res.status(200).json({ data: updatedScoring, message: "updated" });
    } catch (error) {
      next(error);
    }
  };

  deleteScoring = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      await this.scoringService.deleteScoring(parseInt(id));
      res.status(200).json({ message: "deleted" });
    } catch (error) {
      next(error);
    }
  };
}
