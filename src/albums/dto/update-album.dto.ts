import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';
import { UpdatedAlbum } from 'src/graphql.schema';

export class UpdateAlbumDto extends UpdatedAlbum {
  @IsString()
  @IsOptional()
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
