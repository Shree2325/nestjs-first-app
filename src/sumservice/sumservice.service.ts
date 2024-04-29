import { Injectable } from '@nestjs/common';

@Injectable()
export class SumserviceService {

    calculateSum(a:number , b:number){
        return a+b;
    }
}
