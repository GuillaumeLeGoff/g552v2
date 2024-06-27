import { Macro } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { Inject, Service } from "typedi";
import { MacroService } from "../services/macro.service";
import { CreateMacroDto } from "../validation/macro.validation";

@Service()
export class MacroController {
  constructor(@Inject(() => MacroService) private macroService: MacroService) {}

  createMacro = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const macroData = req.body as CreateMacroDto;
      const newMacro = await this.macroService.createMacro(macroData);
      res.status(201).json({ data: newMacro, message: "created" });
    } catch (error) {
      next(error);
    }
  };

  findAllMacros = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const macros = await this.macroService.findAllMacros();
      res.status(200).json({ data: macros, message: "findAll" });
    } catch (error) {
      next(error);
    }
  };

  findMacro = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { button_id, user_id } = req.params;
      const macro = await this.macroService.findMacro(
        parseInt(button_id),
        parseInt(user_id)
      );
      res.status(200).json({ data: macro, message: "findOne" });
    } catch (error) {
      next(error);
    }
  };

  updateMacro = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { button_id, user_id } = req.params;
      const macroData = req.body as Macro;
      const updatedMacro = await this.macroService.updateMacro(
        parseInt(button_id),
        parseInt(user_id),
        macroData
      );
      res.status(200).json({ data: updatedMacro, message: "updated" });
    } catch (error) {
      next(error);
    }
  };

  deleteMacro = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { button_id, user_id } = req.params;
      await this.macroService.deleteMacro(
        parseInt(button_id),
        parseInt(user_id)
      );
      res.status(200).json({ message: "deleted" });
    } catch (error) {
      next(error);
    }
  };
}
