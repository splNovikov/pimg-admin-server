import { Test, TestingModule } from '@nestjs/testing';

import { ImagesController } from './images.controller';
import { ImagesService } from './images.service';

describe('ImagesController', () => {
  let imagesController: ImagesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ImagesController],
      providers: [ImagesService],
    }).compile();

    imagesController = app.get<ImagesController>(ImagesController);
  });

  describe('root', () => {
    it('should return mocked array', () => {
      expect(imagesController.getImages()).toEqual([{ title: 'title1', path: 'path1' }, { title: 'title2', path: 'path2' }]);
    });
  });
});
