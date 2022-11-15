import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNumberString,
  IsNotEmpty,
  ValidateNested,
} from 'class-validator';
import { CreateAdressDto } from './createAdress.dto';

export class CreateCustomerDto {
  @IsEmail()
  email: string;

  @IsNumberString()
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CreateAdressDto)
  adress: CreateAdressDto;
}
