import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';
import { NewAlbum } from 'src/graphql.schema';

export class CreateAlbumDto extends NewAlbum {
  @IsString()
  name: string;

  @IsNumber()
  @IsOptional()
  released: number;

  @IsArray()
  @IsOptional()
  artistsIds: string[];

  @IsArray()
  @IsOptional()
  bandsIds: string[];

  @IsArray()
  @IsOptional()
  trackIds: string[];

  @IsArray()
  @IsOptional()
  genresIds: string[];
}
