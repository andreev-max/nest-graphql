import { IsArray, IsOptional, IsString, Matches } from 'class-validator';
import { NewArtist } from 'src/graphql.schema';

export class CreateArtistDto extends NewArtist {
  @IsString()
  firstName: string;

  @IsString()
  secondName: string;

  @IsOptional()
  @IsString()
  middleName: string;

  @IsOptional()
  @Matches(/[0-9]{2}\/[0-9]{2}\/[0-9]{4}/)
  birthDate: string;

  @IsOptional()
  @IsString()
  birthPlace: string;

  @IsOptional()
  @IsString()
  country: string;

  @IsOptional()
  @IsArray()
  bandsIds: string[];

  @IsOptional()
  @IsArray()
  instruments: string[];
}
