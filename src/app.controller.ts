import { BadRequestException, Body, Controller, Get ,Param,Post, Query, Req, Res  } from '@nestjs/common';
import { AppService } from './app.service';
import { AnswerDto } from './dto/app.dto';
import { SumserviceService } from './sumservice/sumservice.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,private sumService:SumserviceService) {}

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

  @Post('/sum')
  getSum(@Body() numbers:AnswerDto , @Req() req , @Res() res){
    if(numbers.num1 != null && numbers.num2 != null)  return res.status(200).json({res :  this.sumService.calculateSum(numbers.num1,numbers.num2)});
    throw new BadRequestException();
  }


 

 
}
