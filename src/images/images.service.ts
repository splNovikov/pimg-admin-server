import { Injectable } from '@nestjs/common';
import { Image } from '../models/image';

// todo: move to firebase:
const images: Image[] = [{ title: 'title1', path: 'path1' }, { title: 'title2', path: 'path2' }];

@Injectable()
export class ImagesService {
  getImages(): Image[] {
    return images;
  }
}
