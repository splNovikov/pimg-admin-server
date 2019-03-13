import { Controller, Get } from '@nestjs/common';
import { ImagesService } from './images.service';
import { Image } from '../models/image';

@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @Get()
  getImages(): Image[] {
    return this.imagesService.getImages();
  }
}
