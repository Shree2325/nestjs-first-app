import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  askQuestion():string{
    return '<h2>How are you ? </h2>';
  }
}
