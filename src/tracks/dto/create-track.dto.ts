import { IsArray, IsInt, IsOptional, IsString } from 'class-validator';
import { NewTrack } from 'src/graphql.schema';

export class CreateTrackDto extends NewTrack {
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  albumId: string;

  @IsArray()
  @IsOptional()
  bandsIds: string[];

  @IsArray()
  @IsOptional()
  artistsIds: string[];

  @IsInt()
  @IsOptional()
  duration: number;

  @IsInt()
  @IsOptional()
  released: number;

  @IsArray()
  @IsOptional()
  genresIds: string[];
}
