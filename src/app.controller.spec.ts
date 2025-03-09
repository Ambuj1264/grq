import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    // Create a mock service implementation
    const mockAppService = {
      getHello: jest.fn().mockReturnValue('Hello World!'),
    };

    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: AppService,
          useValue: mockAppService,
        },
      ],
    }).compile();

    appController = moduleRef.get<AppController>(AppController);
    appService = moduleRef.get<AppService>(AppService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getHello', () => {
    it('should call the service getHello method', () => {
      // Act
      appController.getHello();

      // Assert
      expect(appService.getHello).toHaveBeenCalled();
      expect(appService.getHello).toHaveBeenCalledTimes(1);
    });

    it('should return the value from the service', () => {
      // Arrange
      const expectedResult = 'Hello World!';
      jest.spyOn(appService, 'getHello').mockReturnValue(expectedResult);

      // Act
      const result = appController.getHello();

      // Assert
      expect(result).toBe(expectedResult);
    });

    it('should handle different return values from the service', () => {
      // Arrange
      const customMessage = 'Custom greeting';
      jest.spyOn(appService, 'getHello').mockReturnValue(customMessage);

      // Act
      const result = appController.getHello();

      // Assert
      expect(result).toBe(customMessage);
    });
  });
});
