import { IsInt, IsNotEmpty, IsOptional } from 'class-validator';
import { NewGenre } from 'src/graphql.schema';

export class CreateGenreDto extends NewGenre {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsOptional()
  description: string;

  @IsNotEmpty()
  @IsOptional()
  country: string;

  @IsNotEmpty()
  @IsInt()
  @IsOptional()
  year: number;
}
