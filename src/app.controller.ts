import { Body, Controller, Get ,Param,Post, Query, Req, Res  } from '@nestjs/common';
import { AppService } from './app.service';
import { AnswerDto } from './dto/app.dto';
import { stat } from 'fs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() req, @Res() res) {
    console.log(req.headers)
    res.status(200).json({
      res: this.appService.getHello()
    })
  }

  @Get('/askquestion')
  askQuestion():string{
    return this.appService.askQuestion();
  }

  @Post('/answer')
  getAnswer(@Body() answer:AnswerDto,@Req() req,   @Res() res){
    let status,response;
    if(req.body.answer === 'yes'){
      response = "It is yes";
      status = 200
    }else{
      response = "It is no"
      status = 400
    }
    return res.status(status).json({res : response});
  }

  // @Get('/page')
  // getQueryParams(@Query('name') name , @Query('age') age):string{
  //   return `${name} , ${age}`;
  // }

  // @Get(':id')
  // getId(@Param('id') id):string{
  //   return `${id}`;
  // }

 

 
}
