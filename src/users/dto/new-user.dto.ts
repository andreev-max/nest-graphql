import { NewUser } from 'src/graphql.schema';
import { IsNotEmpty, IsString, Length, IsEmail } from 'class-validator';

export class NewUserDTO extends NewUser {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @Length(8)
  @IsNotEmpty()
  password: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}
