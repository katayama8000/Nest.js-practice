import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('100')
  get100(): string {
    return this.appService.get100();
  }

  @Get('101')
  get101(): string {
    return this.appService.get101();
  }

  @Get('102')
  get102(): string {
    return this.appService.get102();
  }

  @Get('200')
  get200(): string {
    return this.appService.get200();
  }

  @Get('201')
  get201(): string {
    return this.appService.get201();
  }

  @Get('202')
  get202(): string {
    return this.appService.get202();
  }

  @Get('203')
  get203(): string {
    return this.appService.get203();
  }

  @Get('204')
  get204(): string {
    return this.appService.get204();
  }

  @Get('205')
  get205(): string {
    return this.appService.get205();
  }

  @Get('206')
  get206(): string {
    return this.appService.get206();
  }

  @Get('207')
  get207(): string {
    return this.appService.get207();
  }

  @Get('300')
  get300(): string {
    return this.appService.get300();
  }

  @Get('301')
  get301(): string {
    return this.appService.get301();
  }

  @Get('302')
  get302(): string {
    return this.appService.get302();
  }

  @Get('303')
  get303(): string {
    return this.appService.get303();
  }

  @Get('304')
  get304(): string {
    return this.appService.get304();
  }

  @Get('305')
  get305(): string {
    return this.appService.get305();
  }

  @Get('306')
  get306(): string {
    return this.appService.get306();
  }

  @Get('307')
  get307(): string {
    return this.appService.get307();
  }

  @Get('400')
  get400(): string {
    return this.appService.get400();
  }

  @Get('401')
  get401(): string {
    return this.appService.get401();
  }

  @Get('402')
  get402(): string {
    return this.appService.get402();
  }

  @Get('403')
  get403(): string {
    return this.appService.get403();
  }

  @Get('404')
  get404(): string {
    return this.appService.get404();
  }

  @Get('405')
  get405(): string {
    return this.appService.get405();
  }

  @Get('406')
  get406(): string {
    return this.appService.get406();
  }

  @Get('407')
  get407(): string {
    return this.appService.get407();
  }

  @Get('408')
  get408(): string {
    return this.appService.get408();
  }

  @Get('409')
  get409(): string {
    return this.appService.get409();
  }

  @Get('410')
  get410(): string {
    return this.appService.get410();
  }
}
