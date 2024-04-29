import { Test, TestingModule } from '@nestjs/testing';
import { SumserviceService } from './sumservice.service';

describe('SumserviceService', () => {
  let service: SumserviceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SumserviceService],
    }).compile();

    service = module.get<SumserviceService>(SumserviceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
