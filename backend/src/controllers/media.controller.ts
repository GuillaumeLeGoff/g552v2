import { Media } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { Inject, Service } from "typedi";
import { MediaService } from "../services/media.service";
import { CreateMediaDto } from "../validation/media.validation";
import { HttpException } from "../exceptions/HttpException";
import { UploadService } from "../services/upload.service";

@Service()
export class MediaController {
  constructor(
    @Inject(() => MediaService) private mediaService: MediaService,
    @Inject(() => UploadService) private uploadService: UploadService
  ) {}

  uploadFile = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.uploadService.handleUpload(req, res, async () => {
        await this.mediaService.createMedia(req, res, () => {
          res.status(201).json({ data: req.file, message: "created" });
        });
      });
    } catch (error) {
      next(error);
    }
  };

  getAllMedia = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const media = await this.mediaService.findAllMedias();
      res.status(200).json({ data: media, message: "findAll" });
    } catch (error) {
      next(error);
    }
  };

  getMediaById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { media_id } = req.params;
      const media = await this.mediaService.findMedia(parseInt(media_id));
      res.status(200).json({ data: media, message: "findOne" });
    } catch (error) {
      next(error);
    }
  };

  updateMedia = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { media_id } = req.params;
      const mediaData = req.body as Media;
      const updatedMedia = await this.mediaService.updateMedia(
        parseInt(media_id),
        mediaData
      );
      res.status(200).json({ data: updatedMedia, message: "updated" });
    } catch (error) {
      next(error);
    }
  };

  deleteMedia = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { media_id } = req.params;
      const media = await this.mediaService.findMedia(parseInt(media_id));
      await this.mediaService.deleteMedia(parseInt(media_id)).then(() => {
        this.uploadService.deleteMedia(media);
        res.status(200).json({ message: "deleted" });
      });
    } catch (error) {
      next(error);
    }
  };
}
