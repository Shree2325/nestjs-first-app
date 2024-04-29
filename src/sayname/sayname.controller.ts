import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { SaynameDto } from 'src/dto/sayname.dto';

@Controller('sayname')
export class SaynameController {

    @Post()
    getname(@Body() name:SaynameDto){
            return `My name is ${name.name}`;
    }
}
